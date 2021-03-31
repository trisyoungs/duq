// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (c) 2021 Team Dissolve and contributors

#pragma once

#include "base/lineparser.h"
#include "base/sysfunc.h"
#include "genericitems/item.h"
#include "genericitems/producers.h"
#include "templates/optionalref.h"
#include <any>
#include <map>
#include <typeindex>

// Generic List
class GenericList
{
    public:
    GenericList() = default;
    ~GenericList() = default;

    /*
     * Child Items
     */
    private:
    // Map of items, where the tuple corresponds to <object, className, version, flags>
    std::map<std::string, GenericItem::Type> items_;

    public:
    // Clear all items (except those that are marked protected)
    void clear();
    // Clear all items, including protected items
    void clearAll();
    // Return whether the named item is contained in the list
    bool contains(std::string_view name, std::string_view prefix = "") const;
    // Return item list
    const std::map<std::string, GenericItem::Type> &items() const;
    // Return the version of the named item from the list
    int version(std::string_view name, std::string_view prefix = "") const;
    // Remove named item
    void remove(std::string_view name, std::string_view prefix);
    // Rename item
    void rename(std::string_view oldName, std::string_view oldPrefix, std::string_view newName, std::string_view newPrefix);
    // Prune all items with '@suffix'
    void pruneWithSuffix(std::string_view suffix);

    /*
     * Item Creation
     */
    public:
    // Create or retrieve named item as templated type
    template <class T> T &realise(std::string_view name, std::string_view prefix = "", int flags = GenericItem::NoFlags)
    {
        return realiseIf<T>(name, prefix, flags).first;
    }
    // Create or retrieve named item as templated type, also returning whether it was created
    template <class T>
    std::pair<T &, GenericItem::ItemStatus> realiseIf(std::string_view name, std::string_view prefix = "",
                                                      int flags = GenericItem::NoFlags)
    {
        // Construct full name
        std::string varName = prefix.empty() ? std::string(name) : fmt::format("{}_{}", prefix, name);

        auto it = items_.find(varName);
        if (it != items_.end())
        {
            // Check type before we attempt to cast it
            if (std::get<GenericItem::AnyObject>(it->second).type() != typeid(T))
                throw(std::runtime_error(
                    fmt::format("GenericList::realise() - Item named '{}' exists, but has a different type "
                                "to that requested ('{}' vs '{}').\n",
                                prefix.empty() ? name : fmt::format("{}_{}", prefix, name),
                                std::get<GenericItem::AnyObject>(it->second).type().name(), typeid(T).name())));

            // Bump version of the item and return it
            ++std::get<GenericItem::Version>(it->second);
            return {std::any_cast<T &>(std::get<GenericItem::AnyObject>(it->second)), GenericItem::ItemStatus::Existing};
        }

        // Create and return new item
        items_.emplace(varName,
                       GenericItem::Type(GenericItemProducer::create<T>(), GenericItemProducer::className<T>(), 0, flags));
        auto &item = items_[varName];
        return {std::any_cast<T &>(std::get<GenericItem::AnyObject>(item)), GenericItem::ItemStatus::Created};
    }

    /*
     * Item Retrieval
     */
    public:
    // Return named (const) item as templated type
    template <class T> const T &value(std::string_view name, std::string_view prefix = "") const
    {
        auto it = items_.find(prefix.empty() ? std::string(name) : fmt::format("{}_{}", prefix, name));
        if (it == items_.end())
            throw(std::runtime_error(fmt::format("GenericList::value() - Item named '{}' does not exist.\n",
                                                 prefix.empty() ? name : fmt::format("{}_{}", prefix, name))));

        // Check type before we attempt to cast it
        if (std::get<GenericItem::AnyObject>(it->second).type() != typeid(T))
            throw(std::runtime_error(fmt::format(
                "GenericList::value() - Item named '{}' exists, but has a different type to that requested ('{}' vs '{}').\n",
                prefix.empty() ? name : fmt::format("{}_{}", prefix, name),
                std::get<GenericItem::AnyObject>(it->second).type().name(), typeid(T).name())));

        return std::any_cast<const T &>(std::get<GenericItem::AnyObject>(it->second));
    }
    // Return copy of named item as templated type, or a default value
    template <class T> T valueOr(std::string_view name, std::string_view prefix, T valueIfNotFound) const
    {
        auto it = items_.find(prefix.empty() ? std::string(name) : fmt::format("{}_{}", prefix, name));
        if (it == items_.end())
            return valueIfNotFound;

        // Check type before we attempt to cast it
        if (std::get<GenericItem::AnyObject>(it->second).type() != typeid(T))
            throw(std::runtime_error(fmt::format(
                "GenericList::value() - Item named '{}' exists, but has a different type to that requested ('{}' vs '{}').\n",
                prefix.empty() ? name : fmt::format("{}_{}", prefix, name),
                std::get<GenericItem::AnyObject>(it->second).type().name(), typeid(T).name())));

        return std::any_cast<const T>(std::get<GenericItem::AnyObject>(it->second));
    }
    // Return named (const) item as templated type, if it exists
    template <class T> OptionalReferenceWrapper<const T> valueIf(std::string_view name, std::string_view prefix = "") const
    {
        auto it = items_.find(prefix.empty() ? std::string(name) : fmt::format("{}_{}", prefix, name));
        if (it == items_.end())
            return {};

        // Check type before we attempt to cast it
        if (std::get<GenericItem::AnyObject>(it->second).type() != typeid(T))
            throw(std::runtime_error(fmt::format(
                "GenericList::valueIf() - Item named '{}' exists, but has a different type to that requested ('{}' vs '{}').\n",
                prefix.empty() ? name : fmt::format("{}_{}", prefix, name),
                std::get<GenericItem::AnyObject>(it->second).type().name(), typeid(T).name())));

        return std::any_cast<const T &>(std::get<GenericItem::AnyObject>(it->second));
    }
    // Retrieve named item as templated type, assuming that it is going to be modified
    template <class T> T &retrieve(std::string_view name, std::string_view prefix = "")
    {
        auto it = items_.find(prefix.empty() ? std::string(name) : fmt::format("{}_{}", prefix, name));
        if (it == items_.end())
            throw(std::runtime_error(fmt::format("GenericList::retrieve() - Item named '{}' does not exist.\n",
                                                 prefix.empty() ? name : fmt::format("{}_{}", prefix, name))));

        // Check type before we attempt to cast it
        if (std::get<GenericItem::AnyObject>(it->second).type() != typeid(T))
            throw(
                std::runtime_error(fmt::format("GenericList::retrieve() - Item named '{}' exists, but has a different type "
                                               "to that requested ('{}' vs '{}').\n",
                                               prefix.empty() ? name : fmt::format("{}_{}", prefix, name),
                                               std::get<GenericItem::AnyObject>(it->second).type().name(), typeid(T).name())));

        ++std::get<GenericItem::Version>(it->second);
        return std::any_cast<T &>(std::get<GenericItem::AnyObject>(it->second));
    }
    // Return names of all items of the template type
    template <class T> std::vector<std::string_view> all() const
    {
        std::vector<std::string_view> matches;
        for (auto &[key, value] : items_)
            if (std::get<GenericItem::AnyObject>(value).type() == typeid(T))
                matches.emplace_back(key);

        return matches;
    }

    /*
     * Serialisation
     */
    public:
    // Serialise all objects via the specified LineParser
    bool serialiseAll(LineParser &parser, std::string_view headerPrefix) const;
    // Deserialise an object from the LineParser into our map
    bool deserialise(LineParser &parser, CoreData &coreData, std::string name, std::string itemClass, int version = 0,
                     int flags = 0);
};
