window.BENCHMARK_DATA = {
  "lastUpdate": 1620858403226,
  "repoUrl": "https://github.com/disorderedmaterials/dissolve",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tristan.youngs@stfc.ac.uk",
            "name": "Tristan Youngs",
            "username": "trisyoungs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "857ed1117a0bbccf3bec7335a5c3788c1487b50f",
          "message": "Merge pull request #658 from disorderedmaterials/bugfix-26-04-21-hexane\n\nBugfix 26-04-21 Hexane Benchmarks",
          "timestamp": "2021-04-26T11:56:49+01:00",
          "tree_id": "576c5a6efadbd20f6b2dc480f7f0c6b69980ff38",
          "url": "https://github.com/disorderedmaterials/dissolve/commit/857ed1117a0bbccf3bec7335a5c3788c1487b50f"
        },
        "date": 1619435806651,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::SimpleMethod>/iterations:5",
            "value": 19.28569960000459,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 19.2856136 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::CellsMethod>/iterations:5",
            "value": 27.522040400026526,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 27.5186378 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::SimpleMethod>/iterations:5",
            "value": 425.93785019998904,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 425.83516599999996 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::CellsMethod>/iterations:5",
            "value": 648.377309999978,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 648.3444008000001 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::SimpleMethod>/iterations:5",
            "value": 1694.1250154000045,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1694.0535080000002 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::CellsMethod>/iterations:5",
            "value": 2450.489466399995,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2450.1410276 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 9.199777045710034,
            "unit": "ns/iter",
            "extra": "iterations: 75628058\ncpu: 9.199070006531139 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 8.830047089055835,
            "unit": "ns/iter",
            "extra": "iterations: 78148735\ncpu: 8.829897003451173 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 18.72411875627642,
            "unit": "ns/iter",
            "extra": "iterations: 39040193\ncpu: 18.722826856926627 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 17.848223309367658,
            "unit": "ns/iter",
            "extra": "iterations: 37359149\ncpu: 17.84739641687249 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 12.997130419627963,
            "unit": "ns/iter",
            "extra": "iterations: 53548596\ncpu: 12.996389709265163 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 12.974859408016693,
            "unit": "ns/iter",
            "extra": "iterations: 54261451\ncpu: 12.97422433469387 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 13.107007592251097,
            "unit": "ns/iter",
            "extra": "iterations: 53286976\ncpu: 13.106707256197087 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 13.231779124937868,
            "unit": "ns/iter",
            "extra": "iterations: 52869744\ncpu: 13.231463783898802 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 12.997192583790696,
            "unit": "ns/iter",
            "extra": "iterations: 53553869\ncpu: 12.997203731442728 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 13.292925544182623,
            "unit": "ns/iter",
            "extra": "iterations: 52386517\ncpu: 13.29261132210792 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 13.475743957269207,
            "unit": "ns/iter",
            "extra": "iterations: 52254278\ncpu: 13.474502566086654 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 13.51807116813417,
            "unit": "ns/iter",
            "extra": "iterations: 51845929\ncpu: 13.517737969359278 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 13.596732374020515,
            "unit": "ns/iter",
            "extra": "iterations: 51603458\ncpu: 13.596046044046146 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 13.883323872074007,
            "unit": "ns/iter",
            "extra": "iterations: 50033851\ncpu: 13.882981803659346 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 15.480198440510765,
            "unit": "ns/iter",
            "extra": "iterations: 45409075\ncpu: 15.479746284195398 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 16.902103459845602,
            "unit": "ns/iter",
            "extra": "iterations: 41446572\ncpu: 16.90177385478345 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 16.971834852852826,
            "unit": "ns/iter",
            "extra": "iterations: 40921107\ncpu: 16.971048412742103 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 17.40545241978138,
            "unit": "ns/iter",
            "extra": "iterations: 39451988\ncpu: 17.405454853124258 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 19.124724334009244,
            "unit": "ns/iter",
            "extra": "iterations: 36368741\ncpu: 19.12450527226112 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 26.018785632837723,
            "unit": "ns/iter",
            "extra": "iterations: 26888474\ncpu: 26.018597039013773 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 25.970036328913686,
            "unit": "ns/iter",
            "extra": "iterations: 27053661\ncpu: 25.969341487645437 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 25.935640612514593,
            "unit": "ns/iter",
            "extra": "iterations: 26853534\ncpu: 25.93566146638286 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 25.94409738802543,
            "unit": "ns/iter",
            "extra": "iterations: 26986807\ncpu: 25.943774637733156 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 26.24551635423347,
            "unit": "ns/iter",
            "extra": "iterations: 26722004\ncpu: 26.245322281966697 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 26.201559739912984,
            "unit": "ns/iter",
            "extra": "iterations: 26692399\ncpu: 26.201100395659424 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 26.35545225059861,
            "unit": "ns/iter",
            "extra": "iterations: 26572458\ncpu: 26.355474002442666 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 26.304348597902464,
            "unit": "ns/iter",
            "extra": "iterations: 26532529\ncpu: 26.303695701227632 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 26.106937620683407,
            "unit": "ns/iter",
            "extra": "iterations: 26735016\ncpu: 26.106721836261343 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 26.403183550226146,
            "unit": "ns/iter",
            "extra": "iterations: 26517565\ncpu: 26.402975801134275 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 27.451831586753777,
            "unit": "ns/iter",
            "extra": "iterations: 25720922\ncpu: 27.451834152757048 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 28.923052130970255,
            "unit": "ns/iter",
            "extra": "iterations: 24232276\ncpu: 28.922843483624746 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 30.118428790504712,
            "unit": "ns/iter",
            "extra": "iterations: 23206097\ncpu: 30.118421464841873 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 30.26228410063532,
            "unit": "ns/iter",
            "extra": "iterations: 22680822\ncpu: 30.25966210572071 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 36.85910637708931,
            "unit": "ns/iter",
            "extra": "iterations: 20127774\ncpu: 36.85732426248428 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 39.09449099361635,
            "unit": "ns/iter",
            "extra": "iterations: 17934323\ncpu: 39.093988660737125 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 38.99880285853067,
            "unit": "ns/iter",
            "extra": "iterations: 17985343\ncpu: 38.9982416237485 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 38.853818872151486,
            "unit": "ns/iter",
            "extra": "iterations: 18004465\ncpu: 38.85241660887977 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 38.88116941553056,
            "unit": "ns/iter",
            "extra": "iterations: 17943596\ncpu: 38.87964168386285 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 39.01722017741554,
            "unit": "ns/iter",
            "extra": "iterations: 17926180\ncpu: 39.01586740733314 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 38.97681818118647,
            "unit": "ns/iter",
            "extra": "iterations: 17982325\ncpu: 38.97434464119652 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 39.15147183572345,
            "unit": "ns/iter",
            "extra": "iterations: 17992599\ncpu: 39.150164131374524 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 39.280681246351385,
            "unit": "ns/iter",
            "extra": "iterations: 17885160\ncpu: 39.27977239230751 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 39.13495384264283,
            "unit": "ns/iter",
            "extra": "iterations: 17844390\ncpu: 39.134327091035445 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 39.269986628600826,
            "unit": "ns/iter",
            "extra": "iterations: 17813397\ncpu: 39.26980322731278 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 39.59086468387737,
            "unit": "ns/iter",
            "extra": "iterations: 17558648\ncpu: 39.587930118538054 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 40.425795054329136,
            "unit": "ns/iter",
            "extra": "iterations: 17275769\ncpu: 40.424111482388724 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 41.609431911622636,
            "unit": "ns/iter",
            "extra": "iterations: 16813898\ncpu: 41.606692392210356 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 43.396580599279986,
            "unit": "ns/iter",
            "extra": "iterations: 16038132\ncpu: 43.395819787491305 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 49.44330868491107,
            "unit": "ns/iter",
            "extra": "iterations: 12127078\ncpu: 49.44056507264139 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 74.7793596138803,
            "unit": "ns/iter",
            "extra": "iterations: 9339709\ncpu: 74.77600254997171 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 274.1952065389574,
            "unit": "ns/iter",
            "extra": "iterations: 2559904\ncpu: 274.1820771403928 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 1062.8486829869069,
            "unit": "ns/iter",
            "extra": "iterations: 661307\ncpu: 1062.82498899906 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 4407.584094343859,
            "unit": "ns/iter",
            "extra": "iterations: 160094\ncpu: 4407.318275513152 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 23896.94308525205,
            "unit": "ns/iter",
            "extra": "iterations: 29184\ncpu: 23895.407929001878 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 131391.69714070365,
            "unit": "ns/iter",
            "extra": "iterations: 5316\ncpu: 131384.22930775216 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1020634.9399707493,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1020580.956076137 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 5886483.8899078,
            "unit": "ns/iter",
            "extra": "iterations: 109\ncpu: 5886037.055045828 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 398.4968214300339,
            "unit": "ns/iter",
            "extra": "iterations: 1759439\ncpu: 398.4969464698684 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1561.013735129738,
            "unit": "ns/iter",
            "extra": "iterations: 448121\ncpu: 1560.9060878646787 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 6507.876047214836,
            "unit": "ns/iter",
            "extra": "iterations: 107428\ncpu: 6507.524174330769 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 25942.237790678362,
            "unit": "ns/iter",
            "extra": "iterations: 27049\ncpu: 25941.0039557836 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 104930.92932487598,
            "unit": "ns/iter",
            "extra": "iterations: 6636\ncpu: 104928.1764617239 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 419897.79688436765,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 419867.95266626874 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2226221.961782763,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2226083.8821655763 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 9011724.666667456,
            "unit": "ns/iter",
            "extra": "iterations: 75\ncpu: 9011658.120000068 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 886.8224002853257,
            "unit": "ns/iter",
            "extra": "iterations: 790981\ncpu: 886.8135454580968 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3614.5042117186927,
            "unit": "ns/iter",
            "extra": "iterations: 194220\ncpu: 3614.5055401091777 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 12177.885947757624,
            "unit": "ns/iter",
            "extra": "iterations: 57272\ncpu: 12177.14378754028 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 56428.88474249139,
            "unit": "ns/iter",
            "extra": "iterations: 12407\ncpu: 56423.28540340148 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 233216.4186737008,
            "unit": "ns/iter",
            "extra": "iterations: 3031\ncpu: 233208.96271857363 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 896922.793548466,
            "unit": "ns/iter",
            "extra": "iterations: 775\ncpu: 896886.3961290333 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 4235531.113772322,
            "unit": "ns/iter",
            "extra": "iterations: 167\ncpu: 4235410.664670622 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 17465956.820510305,
            "unit": "ns/iter",
            "extra": "iterations: 39\ncpu: 17465959.923076943 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 3987.915937295456,
            "unit": "ns/iter",
            "extra": "iterations: 173894\ncpu: 3987.667147802709 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 19.811316352355156,
            "unit": "ns/iter",
            "extra": "iterations: 35079802\ncpu: 19.81077108131882 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 75.84826034787173,
            "unit": "ns/iter",
            "extra": "iterations: 9291599\ncpu: 75.84390523095053 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.6152100895653111,
            "unit": "ms/iter",
            "extra": "iterations: 1150\ncpu: 0.6151926365217387 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.3915378809787812,
            "unit": "ms/iter",
            "extra": "iterations: 1798\ncpu: 0.3915004566184675 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 378.60367520002,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 378.590770400001 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 382.1498471999803,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 382.1346214000016 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 1571.5643155169832,
            "unit": "ns/iter",
            "extra": "iterations: 429492\ncpu: 1571.5470206662812 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 19.913433396147774,
            "unit": "ns/iter",
            "extra": "iterations: 35107615\ncpu: 19.912265358953942 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 75.53430299362661,
            "unit": "ns/iter",
            "extra": "iterations: 9343616\ncpu: 75.50702361912258 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeTorsionEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 174.29608505145237,
            "unit": "ns/iter",
            "extra": "iterations: 4071982\ncpu: 174.28423234680244 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 4.041151679775488,
            "unit": "ms/iter",
            "extra": "iterations: 178\ncpu: 4.040876516853906 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 24.665266857141432,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 24.6624741785705 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2962.480787000004,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2962.3599452000008 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2991.877467200038,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2991.7489983999985 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adam.washington@stfc.ac.uk",
            "name": "Adam Washington",
            "username": "rprospero"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1be326dc6e5547d767a5bc5f067e098913623eb8",
          "message": "Data Manager Simulation Table Testing (#656)\n\n* Add pugixml to conan\r\n\r\n* Integrate the xml stub in with the rest of the forcefields\r\n\r\n* Link against pugixml as header only\r\n\r\n* Make an xml forcefield system test\r\n\r\n* Start reading XML bond terms\r\n\r\n* Load in most of the force data\r\n\r\n* More xml changes\r\n\r\n* Current status of the xml gui\r\n\r\n* Update forcefield linking in xml\r\n\r\n* Remove actual XML forcefield code for now\r\n\r\n* Start on a decent GUI for the XML forcefield\r\n\r\n* Start filling in slots\r\n\r\n* Use TableView instead of TableWidget\r\n\r\n* Prevent wizard from trying to go past bounds\r\n\r\n* Start with xml model\r\n\r\n* Start filling in bond table\r\n\r\n* Make XmlFFModel a QT Object\r\n\r\n* Move XmlFFModel implementation into a separate file\r\n\r\n* Get the bonds from the XML file\r\n\r\n* Get the bonds from the XML file\r\n\r\n* More accurate name for xmlBondModel\r\n\r\n* Fix xml bond loading\r\n\r\n* Start reading xml angles\r\n\r\n* Start adding atoms to xml import\r\n\r\n* Move to reset model\r\n\r\n* Proper slot for loading xml file\r\n\r\n* Get proper AtomType from atom table\r\n\r\n* Enable assigning atom types on XML Load\r\n\r\n* Move Qt models into their own folder\r\n\r\n* Unbreak the build in cmake\r\n\r\n* First XML unit test builds and passes\r\n\r\n* Better XmlBondModel Test\r\n\r\n* Add test for xml angle loading\r\n\r\n* Add test of XmlAtomModel\r\n\r\n* Highlight xml atom types that have not been linked\r\n\r\n* Separate out GUI unit tests\r\n\r\nThese tests should only build if we're building the GUI.\r\n\r\n* Fix xml table headers\r\n\r\n* Guess best match for Xml Atom Types\r\n\r\n* Stop responding for roles we don't understand\r\n\r\n* More code comments\r\n\r\n* Add Torsion to XML model\r\n\r\n* Add Improper torsions to Xml loader\r\n\r\n* Force a valid xml file in the wizard\r\n\r\n* Stop hard coding data paths in xml tests\r\n\r\n* Refactor GUI\r\n\r\n* Start writing a *real* test for the XML forcefield\r\n\r\n* Start making the actual Forcefield\r\n\r\n* Add xml torsion to real XML ff\r\n\r\n* Add impropers\r\n\r\n* Register new forcefield in unit test\r\n\r\n* Use correct names when adding terms to XML forcefield\r\n\r\n* Allow the wizard to finish\r\n\r\n* Fix improper after merge\r\n\r\n* Fix forcefield models for XML\r\n\r\n* Fix formatting\r\n\r\n* Fix formatting of unit test\r\n\r\n* Fix cmake formatting\r\n\r\n* Fix improper formatting\r\n\r\n* Tidy up xmlAtomModel\r\n\r\n* More improper formatting\r\n\r\n* fix typo in xmlAtomModel\r\n\r\n* Fix whitespace\r\n\r\n* Try fixing gui build on Azure\r\n\r\n* Fix linking to MOC headers in models\r\n\r\n* Fix Qt linking for GUI unit tests\r\n\r\n* GUI tests on Azure need access to Qt\r\n\r\n* Load the Qt ppa in Azure\r\n\r\n* Remove vestigial command line xml code\r\n\r\n* Move models into GUI directory\r\n\r\n* Reorder import headers for formatting\r\n\r\n* Explicit names in forcefield headers\r\n\r\n* Fix header comment on xml forcefield\r\n\r\n* Switch to passing references to the XML forcefield\r\n\r\n* Update src/gui/importforcefieldwizard_funcs.cpp\r\n\r\nCo-authored-by: Tristan Youngs <tristan.youngs@stfc.ac.uk>\r\n\r\n* At least display a tree in the GUI\r\n\r\n* Kind of have the tree model doing the right thing\r\n\r\n* Actually display bond info in the tree.\r\n\r\n* Add atoms and Angles to tree\r\n\r\n* All the data is visible on the tree\r\n\r\n* Clean up indices\r\n\r\n* Don't show non-existent children in tree model\r\n\r\n* Do not require pre-existing atom types\r\n\r\n* Add unit test for XML tree\r\n\r\n* Full test of tree model\r\n\r\n* Don't display tree header\r\n\r\n* Blank headers\r\n\r\n* Actually load the forcefield after the wizard\r\n\r\n* Give the dialog a name\r\n\r\n* Give the XML Forcefield a name\r\n\r\n* Remove unimplemented clear function\r\n\r\n* Clear the Tree when the model is removed\r\n\r\n* Allow clearing xml model\r\n\r\n* Reset import forcefield wizard on restart\r\n\r\n* Add tooltips to import wizard\r\n\r\n* Fix formatting\r\n\r\n* Pass model roles onto cilhdren of XmlTreeModel\r\n\r\n* Start DataManagerModel\r\n\r\n* Fix DataManagerModel Headers\r\n\r\n* Register Model Updates with the DataManager\r\n\r\n* Actually use the new model in the application\r\n\r\n* Move ReferencePoint from List to std::vector\r\n\r\n* Specify which data manager model\r\n\r\n* Set default force field name based on xml file\r\n\r\n* Change Xml tree headers\r\n\r\n* Better tests on the Xml Forcefield\r\n\r\n* Expand trees before resizing columns\r\n\r\n* Fix units on bonds\r\n\r\n* Only test for Double equality on xml import\r\n\r\nSince we're doing unit conversions now, there may be slight changes at\r\nthe low bits\r\n\r\n* Include short range potentials\r\n\r\n* Fix cmake formatting\r\n\r\n* Add cassert where needed\r\n\r\n* Fix gui test linking\r\n\r\n* Compile and link against pugixml\r\n\r\nLinking against pugixml is somehow simpler than using the library header-only\r\n\r\n* Fix cmake formatting\r\n\r\n* Fix the cmake formatting again\r\n\r\n* Stupid tab characters\r\n\r\n* Try and point more directly at the pugixml libraries\r\n\r\n* Publicly link to pugixml\r\n\r\n* Link components to pugixml\r\n\r\n* cmake whitespace\r\n\r\n* Add gcc-8 to linux build\r\n\r\nWe need this for the <filesystem> library\r\n\r\n* Remove GCC-8 dependency\r\n\r\nIt's a sink hole of time.\r\n\r\n* Propagate filename changes\r\n\r\n* Display imported angles in degrees\r\n\r\n* Offer a default header for imported forcefields\r\n\r\n* Add icons to import wizard buttons\r\n\r\nHonestly, the code probably needs a refactor to use the WizardWidget.\r\nHowever, that might get subsumed into a refactor to QML, (which the\r\ntable models already have us setup for), so it's worth just leaving\r\nthis as a note for later.\r\n\r\n* Reset AddForcefieldTermsWizard every time\r\n\r\n* Fix up forcefield registration\r\n\r\n* Give all angles in degrees\r\n\r\nThe units have been standardized since the Babylonians.  It's worth\r\ngetting to know them.\r\n\r\n* Fix unit test to ensure that we check for angles in degrees\r\n\r\n* Move logic into Reference Point Model\r\n\r\n* Actually start testing logic on data manager reference points\r\n\r\n* Get the gui model tests building properly again\r\n\r\n* Better unit test for data manager reference points\r\n\r\n* Fix formatting\r\n\r\n* Remove extra if\r\n\r\n* Remove unneeded casts\r\n\r\n* Better conditions in model\r\n\r\n* Fix more formatting\r\n\r\n* Update src/classes/referencepoint.h\r\n\r\nCo-authored-by: Tristan Youngs <tristan.youngs@stfc.ac.uk>\r\n\r\n* Fix string_view bug\r\n\r\n* Eliminate ReferencePoint class\r\n\r\n* Fix formatting\r\n\r\n* Remove extra braces\r\n\r\n* First compile on new model\r\n\r\n* Add table filter\r\n\r\n* Fix Smiulation table headers\r\n\r\n* Add Simulation Table unit tests\r\n\r\n* Update unit tests for Data Manager Dialog\r\n\r\n* Remove commented out functions\r\n\r\n* Fix formatting\r\n\r\n* Update src/gui/models/dataManagerSimulationModel.h\r\n\r\nCo-authored-by: Tristan Youngs <tristan.youngs@stfc.ac.uk>\r\n\r\n* Handle empty filter\r\n\r\n* Add SPDX to model code\r\n\r\nCo-authored-by: Tristan Youngs <tristan.youngs@stfc.ac.uk>",
          "timestamp": "2021-04-27T09:05:35+01:00",
          "tree_id": "0ad8f6e6faaa656ba7a3cd7e15869fd82447b4fb",
          "url": "https://github.com/disorderedmaterials/dissolve/commit/1be326dc6e5547d767a5bc5f067e098913623eb8"
        },
        "date": 1619511919377,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::SimpleMethod>/iterations:5",
            "value": 17.772195199995622,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 17.5403188 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::CellsMethod>/iterations:5",
            "value": 26.61277320003137,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 26.597918200000002 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::SimpleMethod>/iterations:5",
            "value": 403.837974399994,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 403.7632564 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::CellsMethod>/iterations:5",
            "value": 625.3110598000148,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 625.2454906 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::SimpleMethod>/iterations:5",
            "value": 1625.7856974000333,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1625.6508576 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::CellsMethod>/iterations:5",
            "value": 2409.2757725999945,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2409.1344268000003 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 8.9631061247417,
            "unit": "ns/iter",
            "extra": "iterations: 78644517\ncpu: 8.962756780615742 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 8.71792203951845,
            "unit": "ns/iter",
            "extra": "iterations: 79548558\ncpu: 8.717634982145103 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 18.391568638944978,
            "unit": "ns/iter",
            "extra": "iterations: 40054316\ncpu: 18.390501962385255 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 17.424121362334827,
            "unit": "ns/iter",
            "extra": "iterations: 37939018\ncpu: 17.423166619652687 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 12.651746516290586,
            "unit": "ns/iter",
            "extra": "iterations: 54956573\ncpu: 12.650606416087857 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 12.632047724954209,
            "unit": "ns/iter",
            "extra": "iterations: 55263667\ncpu: 12.631416188867924 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 12.808863470954405,
            "unit": "ns/iter",
            "extra": "iterations: 55626515\ncpu: 12.808326964218423 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 12.947823993236565,
            "unit": "ns/iter",
            "extra": "iterations: 54024947\ncpu: 12.94740709324526 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 12.743581621932927,
            "unit": "ns/iter",
            "extra": "iterations: 56689205\ncpu: 12.742804207608918 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 13.095209399761696,
            "unit": "ns/iter",
            "extra": "iterations: 55245144\ncpu: 13.094328073432106 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 12.867040250184905,
            "unit": "ns/iter",
            "extra": "iterations: 55138228\ncpu: 12.866775968933847 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 12.76560408670188,
            "unit": "ns/iter",
            "extra": "iterations: 53453577\ncpu: 12.765235879350112 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 12.963666225987318,
            "unit": "ns/iter",
            "extra": "iterations: 53782522\ncpu: 12.963071869333367 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 13.605959374363517,
            "unit": "ns/iter",
            "extra": "iterations: 51616962\ncpu: 13.60543704606246 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 14.392558724124898,
            "unit": "ns/iter",
            "extra": "iterations: 47577083\ncpu: 14.392068887451577 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 16.56432573239977,
            "unit": "ns/iter",
            "extra": "iterations: 42387236\ncpu: 16.563718780813986 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 16.996672836390996,
            "unit": "ns/iter",
            "extra": "iterations: 40993175\ncpu: 16.995250672825367 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 17.32465392633569,
            "unit": "ns/iter",
            "extra": "iterations: 40609418\ncpu: 17.323462650954532 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 22.03177000848874,
            "unit": "ns/iter",
            "extra": "iterations: 31774181\ncpu: 22.030860811172477 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 25.024665127418203,
            "unit": "ns/iter",
            "extra": "iterations: 27330246\ncpu: 25.023996051846616 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 25.10614005167363,
            "unit": "ns/iter",
            "extra": "iterations: 28126734\ncpu: 25.105599213900874 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 25.606379575475525,
            "unit": "ns/iter",
            "extra": "iterations: 27742567\ncpu: 25.529931530849158 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 25.26595096972841,
            "unit": "ns/iter",
            "extra": "iterations: 27793608\ncpu: 25.26486759113821 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 25.236478741036763,
            "unit": "ns/iter",
            "extra": "iterations: 28618378\ncpu: 25.235582184287257 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 24.803530527311455,
            "unit": "ns/iter",
            "extra": "iterations: 27558093\ncpu: 24.802269409570698 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 25.05230407438929,
            "unit": "ns/iter",
            "extra": "iterations: 27251529\ncpu: 25.051520118375887 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 25.131253014429657,
            "unit": "ns/iter",
            "extra": "iterations: 27826599\ncpu: 25.130147237900037 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 25.52934928909337,
            "unit": "ns/iter",
            "extra": "iterations: 27659733\ncpu: 25.5282862636454 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 25.679554680869813,
            "unit": "ns/iter",
            "extra": "iterations: 27523273\ncpu: 25.67751695083661 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 27.168585456685705,
            "unit": "ns/iter",
            "extra": "iterations: 25417928\ncpu: 27.167025298049456 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 28.62754440737353,
            "unit": "ns/iter",
            "extra": "iterations: 24582689\ncpu: 28.625780320452197 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 29.95288623255953,
            "unit": "ns/iter",
            "extra": "iterations: 23397768\ncpu: 29.951775912984495 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 30.85565851866729,
            "unit": "ns/iter",
            "extra": "iterations: 22542702\ncpu: 30.854662098624914 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 47.32618320597751,
            "unit": "ns/iter",
            "extra": "iterations: 18722184\ncpu: 47.3224956554212 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 38.21784580855865,
            "unit": "ns/iter",
            "extra": "iterations: 18235733\ncpu: 38.21657785842775 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 38.731998249974374,
            "unit": "ns/iter",
            "extra": "iterations: 18228325\ncpu: 38.73106371539901 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 37.90257198880239,
            "unit": "ns/iter",
            "extra": "iterations: 18508712\ncpu: 37.901157519766386 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 38.22103375968565,
            "unit": "ns/iter",
            "extra": "iterations: 18384911\ncpu: 38.219693367022415 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 38.3502791916016,
            "unit": "ns/iter",
            "extra": "iterations: 18240878\ncpu: 38.34849775323321 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 37.91549065462186,
            "unit": "ns/iter",
            "extra": "iterations: 18327831\ncpu: 37.914596604475705 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 37.682199098483764,
            "unit": "ns/iter",
            "extra": "iterations: 18144508\ncpu: 37.68109154571747 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 37.60917246764394,
            "unit": "ns/iter",
            "extra": "iterations: 18522889\ncpu: 37.6077763571332 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 36.9005788382747,
            "unit": "ns/iter",
            "extra": "iterations: 18167078\ncpu: 36.898744255955535 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 37.00116710099794,
            "unit": "ns/iter",
            "extra": "iterations: 18759302\ncpu: 36.99943062913501 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 38.49750021573646,
            "unit": "ns/iter",
            "extra": "iterations: 18135765\ncpu: 38.496390529982996 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 40.00159180023261,
            "unit": "ns/iter",
            "extra": "iterations: 17264101\ncpu: 39.99914863797491 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 40.877137707033555,
            "unit": "ns/iter",
            "extra": "iterations: 16952744\ncpu: 40.87548534915648 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 42.514111132609536,
            "unit": "ns/iter",
            "extra": "iterations: 16880679\ncpu: 42.51003463782417 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 61.24661665188675,
            "unit": "ns/iter",
            "extra": "iterations: 10884115\ncpu: 61.2428703665852 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 70.9663313246871,
            "unit": "ns/iter",
            "extra": "iterations: 9991691\ncpu: 70.96409816916933 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 257.85658884595904,
            "unit": "ns/iter",
            "extra": "iterations: 2688445\ncpu: 257.8500367312697 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 1035.8551246129273,
            "unit": "ns/iter",
            "extra": "iterations: 712005\ncpu: 1035.8001980323218 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 4196.318873124241,
            "unit": "ns/iter",
            "extra": "iterations: 164774\ncpu: 4196.13259980339 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 22570.13500601406,
            "unit": "ns/iter",
            "extra": "iterations: 30769\ncpu: 22569.43690077685 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 138979.78710194567,
            "unit": "ns/iter",
            "extra": "iterations: 4993\ncpu: 138977.27879030674 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1054808.7954544607,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1054773.26363638 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 6009089.401786127,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 6008875.892857114 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 378.5775315692318,
            "unit": "ns/iter",
            "extra": "iterations: 1825824\ncpu: 378.5565711700572 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1513.3613197433806,
            "unit": "ns/iter",
            "extra": "iterations: 464666\ncpu: 1513.322603762707 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 6277.3719142196205,
            "unit": "ns/iter",
            "extra": "iterations: 111074\ncpu: 6277.240326268977 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 25196.260579469217,
            "unit": "ns/iter",
            "extra": "iterations: 27577\ncpu: 25195.833194328337 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 102685.22555620951,
            "unit": "ns/iter",
            "extra": "iterations: 6832\ncpu: 102681.24502341828 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 423034.1171779663,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 423010.85398772534 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2332123.7516772375,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 2332029.8389261584 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 9758527.492957795,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 9758113.661971765 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 849.4380573077757,
            "unit": "ns/iter",
            "extra": "iterations: 798706\ncpu: 849.415043833405 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3478.7389265346774,
            "unit": "ns/iter",
            "extra": "iterations: 199373\ncpu: 3478.5697060283946 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 11606.35249042073,
            "unit": "ns/iter",
            "extra": "iterations: 60813\ncpu: 11605.857168697485 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 53787.34604615282,
            "unit": "ns/iter",
            "extra": "iterations: 13215\ncpu: 53785.121074536175 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 227870.89892754005,
            "unit": "ns/iter",
            "extra": "iterations: 3077\ncpu: 227859.49821254294 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 885400.0300750629,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 885362.2543859688 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 4253410.779140449,
            "unit": "ns/iter",
            "extra": "iterations: 163\ncpu: 4253119.263803644 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 17798032.487176802,
            "unit": "ns/iter",
            "extra": "iterations: 39\ncpu: 17797286.666666858 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 3903.9959993570114,
            "unit": "ns/iter",
            "extra": "iterations: 174222\ncpu: 3903.770086441395 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 19.588714549563026,
            "unit": "ns/iter",
            "extra": "iterations: 35855618\ncpu: 19.58774438081092 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 74.23478099360686,
            "unit": "ns/iter",
            "extra": "iterations: 9179755\ncpu: 74.23133068366212 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.5978885116277193,
            "unit": "ms/iter",
            "extra": "iterations: 1161\ncpu: 0.5978649715762279 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.3767678879826628,
            "unit": "ms/iter",
            "extra": "iterations: 1839\ncpu: 0.376747651440999 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 375.0897148000149,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 374.64840620000075 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 373.7012971999775,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 373.67983700000025 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 1490.4231602303068,
            "unit": "ns/iter",
            "extra": "iterations: 456144\ncpu: 1490.3944456136903 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 19.106697052668228,
            "unit": "ns/iter",
            "extra": "iterations: 37155703\ncpu: 19.105326765046062 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 72.7552890288805,
            "unit": "ns/iter",
            "extra": "iterations: 9635559\ncpu: 72.75113784265055 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeTorsionEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 167.71334770256576,
            "unit": "ns/iter",
            "extra": "iterations: 4143110\ncpu: 167.7014078795859 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 3.889490408839506,
            "unit": "ms/iter",
            "extra": "iterations: 181\ncpu: 3.8892308508287288 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 23.759045833329157,
            "unit": "ms/iter",
            "extra": "iterations: 30\ncpu: 23.757469566667073 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2897.7129433999835,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2897.535012199998 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2933.770315799984,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2933.598891600002 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56431339+StephenSmith25@users.noreply.github.com",
            "name": "StephenSmith25",
            "username": "StephenSmith25"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7eb152bfbd030916eb3bcfe7c3e566766f7e04af",
          "message": "Merge pull request #611 from StephenSmith25/parallel_investigations\n\nIncorporate TBB in calculateGRCells method",
          "timestamp": "2021-04-27T10:07:47+01:00",
          "tree_id": "6fe183f18efc6495f33f08687d5683673037ee13",
          "url": "https://github.com/disorderedmaterials/dissolve/commit/7eb152bfbd030916eb3bcfe7c3e566766f7e04af"
        },
        "date": 1619515575826,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::SimpleMethod>/iterations:5",
            "value": 16.418885399980354,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 16.4188078 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::CellsMethod>/iterations:5",
            "value": 23.000207399991268,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 22.9964886 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::SimpleMethod>/iterations:5",
            "value": 383.063175999996,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 383.03572619999994 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::CellsMethod>/iterations:5",
            "value": 576.1741340000299,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 576.1406279999999 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::SimpleMethod>/iterations:5",
            "value": 1568.9015272000233,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1568.8275720000001 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::CellsMethod>/iterations:5",
            "value": 2160.6929590000163,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2160.5508544000004 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 8.006617087792964,
            "unit": "ns/iter",
            "extra": "iterations: 86607586\ncpu: 8.00624335609585 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 8.080722486827268,
            "unit": "ns/iter",
            "extra": "iterations: 84349718\ncpu: 8.080435775730743 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 16.82550361463474,
            "unit": "ns/iter",
            "extra": "iterations: 45100705\ncpu: 16.825031515582758 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 16.13373759330852,
            "unit": "ns/iter",
            "extra": "iterations: 43751879\ncpu: 16.132432963621962 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 11.296460455328473,
            "unit": "ns/iter",
            "extra": "iterations: 61395298\ncpu: 11.296136456573592 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 11.507581039727494,
            "unit": "ns/iter",
            "extra": "iterations: 58620785\ncpu: 11.507151192192314 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 11.550334564998114,
            "unit": "ns/iter",
            "extra": "iterations: 60067252\ncpu: 11.549592197092693 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 11.326996694148624,
            "unit": "ns/iter",
            "extra": "iterations: 63334362\ncpu: 11.326830765264502 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 11.640994704472774,
            "unit": "ns/iter",
            "extra": "iterations: 60704060\ncpu: 11.640660410522889 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 12.192825548043556,
            "unit": "ns/iter",
            "extra": "iterations: 61421695\ncpu: 12.158131194523362 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 11.743981685882819,
            "unit": "ns/iter",
            "extra": "iterations: 58151418\ncpu: 11.743405999145205 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 12.003089059106943,
            "unit": "ns/iter",
            "extra": "iterations: 60333258\ncpu: 12.002627008805069 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 11.827483595088568,
            "unit": "ns/iter",
            "extra": "iterations: 57893787\ncpu: 11.826580527544404 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 11.677834161133847,
            "unit": "ns/iter",
            "extra": "iterations: 61722708\ncpu: 11.677634817966869 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 13.296691067942904,
            "unit": "ns/iter",
            "extra": "iterations: 53530806\ncpu: 13.29611013142596 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 15.891605197031538,
            "unit": "ns/iter",
            "extra": "iterations: 44132900\ncpu: 15.89072358716517 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 16.40517648491386,
            "unit": "ns/iter",
            "extra": "iterations: 43690845\ncpu: 16.40413782338151 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 17.073094966153857,
            "unit": "ns/iter",
            "extra": "iterations: 41480011\ncpu: 17.07158337060235 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 16.817189645186172,
            "unit": "ns/iter",
            "extra": "iterations: 41031609\ncpu: 16.81655810767755 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 23.1888682344043,
            "unit": "ns/iter",
            "extra": "iterations: 31445955\ncpu: 23.18827012886077 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 23.56254881032102,
            "unit": "ns/iter",
            "extra": "iterations: 29697871\ncpu: 23.561444387713863 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 26.153190300530248,
            "unit": "ns/iter",
            "extra": "iterations: 27611709\ncpu: 26.152343268574803 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 24.613305070786474,
            "unit": "ns/iter",
            "extra": "iterations: 27667707\ncpu: 24.61276270563347 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 24.35851522129492,
            "unit": "ns/iter",
            "extra": "iterations: 29690943\ncpu: 24.357646572559233 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 24.00251027094542,
            "unit": "ns/iter",
            "extra": "iterations: 29621902\ncpu: 24.00160928221289 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 24.7907803454382,
            "unit": "ns/iter",
            "extra": "iterations: 28477965\ncpu: 24.78920431990142 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 23.94898939353759,
            "unit": "ns/iter",
            "extra": "iterations: 30425790\ncpu: 23.948151354492214 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 24.07749988142492,
            "unit": "ns/iter",
            "extra": "iterations: 30086317\ncpu: 24.07131647253477 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 23.73639025263385,
            "unit": "ns/iter",
            "extra": "iterations: 28773587\ncpu: 23.735427147126305 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 23.73646720600463,
            "unit": "ns/iter",
            "extra": "iterations: 30065059\ncpu: 23.735073495115888 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 28.124426857301355,
            "unit": "ns/iter",
            "extra": "iterations: 24621268\ncpu: 28.122607576506887 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 28.55075285270745,
            "unit": "ns/iter",
            "extra": "iterations: 24911181\ncpu: 28.5492360639185 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 29.214754065505282,
            "unit": "ns/iter",
            "extra": "iterations: 24399729\ncpu: 29.21370159480072 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 31.008595441884314,
            "unit": "ns/iter",
            "extra": "iterations: 21558403\ncpu: 31.006740480730453 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 34.93239433352896,
            "unit": "ns/iter",
            "extra": "iterations: 19576007\ncpu: 34.930075883197105 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 32.991346549264094,
            "unit": "ns/iter",
            "extra": "iterations: 19607207\ncpu: 32.989665330712036 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 34.15754320237888,
            "unit": "ns/iter",
            "extra": "iterations: 20832127\ncpu: 34.15557182423086 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 34.45954441632755,
            "unit": "ns/iter",
            "extra": "iterations: 20127543\ncpu: 34.45854111453142 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 34.70597580141062,
            "unit": "ns/iter",
            "extra": "iterations: 19543956\ncpu: 34.70450869823943 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 37.259154634279945,
            "unit": "ns/iter",
            "extra": "iterations: 19279088\ncpu: 37.256531481157104 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 34.26883012545531,
            "unit": "ns/iter",
            "extra": "iterations: 19245756\ncpu: 34.26787422640087 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 34.41462929042407,
            "unit": "ns/iter",
            "extra": "iterations: 19593869\ncpu: 34.41372140438454 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 33.56028736708669,
            "unit": "ns/iter",
            "extra": "iterations: 20639664\ncpu: 33.55940053093918 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 34.23243569824082,
            "unit": "ns/iter",
            "extra": "iterations: 21703994\ncpu: 34.23131175764226 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 36.84143311566381,
            "unit": "ns/iter",
            "extra": "iterations: 19452889\ncpu: 36.83833419293108 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 37.336422798318004,
            "unit": "ns/iter",
            "extra": "iterations: 18416781\ncpu: 37.33437716395734 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 38.78420160756477,
            "unit": "ns/iter",
            "extra": "iterations: 18170469\ncpu: 38.781825114145754 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 41.34518931947033,
            "unit": "ns/iter",
            "extra": "iterations: 18089343\ncpu: 41.34199539474707 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 43.647446184030905,
            "unit": "ns/iter",
            "extra": "iterations: 12743107\ncpu: 43.643704867266315 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 64.37920486280757,
            "unit": "ns/iter",
            "extra": "iterations: 11153723\ncpu: 64.37599400666465 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 241.93080122935424,
            "unit": "ns/iter",
            "extra": "iterations: 2881135\ncpu: 241.91882435220748 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 921.745778694065,
            "unit": "ns/iter",
            "extra": "iterations: 750834\ncpu: 921.7116832748558 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 3936.066572832422,
            "unit": "ns/iter",
            "extra": "iterations: 179037\ncpu: 3935.9336226590526 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 21578.583416700585,
            "unit": "ns/iter",
            "extra": "iterations: 33986\ncpu: 21577.721120461316 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 92688.36302896412,
            "unit": "ns/iter",
            "extra": "iterations: 7184\ncpu: 92679.5644487755 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1045841.3868953886,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1045776.1575662943 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 5658198.278261689,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 5657691.40000006 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 365.6488509099639,
            "unit": "ns/iter",
            "extra": "iterations: 1887711\ncpu: 365.6308984796886 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1376.2880168988868,
            "unit": "ns/iter",
            "extra": "iterations: 489506\ncpu: 1376.249384072912 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 6152.986153338177,
            "unit": "ns/iter",
            "extra": "iterations: 115118\ncpu: 6152.987873312545 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 24849.009748912373,
            "unit": "ns/iter",
            "extra": "iterations: 28516\ncpu: 24848.61684668293 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 99676.24527204312,
            "unit": "ns/iter",
            "extra": "iterations: 6874\ncpu: 99675.3460867045 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 403928.1476354146,
            "unit": "ns/iter",
            "extra": "iterations: 1734\ncpu: 403925.72491349356 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2139851.9432171066,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2139714.7570978063 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 8337871.243242802,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 8337284.662162205 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 807.5961840282788,
            "unit": "ns/iter",
            "extra": "iterations: 856977\ncpu: 807.3480595161808 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3275.904883805135,
            "unit": "ns/iter",
            "extra": "iterations: 219931\ncpu: 3275.768922980373 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 11422.82937436588,
            "unit": "ns/iter",
            "extra": "iterations: 63232\ncpu: 11422.835890055578 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 50560.45753140215,
            "unit": "ns/iter",
            "extra": "iterations: 13457\ncpu: 50560.14527755026 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 222620.9001196312,
            "unit": "ns/iter",
            "extra": "iterations: 3344\ncpu: 222614.46979664793 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 794900.3356643643,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 794865.0058275056 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 3966587.320225668,
            "unit": "ns/iter",
            "extra": "iterations: 178\ncpu: 3966590.7584270025 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 15660340.75555965,
            "unit": "ns/iter",
            "extra": "iterations: 45\ncpu: 15659429.555555625 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 3839.3833257398614,
            "unit": "ns/iter",
            "extra": "iterations: 188782\ncpu: 3839.1083842739476 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 17.90966387399107,
            "unit": "ns/iter",
            "extra": "iterations: 39051575\ncpu: 17.901328870858528 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 71.2977480542718,
            "unit": "ns/iter",
            "extra": "iterations: 9490282\ncpu: 71.29267918487567 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.5337799805353906,
            "unit": "ms/iter",
            "extra": "iterations: 1233\ncpu: 0.5337476090835328 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.34975813948608697,
            "unit": "ms/iter",
            "extra": "iterations: 1907\ncpu: 0.34974057629784616 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 330.5797576000259,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 330.57413639999993 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 336.18321339999966,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 336.1691122000025 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 1330.2787746879976,
            "unit": "ns/iter",
            "extra": "iterations: 523785\ncpu: 1330.2200101186681 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 17.83720729604298,
            "unit": "ns/iter",
            "extra": "iterations: 39016896\ncpu: 17.837030475207335 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 68.37236493507726,
            "unit": "ns/iter",
            "extra": "iterations: 10432760\ncpu: 68.36896142535717 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeTorsionEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 164.3057362371391,
            "unit": "ns/iter",
            "extra": "iterations: 4219055\ncpu: 164.29480772352824 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 3.5758982941166946,
            "unit": "ms/iter",
            "extra": "iterations: 187\ncpu: 3.575677411764685 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 21.892688636364365,
            "unit": "ms/iter",
            "extra": "iterations: 33\ncpu: 21.891273787878507 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2612.054492800007,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2611.9469813999985 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2602.4748514000294,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2602.3597769999983 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tristan.youngs@stfc.ac.uk",
            "name": "Tristan Youngs",
            "username": "trisyoungs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "74f2f974bb9a308d241b1307444076c60860a786",
          "message": "Merge pull request #580 from disorderedmaterials/move-to-ubuntu-20.04\n\nMove to ubuntu-latest",
          "timestamp": "2021-04-28T13:34:18+01:00",
          "tree_id": "ca7b798bfa1f6573f4cbadee5d1b7bc1129b21ae",
          "url": "https://github.com/disorderedmaterials/dissolve/commit/74f2f974bb9a308d241b1307444076c60860a786"
        },
        "date": 1619614653178,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::SimpleMethod>/iterations:5",
            "value": 16.95976419996441,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 16.9574632 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::CellsMethod>/iterations:5",
            "value": 28.009691999977804,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 27.989492400000007 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::SimpleMethod>/iterations:5",
            "value": 405.18054880003547,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 405.1273648 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::CellsMethod>/iterations:5",
            "value": 665.8775576000153,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 665.8251502 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::SimpleMethod>/iterations:5",
            "value": 1604.853308599968,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1604.7137128 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::CellsMethod>/iterations:5",
            "value": 2510.422053399998,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2510.1768153999997 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 8.996026731247078,
            "unit": "ns/iter",
            "extra": "iterations: 81371289\ncpu: 8.995275864439106 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 8.656749948898963,
            "unit": "ns/iter",
            "extra": "iterations: 77097317\ncpu: 8.656550434822522 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 20.12674068652858,
            "unit": "ns/iter",
            "extra": "iterations: 39530021\ncpu: 20.125036083335235 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 17.885670237580864,
            "unit": "ns/iter",
            "extra": "iterations: 37526484\ncpu: 17.884441638603658 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 13.52130432637462,
            "unit": "ns/iter",
            "extra": "iterations: 51728648\ncpu: 13.521053362925587 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 13.735296037445597,
            "unit": "ns/iter",
            "extra": "iterations: 51690488\ncpu: 13.734611288637787 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 13.436353119343504,
            "unit": "ns/iter",
            "extra": "iterations: 52444864\ncpu: 13.436403095639696 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 13.436094878534394,
            "unit": "ns/iter",
            "extra": "iterations: 51791608\ncpu: 13.43485917641325 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 13.428387663325875,
            "unit": "ns/iter",
            "extra": "iterations: 53086363\ncpu: 13.427901870015054 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 13.493429679247381,
            "unit": "ns/iter",
            "extra": "iterations: 48954992\ncpu: 13.491411764503985 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 13.60250573477663,
            "unit": "ns/iter",
            "extra": "iterations: 51660695\ncpu: 13.602161198179742 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 13.688087104160934,
            "unit": "ns/iter",
            "extra": "iterations: 44741741\ncpu: 13.68715374754859 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 14.969661062035298,
            "unit": "ns/iter",
            "extra": "iterations: 48987608\ncpu: 14.967589334021024 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 16.660781737826834,
            "unit": "ns/iter",
            "extra": "iterations: 41707896\ncpu: 16.66081307481922 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 17.45033426904383,
            "unit": "ns/iter",
            "extra": "iterations: 39216165\ncpu: 17.448319742636713 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 18.11997922689672,
            "unit": "ns/iter",
            "extra": "iterations: 36924667\ncpu: 18.118530168464357 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 17.903631208560014,
            "unit": "ns/iter",
            "extra": "iterations: 38209455\ncpu: 17.9016112896664 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 20.712351983393948,
            "unit": "ns/iter",
            "extra": "iterations: 31867117\ncpu: 20.711934625275262 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 34.73894245264882,
            "unit": "ns/iter",
            "extra": "iterations: 19621892\ncpu: 34.734892639303034 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 25.818144771576392,
            "unit": "ns/iter",
            "extra": "iterations: 27208973\ncpu: 25.81694413824449 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 26.067692978912238,
            "unit": "ns/iter",
            "extra": "iterations: 26702400\ncpu: 26.064615427826713 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 26.617871068821806,
            "unit": "ns/iter",
            "extra": "iterations: 26037178\ncpu: 26.61632097764202 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 25.914394213477845,
            "unit": "ns/iter",
            "extra": "iterations: 27137266\ncpu: 25.91142519662828 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 26.547467150697887,
            "unit": "ns/iter",
            "extra": "iterations: 26431458\ncpu: 26.546823637197658 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 26.477367654652316,
            "unit": "ns/iter",
            "extra": "iterations: 27120013\ncpu: 26.4737499941464 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 26.964410111460822,
            "unit": "ns/iter",
            "extra": "iterations: 26460465\ncpu: 26.963903431024377 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 25.790320678186735,
            "unit": "ns/iter",
            "extra": "iterations: 27477235\ncpu: 25.787296320026435 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 27.229267176826223,
            "unit": "ns/iter",
            "extra": "iterations: 25739729\ncpu: 27.228618296641702 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 31.30857936484469,
            "unit": "ns/iter",
            "extra": "iterations: 23719658\ncpu: 31.30562864776556 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 32.14266506315601,
            "unit": "ns/iter",
            "extra": "iterations: 21708251\ncpu: 32.139616268487124 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 32.248654238418204,
            "unit": "ns/iter",
            "extra": "iterations: 21805311\ncpu: 32.24724559076464 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 35.110175704375756,
            "unit": "ns/iter",
            "extra": "iterations: 20692484\ncpu: 35.10731055778543 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 39.50415220530442,
            "unit": "ns/iter",
            "extra": "iterations: 16028350\ncpu: 39.503384315915405 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 58.97916781492886,
            "unit": "ns/iter",
            "extra": "iterations: 11902016\ncpu: 58.97406044488638 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 38.68332412366423,
            "unit": "ns/iter",
            "extra": "iterations: 18475149\ncpu: 38.68347069893737 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 38.25030180552017,
            "unit": "ns/iter",
            "extra": "iterations: 18439855\ncpu: 38.2463104509232 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 37.302636906276504,
            "unit": "ns/iter",
            "extra": "iterations: 18953878\ncpu: 37.30141900248586 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 37.864463196776,
            "unit": "ns/iter",
            "extra": "iterations: 18470474\ncpu: 37.862986678090174 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 37.87110743663981,
            "unit": "ns/iter",
            "extra": "iterations: 18515723\ncpu: 37.86769406736117 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 37.42828761326423,
            "unit": "ns/iter",
            "extra": "iterations: 18483348\ncpu: 37.427151076742625 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 37.37122550242316,
            "unit": "ns/iter",
            "extra": "iterations: 18273591\ncpu: 37.36742597555169 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 37.897099403205516,
            "unit": "ns/iter",
            "extra": "iterations: 17736350\ncpu: 37.897223385871115 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 39.805711977939566,
            "unit": "ns/iter",
            "extra": "iterations: 18107668\ncpu: 39.801746530806284 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 42.55944056576595,
            "unit": "ns/iter",
            "extra": "iterations: 16598412\ncpu: 42.556789589269215 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 44.29631425989543,
            "unit": "ns/iter",
            "extra": "iterations: 13065517\ncpu: 44.27938473464193 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 43.27122337684864,
            "unit": "ns/iter",
            "extra": "iterations: 16170365\ncpu: 43.27137185833428 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 46.57705780416539,
            "unit": "ns/iter",
            "extra": "iterations: 15133425\ncpu: 46.574223680363076 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 55.867612627341835,
            "unit": "ns/iter",
            "extra": "iterations: 12768748\ncpu: 55.86395588666999 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 76.30281498155439,
            "unit": "ns/iter",
            "extra": "iterations: 9041871\ncpu: 76.29898889289711 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 78.5000160948006,
            "unit": "ns/iter",
            "extra": "iterations: 9133384\ncpu: 78.49403933963542 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 287.2729369333109,
            "unit": "ns/iter",
            "extra": "iterations: 2509250\ncpu: 287.2432631264346 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 1120.1048399843612,
            "unit": "ns/iter",
            "extra": "iterations: 620002\ncpu: 1120.1071141706127 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 4695.739166311764,
            "unit": "ns/iter",
            "extra": "iterations: 147849\ncpu: 4695.216545258998 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 29224.56084785151,
            "unit": "ns/iter",
            "extra": "iterations: 24438\ncpu: 29223.813282592662 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 263607.25579625164,
            "unit": "ns/iter",
            "extra": "iterations: 2631\ncpu: 263584.31204865035 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1426511.7473905112,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1426415.972860118 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 9151051.544302944,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 9150616.392405037 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 446.1379243480619,
            "unit": "ns/iter",
            "extra": "iterations: 1572913\ncpu: 446.08783511866767 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1759.5494350704075,
            "unit": "ns/iter",
            "extra": "iterations: 406068\ncpu: 1759.4806879635726 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 7414.35934233462,
            "unit": "ns/iter",
            "extra": "iterations: 88008\ncpu: 7412.183631033571 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 30034.296321037407,
            "unit": "ns/iter",
            "extra": "iterations: 23947\ncpu: 30033.636697707905 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 117244.8239848509,
            "unit": "ns/iter",
            "extra": "iterations: 5812\ncpu: 117241.63024776359 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 576558.6215539841,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 576484.5288220521 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2455319.121427887,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 2455260.5571428845 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 10186525.475412473,
            "unit": "ns/iter",
            "extra": "iterations: 61\ncpu: 10186238.459016249 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 968.4199514582261,
            "unit": "ns/iter",
            "extra": "iterations: 720619\ncpu: 968.4006819137413 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3849.611164500001,
            "unit": "ns/iter",
            "extra": "iterations: 176900\ncpu: 3849.5314245336267 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 13007.839787024428,
            "unit": "ns/iter",
            "extra": "iterations: 53716\ncpu: 13007.033379253791 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 62510.381637546445,
            "unit": "ns/iter",
            "extra": "iterations: 11676\ncpu: 62500.49734498147 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 251021.35401326325,
            "unit": "ns/iter",
            "extra": "iterations: 2853\ncpu: 251003.79390115815 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 1041450.8002851235,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1041354.0670470686 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 4530183.327043124,
            "unit": "ns/iter",
            "extra": "iterations: 159\ncpu: 4529898.427672993 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 18603593.789473385,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 18603633.473684203 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 4264.887943533394,
            "unit": "ns/iter",
            "extra": "iterations: 167603\ncpu: 4264.432778649549 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 18.118198601465917,
            "unit": "ns/iter",
            "extra": "iterations: 38894758\ncpu: 18.11777183444634 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 73.95180907090422,
            "unit": "ns/iter",
            "extra": "iterations: 9445014\ncpu: 73.94665471115239 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.7416496311827692,
            "unit": "ms/iter",
            "extra": "iterations: 930\ncpu: 0.7416184440860275 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.41224403296060136,
            "unit": "ms/iter",
            "extra": "iterations: 1699\ncpu: 0.41221542966450975 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 407.9086834000009,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 407.8817063999992 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 398.8900570000169,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 398.857516999999 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 1629.9094524797974,
            "unit": "ns/iter",
            "extra": "iterations: 431199\ncpu: 1629.8090695943238 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 17.68337397913691,
            "unit": "ns/iter",
            "extra": "iterations: 39628117\ncpu: 17.681915595434344 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 76.09659127987084,
            "unit": "ns/iter",
            "extra": "iterations: 9316928\ncpu: 76.08937795805673 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeTorsionEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 176.78450311994916,
            "unit": "ns/iter",
            "extra": "iterations: 4043330\ncpu: 176.77684334447383 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 4.6110639333331465,
            "unit": "ms/iter",
            "extra": "iterations: 150\ncpu: 4.610549960000109 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 27.836521230763257,
            "unit": "ms/iter",
            "extra": "iterations: 26\ncpu: 27.833239576923372 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 3112.6144267999734,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 3112.3993840000026 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 3122.10038420003,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 3121.8693782 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56431339+StephenSmith25@users.noreply.github.com",
            "name": "StephenSmith25",
            "username": "StephenSmith25"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "865ab5ccbfb0b38202f5427b4993b2ccfebc0052",
          "message": "Merge pull request #659 from StephenSmith25/parallel_energy_routines\n\nParallel energy routines",
          "timestamp": "2021-04-29T11:53:12+01:00",
          "tree_id": "e7aeaa8312ccc0753a34f78e3d7257d2c6d69924",
          "url": "https://github.com/disorderedmaterials/dissolve/commit/865ab5ccbfb0b38202f5427b4993b2ccfebc0052"
        },
        "date": 1619694833690,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::SimpleMethod>/iterations:5",
            "value": 17.882386800010863,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 17.880483200000004 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::CellsMethod>/iterations:5",
            "value": 28.124831399964023,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 28.124727400000005 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::SimpleMethod>/iterations:5",
            "value": 427.99094500001047,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 427.9547586 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::CellsMethod>/iterations:5",
            "value": 665.5028443999981,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 665.4643664 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::SimpleMethod>/iterations:5",
            "value": 1704.3044107999776,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1704.2209454000003 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::CellsMethod>/iterations:5",
            "value": 2509.105229800025,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2508.9056418 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 9.063298972798135,
            "unit": "ns/iter",
            "extra": "iterations: 77336879\ncpu: 9.063065966238403 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 9.078115299803743,
            "unit": "ns/iter",
            "extra": "iterations: 77277755\ncpu: 9.077891535539568 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 18.94944146079144,
            "unit": "ns/iter",
            "extra": "iterations: 38988310\ncpu: 18.948569148034487 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 18.15647543662605,
            "unit": "ns/iter",
            "extra": "iterations: 37460084\ncpu: 18.155275546098682 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 12.881664067530718,
            "unit": "ns/iter",
            "extra": "iterations: 53485690\ncpu: 12.880866358833472 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 12.921002323406496,
            "unit": "ns/iter",
            "extra": "iterations: 53991436\ncpu: 12.92050094759476 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 12.82955511548648,
            "unit": "ns/iter",
            "extra": "iterations: 55498785\ncpu: 12.829119051885488 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 13.09513437676114,
            "unit": "ns/iter",
            "extra": "iterations: 53451467\ncpu: 13.094561913520554 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 13.16993169798223,
            "unit": "ns/iter",
            "extra": "iterations: 53706172\ncpu: 13.169609779673026 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 13.220007098202426,
            "unit": "ns/iter",
            "extra": "iterations: 52999340\ncpu: 13.218914518558138 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 13.454386193968013,
            "unit": "ns/iter",
            "extra": "iterations: 52343604\ncpu: 13.453925507307353 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 13.373484309953295,
            "unit": "ns/iter",
            "extra": "iterations: 52081971\ncpu: 13.372856050321055 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 13.487669444993827,
            "unit": "ns/iter",
            "extra": "iterations: 52346265\ncpu: 13.487450919373181 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 13.891202403756397,
            "unit": "ns/iter",
            "extra": "iterations: 50723253\ncpu: 13.891038396137528 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 14.753223552756566,
            "unit": "ns/iter",
            "extra": "iterations: 47858376\ncpu: 14.752326343041744 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 17.160233177717092,
            "unit": "ns/iter",
            "extra": "iterations: 40900306\ncpu: 17.158550280773024 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 17.708158753571087,
            "unit": "ns/iter",
            "extra": "iterations: 39778380\ncpu: 17.706783458753254 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 19.1265892520674,
            "unit": "ns/iter",
            "extra": "iterations: 35992953\ncpu: 19.125375014381177 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 25.028277815881278,
            "unit": "ns/iter",
            "extra": "iterations: 27424077\ncpu: 25.02711551604824 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 26.30857198444657,
            "unit": "ns/iter",
            "extra": "iterations: 26881815\ncpu: 26.307843759805568 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 25.803021293457803,
            "unit": "ns/iter",
            "extra": "iterations: 26705582\ncpu: 25.801242302077547 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 26.132458471707896,
            "unit": "ns/iter",
            "extra": "iterations: 27016158\ncpu: 26.132204438543656 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 26.33786226074283,
            "unit": "ns/iter",
            "extra": "iterations: 26848962\ncpu: 26.337217990028833 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 26.397142525039158,
            "unit": "ns/iter",
            "extra": "iterations: 26944488\ncpu: 26.396620080515103 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 26.122343133500163,
            "unit": "ns/iter",
            "extra": "iterations: 26751203\ncpu: 26.12079314713429 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 26.411657844967397,
            "unit": "ns/iter",
            "extra": "iterations: 26439535\ncpu: 26.410456273152846 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 25.891037746979638,
            "unit": "ns/iter",
            "extra": "iterations: 27372626\ncpu: 25.89067165130585 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 25.958551275637642,
            "unit": "ns/iter",
            "extra": "iterations: 27274229\ncpu: 25.957825352276576 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 26.56624507950974,
            "unit": "ns/iter",
            "extra": "iterations: 26356116\ncpu: 26.565330453091203 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 26.696565493828484,
            "unit": "ns/iter",
            "extra": "iterations: 26056730\ncpu: 26.696262731355617 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 29.727067808601532,
            "unit": "ns/iter",
            "extra": "iterations: 23500676\ncpu: 29.725137736463182 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 30.98542624668645,
            "unit": "ns/iter",
            "extra": "iterations: 22481031\ncpu: 30.983819736737306 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 33.22390047437297,
            "unit": "ns/iter",
            "extra": "iterations: 18675713\ncpu: 33.221084892448516 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 54.88161030126385,
            "unit": "ns/iter",
            "extra": "iterations: 12034096\ncpu: 54.87814689196423 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 38.7295017322862,
            "unit": "ns/iter",
            "extra": "iterations: 17889841\ncpu: 38.72631059158102 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 39.350575881970116,
            "unit": "ns/iter",
            "extra": "iterations: 17929542\ncpu: 39.34745232198332 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 38.672387113096335,
            "unit": "ns/iter",
            "extra": "iterations: 17971616\ncpu: 38.62693544086342 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 38.62905419514489,
            "unit": "ns/iter",
            "extra": "iterations: 18226614\ncpu: 38.626867612382256 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 39.17222020588038,
            "unit": "ns/iter",
            "extra": "iterations: 17892674\ncpu: 39.17139154270631 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 39.21802754125045,
            "unit": "ns/iter",
            "extra": "iterations: 17887786\ncpu: 39.217091427636596 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 38.16976458048381,
            "unit": "ns/iter",
            "extra": "iterations: 17990225\ncpu: 38.16875909000647 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 38.31744901908037,
            "unit": "ns/iter",
            "extra": "iterations: 18124526\ncpu: 38.31561829534216 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 39.12957895994876,
            "unit": "ns/iter",
            "extra": "iterations: 17896231\ncpu: 39.126906106654346 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 39.31225749747311,
            "unit": "ns/iter",
            "extra": "iterations: 17831258\ncpu: 39.309646801140154 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 39.47077816010727,
            "unit": "ns/iter",
            "extra": "iterations: 17744793\ncpu: 39.46828559792136 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 41.438753568757924,
            "unit": "ns/iter",
            "extra": "iterations: 16854231\ncpu: 41.43653157477182 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 42.71671670396052,
            "unit": "ns/iter",
            "extra": "iterations: 16324157\ncpu: 42.71453956244133 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 48.299012262805405,
            "unit": "ns/iter",
            "extra": "iterations: 14908014\ncpu: 48.29486053608424 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 57.6518135676862,
            "unit": "ns/iter",
            "extra": "iterations: 9924416\ncpu: 57.64942592088101 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 111.20770865701769,
            "unit": "ns/iter",
            "extra": "iterations: 6226558\ncpu: 111.1989396067629 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 417.27895906334777,
            "unit": "ns/iter",
            "extra": "iterations: 1688556\ncpu: 417.26480199649495 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 1636.6153501002843,
            "unit": "ns/iter",
            "extra": "iterations: 423450\ncpu: 1636.5551989609337 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 6574.409211008653,
            "unit": "ns/iter",
            "extra": "iterations: 106351\ncpu: 6574.24963564049 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 26228.377048562455,
            "unit": "ns/iter",
            "extra": "iterations: 26604\ncpu: 26227.754397835 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 130794.54287327426,
            "unit": "ns/iter",
            "extra": "iterations: 5318\ncpu: 130790.65306505979 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1033994.0479042808,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1033951.5553892145 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 7575443.630435569,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 7574964.184782612 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 443.0942114967139,
            "unit": "ns/iter",
            "extra": "iterations: 1573481\ncpu: 443.0558144648646 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1737.554508019706,
            "unit": "ns/iter",
            "extra": "iterations: 399244\ncpu: 1737.5027727404897 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 7267.181232316678,
            "unit": "ns/iter",
            "extra": "iterations: 95430\ncpu: 7267.128334905202 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 29251.39681485568,
            "unit": "ns/iter",
            "extra": "iterations: 24112\ncpu: 29250.222710683836 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 117931.80155513916,
            "unit": "ns/iter",
            "extra": "iterations: 5916\ncpu: 117929.78093306096 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 468612.8544509184,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 468576.71020142996 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2346610.0709460867,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 2346394.9763513147 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 12216790.236363357,
            "unit": "ns/iter",
            "extra": "iterations: 55\ncpu: 12215803.381818349 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 878.1436719743463,
            "unit": "ns/iter",
            "extra": "iterations: 808230\ncpu: 878.0925293542562 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3616.1812462556527,
            "unit": "ns/iter",
            "extra": "iterations: 193604\ncpu: 3616.05945641623 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 12173.069637153487,
            "unit": "ns/iter",
            "extra": "iterations: 57297\ncpu: 12171.990732499182 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 56632.52206001529,
            "unit": "ns/iter",
            "extra": "iterations: 12330\ncpu: 56629.98824006464 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 234368.3152246717,
            "unit": "ns/iter",
            "extra": "iterations: 2982\ncpu: 234358.06807511637 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 896476.759330706,
            "unit": "ns/iter",
            "extra": "iterations: 777\ncpu: 896455.5019304958 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 4395721.587499679,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 4395398.837499975 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 21266491.151512433,
            "unit": "ns/iter",
            "extra": "iterations: 33\ncpu: 21265422.878787953 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 1884.2062602295987,
            "unit": "ns/iter",
            "extra": "iterations: 398356\ncpu: 1884.1092213999711 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 147.32416507375643,
            "unit": "ns/iter",
            "extra": "iterations: 4743503\ncpu: 147.3204621141788 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 20.03506193562812,
            "unit": "ns/iter",
            "extra": "iterations: 34745914\ncpu: 20.03455528612663 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 73.76435294324399,
            "unit": "ns/iter",
            "extra": "iterations: 9571556\ncpu: 73.76251823632472 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.3624544374347954,
            "unit": "ms/iter",
            "extra": "iterations: 1918\ncpu: 0.36243044369134264 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.3838930626029179,
            "unit": "ms/iter",
            "extra": "iterations: 1821\ncpu: 0.38386685941790294 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 261.2715277999996,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 261.2561291999981 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 259.4496161999814,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 259.42815520000124 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 819.9949230098497,
            "unit": "ns/iter",
            "extra": "iterations: 849913\ncpu: 819.9671131045067 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 52666.81179479107,
            "unit": "ns/iter",
            "extra": "iterations: 13294\ncpu: 52665.44975176717 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 19.886515071070825,
            "unit": "ns/iter",
            "extra": "iterations: 34844900\ncpu: 19.88538919612328 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 73.93707630114305,
            "unit": "ns/iter",
            "extra": "iterations: 9617680\ncpu: 73.9314763019773 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeTorsionEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 170.73850199429265,
            "unit": "ns/iter",
            "extra": "iterations: 4248128\ncpu: 170.73376673207795 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 2.9833247253225816,
            "unit": "ms/iter",
            "extra": "iterations: 233\ncpu: 2.9830677510730226 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 25.212550071427945,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 25.210531142857715 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2491.448255999967,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2491.3032402 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2499.6239287999742,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2499.492961799996 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56431339+StephenSmith25@users.noreply.github.com",
            "name": "StephenSmith25",
            "username": "StephenSmith25"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c9e01af57ca5439228b1ab819e6cfa07d571e57",
          "message": "Merge pull request #664 from StephenSmith25/parallel_force_calculations\n\nParallel force calculations",
          "timestamp": "2021-05-06T13:11:19+01:00",
          "tree_id": "39828bb140589e202bbddca157a187380e9ed9fe",
          "url": "https://github.com/disorderedmaterials/dissolve/commit/1c9e01af57ca5439228b1ab819e6cfa07d571e57"
        },
        "date": 1620304370167,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::SimpleMethod>/iterations:5",
            "value": 17.89506939999228,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 17.8949324 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::CellsMethod>/iterations:5",
            "value": 28.252592399985588,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 28.252471000000003 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::SimpleMethod>/iterations:5",
            "value": 431.5731180000057,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 431.54445159999995 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::CellsMethod>/iterations:5",
            "value": 674.197767600026,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 674.1561326 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::SimpleMethod>/iterations:5",
            "value": 1704.828616199984,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1704.7443163999997 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::CellsMethod>/iterations:5",
            "value": 2538.3500941999955,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2538.2260342 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 9.192433292735164,
            "unit": "ns/iter",
            "extra": "iterations: 77261189\ncpu: 9.191985034038257 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 9.019445184126738,
            "unit": "ns/iter",
            "extra": "iterations: 77668434\ncpu: 9.018982859883636 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 18.025233963968862,
            "unit": "ns/iter",
            "extra": "iterations: 38805120\ncpu: 18.023950834322957 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 19.189757588992688,
            "unit": "ns/iter",
            "extra": "iterations: 37333495\ncpu: 19.188750263000973 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 13.176296996875669,
            "unit": "ns/iter",
            "extra": "iterations: 53249126\ncpu: 13.175556627915297 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 13.175679295590536,
            "unit": "ns/iter",
            "extra": "iterations: 53114580\ncpu: 13.17502981290636 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 13.180240646359243,
            "unit": "ns/iter",
            "extra": "iterations: 53124926\ncpu: 13.18025566755614 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 13.180070778580873,
            "unit": "ns/iter",
            "extra": "iterations: 53089791\ncpu: 13.17956228156934 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 13.495620154158736,
            "unit": "ns/iter",
            "extra": "iterations: 51817463\ncpu: 13.495126285900964 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 13.294881646985868,
            "unit": "ns/iter",
            "extra": "iterations: 52658228\ncpu: 13.294082132805517 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 13.585716858004107,
            "unit": "ns/iter",
            "extra": "iterations: 51543869\ncpu: 13.584816595742932 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 13.819677598903278,
            "unit": "ns/iter",
            "extra": "iterations: 50657644\ncpu: 13.819132745296967 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 13.76469622295832,
            "unit": "ns/iter",
            "extra": "iterations: 50880063\ncpu: 13.763712556723846 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 14.104294564495582,
            "unit": "ns/iter",
            "extra": "iterations: 49597532\ncpu: 14.104008380900906 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 15.150378974385143,
            "unit": "ns/iter",
            "extra": "iterations: 46147974\ncpu: 15.149759488899814 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 17.55993733681772,
            "unit": "ns/iter",
            "extra": "iterations: 39794978\ncpu: 17.558716403863702 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 17.75264741325279,
            "unit": "ns/iter",
            "extra": "iterations: 39104964\ncpu: 17.75108663953769 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 20.01720602186261,
            "unit": "ns/iter",
            "extra": "iterations: 36704940\ncpu: 20.015743521171864 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 29.48945682983751,
            "unit": "ns/iter",
            "extra": "iterations: 24269503\ncpu: 29.488134347044518 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 26.321411505205393,
            "unit": "ns/iter",
            "extra": "iterations: 26581326\ncpu: 26.321125778300207 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 26.352002911330416,
            "unit": "ns/iter",
            "extra": "iterations: 26569249\ncpu: 26.351336652383242 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 26.3305921555049,
            "unit": "ns/iter",
            "extra": "iterations: 26583220\ncpu: 26.330336392656694 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 26.85602411225972,
            "unit": "ns/iter",
            "extra": "iterations: 26062753\ncpu: 26.854616049194878 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 26.32535587840748,
            "unit": "ns/iter",
            "extra": "iterations: 26587803\ncpu: 26.324912065882287 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 26.357702521794607,
            "unit": "ns/iter",
            "extra": "iterations: 26545871\ncpu: 26.35717633827124 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 26.449833264781702,
            "unit": "ns/iter",
            "extra": "iterations: 26469512\ncpu: 26.449432728491296 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 26.570626922422893,
            "unit": "ns/iter",
            "extra": "iterations: 26340883\ncpu: 26.569093260844888 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 26.566353214287798,
            "unit": "ns/iter",
            "extra": "iterations: 26311280\ncpu: 26.566011877795276 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 26.595829509141474,
            "unit": "ns/iter",
            "extra": "iterations: 26299686\ncpu: 26.594784325561793 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 27.802541602802805,
            "unit": "ns/iter",
            "extra": "iterations: 25156960\ncpu: 27.802208017184835 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 30.409915873355715,
            "unit": "ns/iter",
            "extra": "iterations: 22838069\ncpu: 30.40879585747802 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 32.65182477581696,
            "unit": "ns/iter",
            "extra": "iterations: 21704310\ncpu: 32.65043284029741 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 39.84933046586649,
            "unit": "ns/iter",
            "extra": "iterations: 18785450\ncpu: 39.8453054890885 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 57.49395794146014,
            "unit": "ns/iter",
            "extra": "iterations: 12680612\ncpu: 57.48752946624382 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 39.24022800252498,
            "unit": "ns/iter",
            "extra": "iterations: 17832434\ncpu: 39.23742440319673 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 39.22342280428161,
            "unit": "ns/iter",
            "extra": "iterations: 17935282\ncpu: 39.22200375773261 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 39.22348449457739,
            "unit": "ns/iter",
            "extra": "iterations: 17841985\ncpu: 39.22313711170524 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 39.458123723773504,
            "unit": "ns/iter",
            "extra": "iterations: 17741716\ncpu: 39.45637073663025 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 39.2586199809378,
            "unit": "ns/iter",
            "extra": "iterations: 17832087\ncpu: 39.25718986229672 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 39.23667751442875,
            "unit": "ns/iter",
            "extra": "iterations: 17843930\ncpu: 39.233774454394094 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 39.316452407080504,
            "unit": "ns/iter",
            "extra": "iterations: 17807060\ncpu: 39.31366688268553 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 39.35580601756693,
            "unit": "ns/iter",
            "extra": "iterations: 17789879\ncpu: 39.35381038847981 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 39.33660961158186,
            "unit": "ns/iter",
            "extra": "iterations: 17790817\ncpu: 39.335687900111324 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 39.409199756871814,
            "unit": "ns/iter",
            "extra": "iterations: 17745382\ncpu: 39.40865916552319 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 40.08322105559776,
            "unit": "ns/iter",
            "extra": "iterations: 17452999\ncpu: 40.079703322047735 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 41.08049786756034,
            "unit": "ns/iter",
            "extra": "iterations: 17087757\ncpu: 41.07801246237328 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 42.82616404680732,
            "unit": "ns/iter",
            "extra": "iterations: 16413279\ncpu: 42.822487572409386 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 45.630482106942374,
            "unit": "ns/iter",
            "extra": "iterations: 13715712\ncpu: 45.627979356813164 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 63.367750673462446,
            "unit": "ns/iter",
            "extra": "iterations: 9205631\ncpu: 63.362889627011896 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 112.36357068946221,
            "unit": "ns/iter",
            "extra": "iterations: 6208336\ncpu: 112.36184349558424 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 420.60830024698396,
            "unit": "ns/iter",
            "extra": "iterations: 1664336\ncpu: 420.5815027734851 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 1654.7459625360489,
            "unit": "ns/iter",
            "extra": "iterations: 422914\ncpu: 1654.717928467723 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 6591.535695444911,
            "unit": "ns/iter",
            "extra": "iterations: 106148\ncpu: 6591.334127821467 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 26340.25636876534,
            "unit": "ns/iter",
            "extra": "iterations: 26575\ncpu: 26339.85008466635 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 138813.42687279335,
            "unit": "ns/iter",
            "extra": "iterations: 5046\ncpu: 138803.29885057485 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1073519.5490798366,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1073426.452453979 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 6776141.733333437,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 6775806.488888886 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 447.6147272451286,
            "unit": "ns/iter",
            "extra": "iterations: 1564977\ncpu: 447.60283825257596 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1759.743673858751,
            "unit": "ns/iter",
            "extra": "iterations: 398110\ncpu: 1759.6276054356636 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 7327.779809212717,
            "unit": "ns/iter",
            "extra": "iterations: 95499\ncpu: 7327.728520717546 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 29291.38363674558,
            "unit": "ns/iter",
            "extra": "iterations: 23895\ncpu: 29290.312157355504 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 118467.42443727679,
            "unit": "ns/iter",
            "extra": "iterations: 5909\ncpu: 118462.33068200991 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 479136.80821908475,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 479115.8534246554 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2445365.9929820374,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 2445205.2491228003 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 10854821.578124784,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 10854042.124999853 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 892.1892229168144,
            "unit": "ns/iter",
            "extra": "iterations: 782902\ncpu: 892.1312578074891 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3644.1234427202185,
            "unit": "ns/iter",
            "extra": "iterations: 192162\ncpu: 3643.913187831116 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 12281.549919314675,
            "unit": "ns/iter",
            "extra": "iterations: 57012\ncpu: 12280.935873149498 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 56951.29331382331,
            "unit": "ns/iter",
            "extra": "iterations: 12294\ncpu: 56947.81991215226 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 235580.1340518318,
            "unit": "ns/iter",
            "extra": "iterations: 2969\ncpu: 235568.51566183692 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 910975.3263979178,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 910932.0182054618 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 4549540.435065168,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 4549132.616883104 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 21015329.11111311,
            "unit": "ns/iter",
            "extra": "iterations: 36\ncpu: 21012550.749999784 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 1795.4197015615305,
            "unit": "ns/iter",
            "extra": "iterations: 389360\ncpu: 1795.3394596260591 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 147.23574770737488,
            "unit": "ns/iter",
            "extra": "iterations: 4757603\ncpu: 147.23383350817528 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 19.866562623654787,
            "unit": "ns/iter",
            "extra": "iterations: 35116885\ncpu: 19.865869993878828 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 74.29092832146385,
            "unit": "ns/iter",
            "extra": "iterations: 9262718\ncpu: 74.28991317667202 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.36266523826719127,
            "unit": "ms/iter",
            "extra": "iterations: 1939\ncpu: 0.3626466260959296 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.38957153567452535,
            "unit": "ms/iter",
            "extra": "iterations: 1794\ncpu: 0.38954423188405785 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 260.38735860001907,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 260.37194460000137 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 258.9921583999967,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 258.9772016000012 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 827.8443549761116,
            "unit": "ns/iter",
            "extra": "iterations: 845488\ncpu: 827.7720854701579 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 53653.624256735915,
            "unit": "ns/iter",
            "extra": "iterations: 13118\ncpu: 53650.04162219892 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 19.86817164960133,
            "unit": "ns/iter",
            "extra": "iterations: 35161329\ncpu: 19.86628685167143 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 74.63503357654568,
            "unit": "ns/iter",
            "extra": "iterations: 9374698\ncpu: 74.62986060991005 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeTorsionEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 172.3135355856996,
            "unit": "ns/iter",
            "extra": "iterations: 4064065\ncpu: 172.30251115570567 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 3.144063394849519,
            "unit": "ms/iter",
            "extra": "iterations: 233\ncpu: 3.0696244248927895 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 25.53135007407811,
            "unit": "ms/iter",
            "extra": "iterations: 27\ncpu: 25.52879014814801 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2527.81857519999,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2526.4382701999975 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2543.3653241999764,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2543.1972975999997 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::smallMolecule, Population::small>",
            "value": 2.817618117409151,
            "unit": "ms/iter",
            "extra": "iterations: 247\ncpu: 2.817492615384673 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::smallMolecule, Population::small>",
            "value": 41.05227912477846,
            "unit": "ns/iter",
            "extra": "iterations: 17125631\ncpu: 40.92473713815233 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::smallMolecule, Population::small>",
            "value": 126.6180299463173,
            "unit": "ns/iter",
            "extra": "iterations: 5521281\ncpu: 126.61448964470058 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::smallMolecule, Population::small>",
            "value": 0.4322189480841443,
            "unit": "ms/iter",
            "extra": "iterations: 1618\ncpu: 0.43219587453647024 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 215.96441159999813,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 215.9506754000006 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 215.2680614000019,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 215.24976399999787 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::mediumMolecule, Population::small>",
            "value": 1.351978895145647,
            "unit": "ms/iter",
            "extra": "iterations: 515\ncpu: 1.3518783514563133 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::mediumMolecule, Population::small>",
            "value": 126.74554221001122,
            "unit": "ns/iter",
            "extra": "iterations: 5525608\ncpu: 126.73618993601936 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::mediumMolecule, Population::small>",
            "value": 40.79720147902863,
            "unit": "ns/iter",
            "extra": "iterations: 17071732\ncpu: 40.79641608713043 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesTorsion<ProblemType::mediumMolecule, Population::small>",
            "value": 599.4273299544758,
            "unit": "ns/iter",
            "extra": "iterations: 1167276\ncpu: 599.3938365904917 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1970.4512939999859,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1970.3393664000032 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::mediumMolecule, Population::small>",
            "value": 46.22940626666908,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 46.22565526666639 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2016.308935799998,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2016.1870069999964 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tristan.youngs@stfc.ac.uk",
            "name": "Tristan Youngs",
            "username": "trisyoungs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa3296826611a015753f6006391c8417ca0c5862",
          "message": "Merge pull request #668 from disorderedmaterials/bugfix-08-05-21-data-export\n\nBugfix 08/05/21 Data Export",
          "timestamp": "2021-05-10T15:52:46+01:00",
          "tree_id": "c10b20c4b37efa260d244947b5872f86c889bdde",
          "url": "https://github.com/disorderedmaterials/dissolve/commit/aa3296826611a015753f6006391c8417ca0c5862"
        },
        "date": 1620659639105,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::SimpleMethod>/iterations:5",
            "value": 14.661581000018487,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 14.661401800000002 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::CellsMethod>/iterations:5",
            "value": 22.634512400009044,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 22.6343722 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::SimpleMethod>/iterations:5",
            "value": 356.5113311999994,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 356.4717936 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::CellsMethod>/iterations:5",
            "value": 567.7222230000098,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 567.6558589999999 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::SimpleMethod>/iterations:5",
            "value": 1445.052005799971,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1444.9520903999996 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::CellsMethod>/iterations:5",
            "value": 2113.5848389999865,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2113.423337 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 8.00223461933993,
            "unit": "ns/iter",
            "extra": "iterations: 90063214\ncpu: 8.001291881499997 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 7.496784975517719,
            "unit": "ns/iter",
            "extra": "iterations: 90158878\ncpu: 7.496441160237146 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 17.853553463893164,
            "unit": "ns/iter",
            "extra": "iterations: 39195164\ncpu: 17.852354795606917 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 17.63827704824008,
            "unit": "ns/iter",
            "extra": "iterations: 43319286\ncpu: 17.63691275982711 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 11.992518054717582,
            "unit": "ns/iter",
            "extra": "iterations: 60159622\ncpu: 11.99244152498169 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 12.378808279097248,
            "unit": "ns/iter",
            "extra": "iterations: 54124250\ncpu: 12.377947389571213 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 11.848137500445379,
            "unit": "ns/iter",
            "extra": "iterations: 54522295\ncpu: 11.847418638558825 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 11.792234031985759,
            "unit": "ns/iter",
            "extra": "iterations: 57066627\ncpu: 11.791121262520011 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 11.703491775338858,
            "unit": "ns/iter",
            "extra": "iterations: 59689980\ncpu: 11.702764584608717 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 11.99883129021215,
            "unit": "ns/iter",
            "extra": "iterations: 60017466\ncpu: 11.998223133912402 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 11.922755908488996,
            "unit": "ns/iter",
            "extra": "iterations: 59439187\ncpu: 11.922190608024392 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 12.414769551309657,
            "unit": "ns/iter",
            "extra": "iterations: 56477193\ncpu: 12.413848719429064 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 13.211554685906188,
            "unit": "ns/iter",
            "extra": "iterations: 52335806\ncpu: 13.210268816725542 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 14.402209569759638,
            "unit": "ns/iter",
            "extra": "iterations: 48870600\ncpu: 14.401558892258256 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 15.572575747495074,
            "unit": "ns/iter",
            "extra": "iterations: 46496786\ncpu: 15.571240171309983 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 15.825931389376972,
            "unit": "ns/iter",
            "extra": "iterations: 44204874\ncpu: 15.824623886497152 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 15.669048481070696,
            "unit": "ns/iter",
            "extra": "iterations: 43728988\ncpu: 15.6679300925052 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 19.59087895995897,
            "unit": "ns/iter",
            "extra": "iterations: 35437735\ncpu: 19.589059120172287 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 22.470122900704894,
            "unit": "ns/iter",
            "extra": "iterations: 29576315\ncpu: 22.468121163843477 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 22.572139443433922,
            "unit": "ns/iter",
            "extra": "iterations: 30323321\ncpu: 22.571153304745323 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 22.4350013236265,
            "unit": "ns/iter",
            "extra": "iterations: 31866972\ncpu: 22.433084260406197 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 22.711397009654238,
            "unit": "ns/iter",
            "extra": "iterations: 31254444\ncpu: 22.71018140652252 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 22.419549840646624,
            "unit": "ns/iter",
            "extra": "iterations: 31630621\ncpu: 22.41829773117636 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 22.889579842314944,
            "unit": "ns/iter",
            "extra": "iterations: 29574111\ncpu: 22.888227240372505 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 22.24169736616212,
            "unit": "ns/iter",
            "extra": "iterations: 31229066\ncpu: 22.241313268863095 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 23.020842540569333,
            "unit": "ns/iter",
            "extra": "iterations: 30191377\ncpu: 23.01978607997903 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 22.823441693522813,
            "unit": "ns/iter",
            "extra": "iterations: 28281728\ncpu: 22.82327225550015 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 23.967135859854206,
            "unit": "ns/iter",
            "extra": "iterations: 28665378\ncpu: 23.966382442261803 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 25.688417800555808,
            "unit": "ns/iter",
            "extra": "iterations: 27483027\ncpu: 25.686958936510138 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 28.160481128539764,
            "unit": "ns/iter",
            "extra": "iterations: 25085853\ncpu: 28.159603821325327 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 27.51804702935424,
            "unit": "ns/iter",
            "extra": "iterations: 25671538\ncpu: 27.517548111063803 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 30.81744526446522,
            "unit": "ns/iter",
            "extra": "iterations: 23755226\ncpu: 30.816148665560995 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 32.40458120308221,
            "unit": "ns/iter",
            "extra": "iterations: 21634579\ncpu: 32.4027183057274 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 36.13412597171642,
            "unit": "ns/iter",
            "extra": "iterations: 18227648\ncpu: 36.130987333088946 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 33.719307476004545,
            "unit": "ns/iter",
            "extra": "iterations: 21293125\ncpu: 33.71529712054949 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 34.07680983523715,
            "unit": "ns/iter",
            "extra": "iterations: 20959256\ncpu: 34.07592759972003 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 33.904388197580786,
            "unit": "ns/iter",
            "extra": "iterations: 21676508\ncpu: 33.89751868705041 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 32.98532827342564,
            "unit": "ns/iter",
            "extra": "iterations: 20678616\ncpu: 32.98472881357223 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 33.54698286704337,
            "unit": "ns/iter",
            "extra": "iterations: 20496876\ncpu: 33.54634384283737 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 32.39630008301551,
            "unit": "ns/iter",
            "extra": "iterations: 21543132\ncpu: 32.39310166228371 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 33.855327495078214,
            "unit": "ns/iter",
            "extra": "iterations: 20758236\ncpu: 33.8520999568557 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 33.938815862702484,
            "unit": "ns/iter",
            "extra": "iterations: 20527265\ncpu: 33.9370035413873 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 33.68572572427065,
            "unit": "ns/iter",
            "extra": "iterations: 20522071\ncpu: 33.68416126228208 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 38.173431044100965,
            "unit": "ns/iter",
            "extra": "iterations: 18214438\ncpu: 38.17007656234022 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 40.267916095174904,
            "unit": "ns/iter",
            "extra": "iterations: 17428128\ncpu: 40.26431840528177 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 38.90337932420335,
            "unit": "ns/iter",
            "extra": "iterations: 18214559\ncpu: 38.89684065367755 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 41.864268646309874,
            "unit": "ns/iter",
            "extra": "iterations: 16746897\ncpu: 41.862435470881515 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 46.73100597777462,
            "unit": "ns/iter",
            "extra": "iterations: 13735045\ncpu: 46.72839965213107 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 48.66024532550351,
            "unit": "ns/iter",
            "extra": "iterations: 12676791\ncpu: 48.65880963092263 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 66.5082156539276,
            "unit": "ns/iter",
            "extra": "iterations: 10629586\ncpu: 66.49991815297362 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 242.94163900587787,
            "unit": "ns/iter",
            "extra": "iterations: 2930142\ncpu: 242.93140059424027 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 935.2188143007007,
            "unit": "ns/iter",
            "extra": "iterations: 746007\ncpu: 935.1425428983829 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 3946.9008549254518,
            "unit": "ns/iter",
            "extra": "iterations: 175571\ncpu: 3946.69068354116 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 24677.907319827045,
            "unit": "ns/iter",
            "extra": "iterations: 28334\ncpu: 24675.969718359524 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 219118.71748026295,
            "unit": "ns/iter",
            "extra": "iterations: 3175\ncpu: 219105.04787401322 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1121473.2127660061,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1121372.0654664491 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 18732071.552628774,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 18729663.68421053 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 414.39781615405195,
            "unit": "ns/iter",
            "extra": "iterations: 1679972\ncpu: 414.38388675524976 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1673.8550087690799,
            "unit": "ns/iter",
            "extra": "iterations: 429357\ncpu: 1673.8023695898682 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 6803.805111046573,
            "unit": "ns/iter",
            "extra": "iterations: 103110\ncpu: 6803.293996702656 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 28605.96380696956,
            "unit": "ns/iter",
            "extra": "iterations: 25364\ncpu: 28604.004336855352 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 113275.90230796825,
            "unit": "ns/iter",
            "extra": "iterations: 6326\ncpu: 113267.52418589946 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 491752.47091027116,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 491714.5530458624 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2077764.9161853152,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2077669.8323699457 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 18445633.638887357,
            "unit": "ns/iter",
            "extra": "iterations: 36\ncpu: 18444272.500000224 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 828.555445470339,
            "unit": "ns/iter",
            "extra": "iterations: 882146\ncpu: 828.4822149621534 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3342.915338870695,
            "unit": "ns/iter",
            "extra": "iterations: 216085\ncpu: 3342.645084110395 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 11107.079460481847,
            "unit": "ns/iter",
            "extra": "iterations: 63390\ncpu: 11106.704006941047 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 51844.200225990884,
            "unit": "ns/iter",
            "extra": "iterations: 13275\ncpu: 51839.71804143057 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 210909.63068526704,
            "unit": "ns/iter",
            "extra": "iterations: 3298\ncpu: 210886.73802304498 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 878029.6134564604,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 877986.6042216494 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 3838170.64324265,
            "unit": "ns/iter",
            "extra": "iterations: 185\ncpu: 3837834.4216216127 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 21671995.62500599,
            "unit": "ns/iter",
            "extra": "iterations: 32\ncpu: 21670270.625000045 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 1507.7441353407587,
            "unit": "ns/iter",
            "extra": "iterations: 454971\ncpu: 1507.595334647712 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 120.5855879432292,
            "unit": "ns/iter",
            "extra": "iterations: 5705015\ncpu: 120.5819422034825 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 16.384569512012195,
            "unit": "ns/iter",
            "extra": "iterations: 44395524\ncpu: 16.382846365322795 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 70.96822713337544,
            "unit": "ns/iter",
            "extra": "iterations: 8321314\ncpu: 70.9667371042614 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.4018477841561333,
            "unit": "ms/iter",
            "extra": "iterations: 1742\ncpu: 0.4018249942594698 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.3768146201385066,
            "unit": "ms/iter",
            "extra": "iterations: 1877\ncpu: 0.37676800372935665 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 234.68072040000152,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 234.66830060000066 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 230.42117900004087,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 230.39797899999994 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 751.7108862378301,
            "unit": "ns/iter",
            "extra": "iterations: 926151\ncpu: 751.6932865159106 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 42454.56677233242,
            "unit": "ns/iter",
            "extra": "iterations: 16721\ncpu: 42450.272591352346 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 15.525525903474254,
            "unit": "ns/iter",
            "extra": "iterations: 44511353\ncpu: 15.524427262410972 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 78.24506030087402,
            "unit": "ns/iter",
            "extra": "iterations: 9108905\ncpu: 78.24001018783298 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeTorsionEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 174.91585186549167,
            "unit": "ns/iter",
            "extra": "iterations: 4065818\ncpu: 174.9065302480331 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 2.9904927478988044,
            "unit": "ms/iter",
            "extra": "iterations: 238\ncpu: 2.9902335042016697 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 23.84566249999504,
            "unit": "ms/iter",
            "extra": "iterations: 30\ncpu: 23.843712499999963 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2171.154301600018,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2171.001481399998 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2209.2559063999943,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2209.1029059999983 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::smallMolecule, Population::small>",
            "value": 2.5291861745451816,
            "unit": "ms/iter",
            "extra": "iterations: 275\ncpu: 2.528982538181853 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::smallMolecule, Population::small>",
            "value": 39.18962861942626,
            "unit": "ns/iter",
            "extra": "iterations: 17162826\ncpu: 39.187268868191765 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::smallMolecule, Population::small>",
            "value": 127.6433840338417,
            "unit": "ns/iter",
            "extra": "iterations: 5277725\ncpu: 127.63601381276844 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::smallMolecule, Population::small>",
            "value": 0.4343614862671827,
            "unit": "ms/iter",
            "extra": "iterations: 1602\ncpu: 0.4343282134831352 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 193.5222271999919,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 193.50900740000156 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 198.60575180000524,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 198.5915919999968 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::mediumMolecule, Population::small>",
            "value": 1.238268134125489,
            "unit": "ms/iter",
            "extra": "iterations: 589\ncpu: 1.2382336655348092 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::mediumMolecule, Population::small>",
            "value": 135.6367209805075,
            "unit": "ns/iter",
            "extra": "iterations: 5190820\ncpu: 135.63425508879178 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::mediumMolecule, Population::small>",
            "value": 41.6977989295733,
            "unit": "ns/iter",
            "extra": "iterations: 16726089\ncpu: 41.69489920805734 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesTorsion<ProblemType::mediumMolecule, Population::small>",
            "value": 538.2257471335305,
            "unit": "ns/iter",
            "extra": "iterations: 1350294\ncpu: 538.2124892801005 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1677.0689455999673,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1676.9608259999982 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::mediumMolecule, Population::small>",
            "value": 44.5457335625008,
            "unit": "ms/iter",
            "extra": "iterations: 16\ncpu: 44.53990237499994 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1729.1893508000157,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1729.054930799998 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tristan.youngs@stfc.ac.uk",
            "name": "Tristan Youngs",
            "username": "trisyoungs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "13dd87083b71b41fa2b17bcab35290aec4a35b10",
          "message": "Merge pull request #660 from disorderedmaterials/uff4mof\n\nUFF4MOF Testing",
          "timestamp": "2021-05-10T15:53:02+01:00",
          "tree_id": "d8d5c8b0f45f2e669d2aebdd1607b6aa46543218",
          "url": "https://github.com/disorderedmaterials/dissolve/commit/13dd87083b71b41fa2b17bcab35290aec4a35b10"
        },
        "date": 1620659640035,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::SimpleMethod>/iterations:5",
            "value": 18.470398999988902,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 18.468098200000004 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::CellsMethod>/iterations:5",
            "value": 27.973561999988306,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 27.9735224 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::SimpleMethod>/iterations:5",
            "value": 438.9853617999961,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 438.9473287999999 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::CellsMethod>/iterations:5",
            "value": 656.7315004000193,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 656.6973206 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::SimpleMethod>/iterations:5",
            "value": 1728.9028658000007,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1728.8047491999998 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::CellsMethod>/iterations:5",
            "value": 2487.3959835999813,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2487.2200304000003 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 9.14121597802592,
            "unit": "ns/iter",
            "extra": "iterations: 77700039\ncpu: 9.141048951082213 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 8.988529732163899,
            "unit": "ns/iter",
            "extra": "iterations: 78582995\ncpu: 8.987891807890538 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 18.82646584529997,
            "unit": "ns/iter",
            "extra": "iterations: 39329082\ncpu: 18.825156254600603 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 17.573803176541087,
            "unit": "ns/iter",
            "extra": "iterations: 39679620\ncpu: 17.57259555409049 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 12.973335311651715,
            "unit": "ns/iter",
            "extra": "iterations: 53412400\ncpu: 12.972528158255422 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 12.957936121892498,
            "unit": "ns/iter",
            "extra": "iterations: 53419492\ncpu: 12.957484938269339 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 12.995082158151465,
            "unit": "ns/iter",
            "extra": "iterations: 54218905\ncpu: 12.99441163557243 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 12.923617021809157,
            "unit": "ns/iter",
            "extra": "iterations: 54491604\ncpu: 12.923257278313926 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 13.780539569835708,
            "unit": "ns/iter",
            "extra": "iterations: 50708098\ncpu: 13.780142473495989 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 13.136362379713564,
            "unit": "ns/iter",
            "extra": "iterations: 53895070\ncpu: 13.135570099454348 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 13.689333953592532,
            "unit": "ns/iter",
            "extra": "iterations: 51105778\ncpu: 13.687565582114868 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 13.58991985907803,
            "unit": "ns/iter",
            "extra": "iterations: 51091250\ncpu: 13.589106999730923 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 14.300523710678448,
            "unit": "ns/iter",
            "extra": "iterations: 49444285\ncpu: 14.298997184406666 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 14.77875381335531,
            "unit": "ns/iter",
            "extra": "iterations: 47466052\ncpu: 14.776632128579003 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 15.719201139781381,
            "unit": "ns/iter",
            "extra": "iterations: 44530544\ncpu: 15.717367162637823 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 17.33423304821907,
            "unit": "ns/iter",
            "extra": "iterations: 40385016\ncpu: 17.33172848068214 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 17.696053816987895,
            "unit": "ns/iter",
            "extra": "iterations: 39383551\ncpu: 17.693953219200655 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 18.690872507298185,
            "unit": "ns/iter",
            "extra": "iterations: 36186597\ncpu: 18.688201822348788 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 25.90624530693438,
            "unit": "ns/iter",
            "extra": "iterations: 27354172\ncpu: 25.90391041629759 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 25.978593761367478,
            "unit": "ns/iter",
            "extra": "iterations: 26680493\ncpu: 25.97625756015825 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 26.29298509655282,
            "unit": "ns/iter",
            "extra": "iterations: 26998718\ncpu: 26.28853688534398 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 26.224570774230152,
            "unit": "ns/iter",
            "extra": "iterations: 26758237\ncpu: 26.22181752856127 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 26.223647305411774,
            "unit": "ns/iter",
            "extra": "iterations: 26684368\ncpu: 26.221399997181823 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 26.009238402481092,
            "unit": "ns/iter",
            "extra": "iterations: 26980747\ncpu: 26.00895779497878 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 26.1231205827458,
            "unit": "ns/iter",
            "extra": "iterations: 27199189\ncpu: 26.12279038908105 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 25.98662592166029,
            "unit": "ns/iter",
            "extra": "iterations: 26929108\ncpu: 25.986484884683225 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 26.155896246449235,
            "unit": "ns/iter",
            "extra": "iterations: 26737629\ncpu: 26.155907728392936 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 26.36480664304691,
            "unit": "ns/iter",
            "extra": "iterations: 26682206\ncpu: 26.364330932757237 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 26.249256057309562,
            "unit": "ns/iter",
            "extra": "iterations: 26889168\ncpu: 26.249046939645 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 27.334890775765334,
            "unit": "ns/iter",
            "extra": "iterations: 25337052\ncpu: 27.334460299485386 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 29.710570757923634,
            "unit": "ns/iter",
            "extra": "iterations: 23534443\ncpu: 29.710520193743235 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 31.290766489680074,
            "unit": "ns/iter",
            "extra": "iterations: 22562091\ncpu: 31.28845455857801 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 32.817830682275336,
            "unit": "ns/iter",
            "extra": "iterations: 22181518\ncpu: 32.815829647006126 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 41.56818003884648,
            "unit": "ns/iter",
            "extra": "iterations: 16719637\ncpu: 41.56727164590933 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 38.18264508632966,
            "unit": "ns/iter",
            "extra": "iterations: 18260765\ncpu: 38.182140397732304 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 38.44566077959923,
            "unit": "ns/iter",
            "extra": "iterations: 18329652\ncpu: 38.443811971989355 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 38.414413213774196,
            "unit": "ns/iter",
            "extra": "iterations: 18113462\ncpu: 38.41319423089872 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 38.57389854019101,
            "unit": "ns/iter",
            "extra": "iterations: 18109830\ncpu: 38.572696706705365 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 38.130157153990815,
            "unit": "ns/iter",
            "extra": "iterations: 18366889\ncpu: 38.12927605758412 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 38.15929375061342,
            "unit": "ns/iter",
            "extra": "iterations: 18290253\ncpu: 38.15776523156949 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 38.18974545804618,
            "unit": "ns/iter",
            "extra": "iterations: 18332813\ncpu: 38.18886839679199 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 38.63108676613518,
            "unit": "ns/iter",
            "extra": "iterations: 18143830\ncpu: 38.62920678820321 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 38.44174016670658,
            "unit": "ns/iter",
            "extra": "iterations: 18249194\ncpu: 38.440514304357286 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 38.271040285242826,
            "unit": "ns/iter",
            "extra": "iterations: 18227866\ncpu: 38.26973991360324 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 39.52492336893532,
            "unit": "ns/iter",
            "extra": "iterations: 18100362\ncpu: 39.52271275016488 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 41.33314449334201,
            "unit": "ns/iter",
            "extra": "iterations: 16818471\ncpu: 41.331523894175724 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 42.952743447324806,
            "unit": "ns/iter",
            "extra": "iterations: 16375401\ncpu: 42.94973851327313 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 44.30519829211354,
            "unit": "ns/iter",
            "extra": "iterations: 16035863\ncpu: 44.30397721656717 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 56.85176544339021,
            "unit": "ns/iter",
            "extra": "iterations: 11389915\ncpu: 56.849228637790475 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 72.92514168868927,
            "unit": "ns/iter",
            "extra": "iterations: 9746720\ncpu: 72.91965204704712 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 270.4260155311685,
            "unit": "ns/iter",
            "extra": "iterations: 2585002\ncpu: 270.4129787907318 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 1040.5958678319869,
            "unit": "ns/iter",
            "extra": "iterations: 663429\ncpu: 1040.5500528315713 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 4350.081899054014,
            "unit": "ns/iter",
            "extra": "iterations: 161870\ncpu: 4349.893117934203 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 23360.248622542338,
            "unit": "ns/iter",
            "extra": "iterations: 29402\ncpu: 23359.25753350094 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 132738.63760323726,
            "unit": "ns/iter",
            "extra": "iterations: 5207\ncpu: 132728.65219896496 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1061486.144376818,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1061422.3389057703 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 6090015.424240736,
            "unit": "ns/iter",
            "extra": "iterations: 99\ncpu: 6089517.585858555 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 387.86329213939496,
            "unit": "ns/iter",
            "extra": "iterations: 1804717\ncpu: 387.8563663998346 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1521.4291174368934,
            "unit": "ns/iter",
            "extra": "iterations: 461270\ncpu: 1521.3661998395635 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 6338.931944087639,
            "unit": "ns/iter",
            "extra": "iterations: 109028\ncpu: 6338.510153355179 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 25695.989139128364,
            "unit": "ns/iter",
            "extra": "iterations: 27530\ncpu: 25694.85256084306 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 104040.22691566053,
            "unit": "ns/iter",
            "extra": "iterations: 6747\ncpu: 104037.71883800266 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 420126.5816326278,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 420107.67767106986 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2293861.249180453,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 2293835.360655724 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 9427905.736111421,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 9427129.694444543 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 877.8116919961303,
            "unit": "ns/iter",
            "extra": "iterations: 821314\ncpu: 877.8035732983957 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3599.7253668654857,
            "unit": "ns/iter",
            "extra": "iterations: 196189\ncpu: 3599.6503983404086 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 12218.686687266229,
            "unit": "ns/iter",
            "extra": "iterations: 57291\ncpu: 12218.697160112515 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 56191.2850182555,
            "unit": "ns/iter",
            "extra": "iterations: 12315\ncpu: 56188.784896467216 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 231622.7451891789,
            "unit": "ns/iter",
            "extra": "iterations: 3014\ncpu: 231608.46118115168 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 908653.1901039882,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 908614.3763020934 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 4323636.938270732,
            "unit": "ns/iter",
            "extra": "iterations: 162\ncpu: 4323589.376543204 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 18140722.105266303,
            "unit": "ns/iter",
            "extra": "iterations: 38\ncpu: 18139694.5526317 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 1786.9815598594887,
            "unit": "ns/iter",
            "extra": "iterations: 407806\ncpu: 1786.8704261339954 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 142.02692847208988,
            "unit": "ns/iter",
            "extra": "iterations: 4836925\ncpu: 142.0195826894175 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 19.73532325336836,
            "unit": "ns/iter",
            "extra": "iterations: 35438610\ncpu: 19.734721085279762 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 75.3536557871408,
            "unit": "ns/iter",
            "extra": "iterations: 9310047\ncpu: 75.3486508714724 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.35948056087407043,
            "unit": "ms/iter",
            "extra": "iterations: 1922\ncpu: 0.35945992559833695 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.38238662750548397,
            "unit": "ms/iter",
            "extra": "iterations: 1796\ncpu: 0.3823531336302847 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 255.24901879998652,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 255.23956360000003 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 254.51567159998376,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 254.5027916000009 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 808.9559124322348,
            "unit": "ns/iter",
            "extra": "iterations: 730909\ncpu: 808.9188462585532 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 52197.741067422285,
            "unit": "ns/iter",
            "extra": "iterations: 13378\ncpu: 52196.617880101956 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 19.754909749204216,
            "unit": "ns/iter",
            "extra": "iterations: 36030099\ncpu: 19.754080969913662 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 76.13960777822771,
            "unit": "ns/iter",
            "extra": "iterations: 9159461\ncpu: 76.13543864644444 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeTorsionEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 170.55460593447683,
            "unit": "ns/iter",
            "extra": "iterations: 4141418\ncpu: 170.54806759424036 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 3.1048913026312985,
            "unit": "ms/iter",
            "extra": "iterations: 228\ncpu: 3.1047171973684446 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 24.555288678576353,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 24.553964071427817 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2503.7928486000055,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2503.679041800001 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2515.3687770000033,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2515.2565505999974 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::smallMolecule, Population::small>",
            "value": 2.7627207751939125,
            "unit": "ms/iter",
            "extra": "iterations: 258\ncpu: 2.7625929922480683 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::smallMolecule, Population::small>",
            "value": 41.87591124424165,
            "unit": "ns/iter",
            "extra": "iterations: 16798460\ncpu: 41.871470480032265 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::smallMolecule, Population::small>",
            "value": 121.80575523023597,
            "unit": "ns/iter",
            "extra": "iterations: 5739614\ncpu: 121.79827458780458 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::smallMolecule, Population::small>",
            "value": 0.4259441441551166,
            "unit": "ms/iter",
            "extra": "iterations: 1651\ncpu: 0.42593554996971533 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 212.26520459999847,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 212.25035200000093 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 208.59794779998992,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 208.58454300000062 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::mediumMolecule, Population::small>",
            "value": 1.3245859035916874,
            "unit": "ms/iter",
            "extra": "iterations: 529\ncpu: 1.324529361058582 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::mediumMolecule, Population::small>",
            "value": 123.05012275903637,
            "unit": "ns/iter",
            "extra": "iterations: 5788169\ncpu: 123.04848096176715 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::mediumMolecule, Population::small>",
            "value": 41.32653443735422,
            "unit": "ns/iter",
            "extra": "iterations: 17083705\ncpu: 41.32583634521914 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesTorsion<ProblemType::mediumMolecule, Population::small>",
            "value": 583.3844861662888,
            "unit": "ns/iter",
            "extra": "iterations: 1186425\ncpu: 583.3690599911573 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1922.2548599999755,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1922.1779479999955 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::mediumMolecule, Population::small>",
            "value": 44.98717218750414,
            "unit": "ms/iter",
            "extra": "iterations: 16\ncpu: 44.98296224999976 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1975.5238757999905,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1975.4272741999953 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tristan.youngs@stfc.ac.uk",
            "name": "Tristan Youngs",
            "username": "trisyoungs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "491023b5ffd7340144837aa50fee4ff8fa4bb378",
          "message": "Merge pull request #669 from disorderedmaterials/bugfix-07-05-21-system-tests\n\nBugfix 07/05/21 System Tests",
          "timestamp": "2021-05-10T15:52:32+01:00",
          "tree_id": "71bf61451d659a8d87825b4604a8a0bd5ab6dcff",
          "url": "https://github.com/disorderedmaterials/dissolve/commit/491023b5ffd7340144837aa50fee4ff8fa4bb378"
        },
        "date": 1620659649595,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::SimpleMethod>/iterations:5",
            "value": 16.345345999980054,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 16.345265599999998 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::CellsMethod>/iterations:5",
            "value": 23.35790000001907,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 23.3543002 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::SimpleMethod>/iterations:5",
            "value": 393.01915740002187,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 392.9779542 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::CellsMethod>/iterations:5",
            "value": 575.4178122000212,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 575.3698585999999 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::SimpleMethod>/iterations:5",
            "value": 1515.7634449999932,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1515.6870198000001 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::CellsMethod>/iterations:5",
            "value": 2203.597864600033,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2202.5313738 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 7.939078919982337,
            "unit": "ns/iter",
            "extra": "iterations: 74327310\ncpu: 7.938083296704824 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 8.269542525707209,
            "unit": "ns/iter",
            "extra": "iterations: 90724289\ncpu: 8.265773953874675 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 17.431647204588746,
            "unit": "ns/iter",
            "extra": "iterations: 35884231\ncpu: 17.431304379909957 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 18.084810440333506,
            "unit": "ns/iter",
            "extra": "iterations: 41389633\ncpu: 18.083259327281304 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 12.83183771658533,
            "unit": "ns/iter",
            "extra": "iterations: 52877517\ncpu: 12.831671275336168 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 12.123253515747361,
            "unit": "ns/iter",
            "extra": "iterations: 58106951\ncpu: 12.121687455258122 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 13.446045894462443,
            "unit": "ns/iter",
            "extra": "iterations: 49450324\ncpu: 13.445388689465462 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 12.254612985659453,
            "unit": "ns/iter",
            "extra": "iterations: 56953949\ncpu: 12.253408486213976 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 12.327203680869992,
            "unit": "ns/iter",
            "extra": "iterations: 56616206\ncpu: 12.32644416335492 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 12.545146304333784,
            "unit": "ns/iter",
            "extra": "iterations: 57775903\ncpu: 12.54467913725218 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 12.437440422696474,
            "unit": "ns/iter",
            "extra": "iterations: 54690499\ncpu: 12.436535329472905 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 12.661454933003927,
            "unit": "ns/iter",
            "extra": "iterations: 56555525\ncpu: 12.660993421951291 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 13.284659758655827,
            "unit": "ns/iter",
            "extra": "iterations: 52671818\ncpu: 13.283308011126614 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 15.18311295291211,
            "unit": "ns/iter",
            "extra": "iterations: 46403850\ncpu: 15.182242292396028 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 16.16653559137108,
            "unit": "ns/iter",
            "extra": "iterations: 46248228\ncpu: 16.164418796759108 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 15.17330485652754,
            "unit": "ns/iter",
            "extra": "iterations: 42505237\ncpu: 15.171528793028568 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 16.639832984039366,
            "unit": "ns/iter",
            "extra": "iterations: 45902918\ncpu: 16.638168536475245 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 16.034296045089665,
            "unit": "ns/iter",
            "extra": "iterations: 40325466\ncpu: 16.03305863842967 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 17.818828266523298,
            "unit": "ns/iter",
            "extra": "iterations: 37671997\ncpu: 17.81694891300832 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 23.46271383814913,
            "unit": "ns/iter",
            "extra": "iterations: 29828868\ncpu: 23.461158298062124 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 23.447939775784405,
            "unit": "ns/iter",
            "extra": "iterations: 31370639\ncpu: 23.442488850800782 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 23.501439878286057,
            "unit": "ns/iter",
            "extra": "iterations: 29588612\ncpu: 23.500213088738434 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 23.22828401048202,
            "unit": "ns/iter",
            "extra": "iterations: 30755794\ncpu: 23.227071133328355 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 23.12246025392056,
            "unit": "ns/iter",
            "extra": "iterations: 27251740\ncpu: 23.120739372972235 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 23.110804883495966,
            "unit": "ns/iter",
            "extra": "iterations: 29848531\ncpu: 23.110412803899678 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 24.162364300219828,
            "unit": "ns/iter",
            "extra": "iterations: 29601926\ncpu: 24.160475977137455 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 23.04069204683523,
            "unit": "ns/iter",
            "extra": "iterations: 29492397\ncpu: 23.04012925772015 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 26.40748423692187,
            "unit": "ns/iter",
            "extra": "iterations: 26133379\ncpu: 26.40539116659942 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 27.163861328427693,
            "unit": "ns/iter",
            "extra": "iterations: 26598991\ncpu: 27.074575911545068 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 30.076385070530023,
            "unit": "ns/iter",
            "extra": "iterations: 24186873\ncpu: 30.074561726106484 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 28.393726703389678,
            "unit": "ns/iter",
            "extra": "iterations: 24832207\ncpu: 28.3922890945617 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 31.470306181300575,
            "unit": "ns/iter",
            "extra": "iterations: 23857760\ncpu: 31.46707867796498 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 28.351895455338052,
            "unit": "ns/iter",
            "extra": "iterations: 25257493\ncpu: 28.350133641529617 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 33.0188686074105,
            "unit": "ns/iter",
            "extra": "iterations: 20971182\ncpu: 33.01740946218469 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 35.9344615299267,
            "unit": "ns/iter",
            "extra": "iterations: 19439697\ncpu: 35.93029994243234 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 36.66314564126757,
            "unit": "ns/iter",
            "extra": "iterations: 19348341\ncpu: 36.66042711362183 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 34.41993388517285,
            "unit": "ns/iter",
            "extra": "iterations: 19903857\ncpu: 34.41660287249846 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 34.782552086362045,
            "unit": "ns/iter",
            "extra": "iterations: 19747106\ncpu: 34.78053153712754 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 34.4884521454952,
            "unit": "ns/iter",
            "extra": "iterations: 20027270\ncpu: 34.48597552237524 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 33.43293900104616,
            "unit": "ns/iter",
            "extra": "iterations: 21059819\ncpu: 33.417107905818156 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 36.92638133004299,
            "unit": "ns/iter",
            "extra": "iterations: 20402148\ncpu: 36.92421989096506 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 35.38782033970318,
            "unit": "ns/iter",
            "extra": "iterations: 19959046\ncpu: 35.38451361853663 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 34.972895068111185,
            "unit": "ns/iter",
            "extra": "iterations: 20287046\ncpu: 34.97090848021932 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 42.109801092996484,
            "unit": "ns/iter",
            "extra": "iterations: 17310702\ncpu: 42.10487338988286 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 41.61334435603874,
            "unit": "ns/iter",
            "extra": "iterations: 16793227\ncpu: 41.612903821284945 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 38.9163027223198,
            "unit": "ns/iter",
            "extra": "iterations: 17335068\ncpu: 38.91240322795374 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 41.34807387624864,
            "unit": "ns/iter",
            "extra": "iterations: 15694786\ncpu: 41.34547428681121 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 46.30530706474587,
            "unit": "ns/iter",
            "extra": "iterations: 13931882\ncpu: 46.30199078631283 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 55.13952161185282,
            "unit": "ns/iter",
            "extra": "iterations: 10583665\ncpu: 55.13771666053271 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 79.94073098824191,
            "unit": "ns/iter",
            "extra": "iterations: 9383352\ncpu: 79.93218276368607 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 261.80935902106654,
            "unit": "ns/iter",
            "extra": "iterations: 2823244\ncpu: 261.80053548329647 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 954.0964049410513,
            "unit": "ns/iter",
            "extra": "iterations: 681936\ncpu: 954.0311510170995 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 4339.641392099686,
            "unit": "ns/iter",
            "extra": "iterations: 169327\ncpu: 4339.457139144973 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 25300.534576374266,
            "unit": "ns/iter",
            "extra": "iterations: 27996\ncpu: 25297.523467638573 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 232359.31222149156,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 232351.86441756535 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1210759.6000000972,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 1210633.1593220264 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 5285479.137614232,
            "unit": "ns/iter",
            "extra": "iterations: 109\ncpu: 5285324.07339445 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 422.9816576322012,
            "unit": "ns/iter",
            "extra": "iterations: 1618984\ncpu: 422.9627568895117 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1784.2980159044632,
            "unit": "ns/iter",
            "extra": "iterations: 420897\ncpu: 1784.2212726628945 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 7068.399823043176,
            "unit": "ns/iter",
            "extra": "iterations: 91548\ncpu: 7067.906125748327 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 30386.93746409051,
            "unit": "ns/iter",
            "extra": "iterations: 22627\ncpu: 30386.486631015836 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 127449.03899809545,
            "unit": "ns/iter",
            "extra": "iterations: 6308\ncpu: 127436.95909955692 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 564695.8024883351,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 564679.7822706118 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2032456.8683472357,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2032278.4425770321 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 8727383.35526061,
            "unit": "ns/iter",
            "extra": "iterations: 76\ncpu: 8727135.960526392 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 809.6143811658485,
            "unit": "ns/iter",
            "extra": "iterations: 873142\ncpu: 809.5439458873764 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3313.998949101151,
            "unit": "ns/iter",
            "extra": "iterations: 210296\ncpu: 3312.435443375068 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 11594.925822116433,
            "unit": "ns/iter",
            "extra": "iterations: 61366\ncpu: 11593.996952709893 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 50480.23666840395,
            "unit": "ns/iter",
            "extra": "iterations: 13483\ncpu: 50476.261217829895 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 216878.36416023577,
            "unit": "ns/iter",
            "extra": "iterations: 3471\ncpu: 216850.36070296998 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 924555.0369356505,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 924480.6196990375 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 4035252.7967040786,
            "unit": "ns/iter",
            "extra": "iterations: 182\ncpu: 4034852.7967033084 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 16102483.348837523,
            "unit": "ns/iter",
            "extra": "iterations: 43\ncpu: 16102306.62790696 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 1646.8118774068994,
            "unit": "ns/iter",
            "extra": "iterations: 439894\ncpu: 1646.7234447389408 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 134.90288222458176,
            "unit": "ns/iter",
            "extra": "iterations: 4995100\ncpu: 134.90134091409584 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 17.10968098833112,
            "unit": "ns/iter",
            "extra": "iterations: 40796031\ncpu: 17.10790387917879 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 74.14640725811952,
            "unit": "ns/iter",
            "extra": "iterations: 8909087\ncpu: 74.14436428783341 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.44406101044864016,
            "unit": "ms/iter",
            "extra": "iterations: 1627\ncpu: 0.444013561155502 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.3999483096065254,
            "unit": "ms/iter",
            "extra": "iterations: 1728\ncpu: 0.39990832060184983 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 246.7998980000175,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 246.78421780000122 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 256.5829976000259,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 256.56069800000125 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 824.9697169064962,
            "unit": "ns/iter",
            "extra": "iterations: 895252\ncpu: 824.9003509626283 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 46863.99309955704,
            "unit": "ns/iter",
            "extra": "iterations: 14202\ncpu: 46859.9796507534 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 17.867270044206876,
            "unit": "ns/iter",
            "extra": "iterations: 42279333\ncpu: 17.86693657158669 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 87.59525631141635,
            "unit": "ns/iter",
            "extra": "iterations: 8179542\ncpu: 87.58608709387391 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeTorsionEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 186.00358837025576,
            "unit": "ns/iter",
            "extra": "iterations: 3977293\ncpu: 185.98188994373888 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 3.0798076767239464,
            "unit": "ms/iter",
            "extra": "iterations: 232\ncpu: 3.0796408706896434 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 24.529174750000493,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 24.52697475000016 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2267.922597200004,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2267.7387372 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2277.0471331999943,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2276.876593200001 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::smallMolecule, Population::small>",
            "value": 2.7251642621728154,
            "unit": "ms/iter",
            "extra": "iterations: 267\ncpu: 2.724284865168547 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::smallMolecule, Population::small>",
            "value": 40.78917348867486,
            "unit": "ns/iter",
            "extra": "iterations: 18421502\ncpu: 40.78748524414558 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::smallMolecule, Population::small>",
            "value": 132.96944559149486,
            "unit": "ns/iter",
            "extra": "iterations: 5163052\ncpu: 132.96165930538984 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::smallMolecule, Population::small>",
            "value": 0.4466108599303832,
            "unit": "ms/iter",
            "extra": "iterations: 1435\ncpu: 0.4465588745644593 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 201.60198059998038,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 201.59140060000027 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 206.4239784000165,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 206.40609840000366 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::mediumMolecule, Population::small>",
            "value": 1.327461354545366,
            "unit": "ms/iter",
            "extra": "iterations: 550\ncpu: 1.3274038981818526 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::mediumMolecule, Population::small>",
            "value": 141.35726193636634,
            "unit": "ns/iter",
            "extra": "iterations: 5033265\ncpu: 141.34704987716984 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::mediumMolecule, Population::small>",
            "value": 41.15528304271104,
            "unit": "ns/iter",
            "extra": "iterations: 16789586\ncpu: 41.15263848673808 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesTorsion<ProblemType::mediumMolecule, Population::small>",
            "value": 544.7282651492505,
            "unit": "ns/iter",
            "extra": "iterations: 1343545\ncpu: 544.6601624806015 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1770.6496841999979,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1770.500664399998 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::mediumMolecule, Population::small>",
            "value": 50.292683923072005,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 50.29150707692382 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1823.7329414000214,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1823.5907216000044 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tristan.youngs@stfc.ac.uk",
            "name": "Tristan Youngs",
            "username": "trisyoungs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f69ad551851aff1a0d8d20f89582839569e1bc28",
          "message": "Merge pull request #665 from disorderedmaterials/general-functions\n\nGeneralised Functions",
          "timestamp": "2021-05-10T15:52:04+01:00",
          "tree_id": "e8a7f49dd9969ed6bce46be00ad4c55f177be5e0",
          "url": "https://github.com/disorderedmaterials/dissolve/commit/f69ad551851aff1a0d8d20f89582839569e1bc28"
        },
        "date": 1620659689592,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::SimpleMethod>/iterations:5",
            "value": 17.312529000037102,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 17.244713400000002 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::CellsMethod>/iterations:5",
            "value": 24.733026000012615,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 24.732949 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::SimpleMethod>/iterations:5",
            "value": 393.5153544000059,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 393.4767154 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::CellsMethod>/iterations:5",
            "value": 628.2965136000257,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 628.237356 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::SimpleMethod>/iterations:5",
            "value": 1605.9494839999843,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1605.6677233999999 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::CellsMethod>/iterations:5",
            "value": 2315.919143200017,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2315.7819418000004 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 8.460928677629811,
            "unit": "ns/iter",
            "extra": "iterations: 75311925\ncpu: 8.460273230301839 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 8.589159811401002,
            "unit": "ns/iter",
            "extra": "iterations: 83743543\ncpu: 8.58918407595915 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 19.966032727659947,
            "unit": "ns/iter",
            "extra": "iterations: 34663219\ncpu: 19.965850892267166 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 18.21862763812007,
            "unit": "ns/iter",
            "extra": "iterations: 33533473\ncpu: 18.217767244090684 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 13.441483745306787,
            "unit": "ns/iter",
            "extra": "iterations: 49555675\ncpu: 13.440939085180483 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 14.124470642749918,
            "unit": "ns/iter",
            "extra": "iterations: 49972868\ncpu: 14.123538596984337 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 13.455095466692105,
            "unit": "ns/iter",
            "extra": "iterations: 51792410\ncpu: 13.454841973949451 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 13.297117898157971,
            "unit": "ns/iter",
            "extra": "iterations: 52606989\ncpu: 13.296405635380458 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 13.732732863775645,
            "unit": "ns/iter",
            "extra": "iterations: 55962204\ncpu: 13.732385790237966 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 14.502408751506566,
            "unit": "ns/iter",
            "extra": "iterations: 49392185\ncpu: 14.501363241978474 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 13.61544706799464,
            "unit": "ns/iter",
            "extra": "iterations: 52599885\ncpu: 13.614527084992652 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 13.727372823925924,
            "unit": "ns/iter",
            "extra": "iterations: 49977149\ncpu: 13.727115326246416 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 14.793191225649606,
            "unit": "ns/iter",
            "extra": "iterations: 46934174\ncpu: 14.792607344064397 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 16.56849089696756,
            "unit": "ns/iter",
            "extra": "iterations: 40757701\ncpu: 16.56755257123067 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 17.3646037535734,
            "unit": "ns/iter",
            "extra": "iterations: 39691525\ncpu: 17.36223750536161 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 17.502553705486093,
            "unit": "ns/iter",
            "extra": "iterations: 41096360\ncpu: 17.502115004832582 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 17.240430100069485,
            "unit": "ns/iter",
            "extra": "iterations: 41417152\ncpu: 17.23926360267348 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 18.7129361821822,
            "unit": "ns/iter",
            "extra": "iterations: 36398753\ncpu: 18.71258531851364 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 23.447610369963716,
            "unit": "ns/iter",
            "extra": "iterations: 29423132\ncpu: 23.445729672830257 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 25.932963850195122,
            "unit": "ns/iter",
            "extra": "iterations: 27428947\ncpu: 25.93219393365716 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 25.314866933451896,
            "unit": "ns/iter",
            "extra": "iterations: 27870529\ncpu: 25.313635740462637 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 25.61619008368899,
            "unit": "ns/iter",
            "extra": "iterations: 27238908\ncpu: 25.61525326198814 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 25.121494371595986,
            "unit": "ns/iter",
            "extra": "iterations: 27905054\ncpu: 25.11897937914754 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 26.35622701466555,
            "unit": "ns/iter",
            "extra": "iterations: 27263578\ncpu: 26.355656766694196 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 24.526818337898636,
            "unit": "ns/iter",
            "extra": "iterations: 26420392\ncpu: 24.524792289228735 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 26.44229866028833,
            "unit": "ns/iter",
            "extra": "iterations: 27230035\ncpu: 26.441467739574858 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 25.012351421536167,
            "unit": "ns/iter",
            "extra": "iterations: 27116312\ncpu: 25.01028465817904 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 27.186648637344938,
            "unit": "ns/iter",
            "extra": "iterations: 25928140\ncpu: 27.186094876069053 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 29.109083330235343,
            "unit": "ns/iter",
            "extra": "iterations: 24314045\ncpu: 29.107537515867822 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 30.93939720987248,
            "unit": "ns/iter",
            "extra": "iterations: 21978064\ncpu: 30.938268675530455 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 29.27129856709871,
            "unit": "ns/iter",
            "extra": "iterations: 23347134\ncpu: 29.26930427520568 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 33.48858731391203,
            "unit": "ns/iter",
            "extra": "iterations: 20675676\ncpu: 33.48782772568129 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 31.601740881850763,
            "unit": "ns/iter",
            "extra": "iterations: 21769312\ncpu: 31.599316413858205 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 44.847770365833064,
            "unit": "ns/iter",
            "extra": "iterations: 16427695\ncpu: 44.843661268363995 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 36.52002332249824,
            "unit": "ns/iter",
            "extra": "iterations: 18900210\ncpu: 36.51937391171851 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 38.024221942349264,
            "unit": "ns/iter",
            "extra": "iterations: 18642931\ncpu: 38.02279990201119 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 36.45205929545794,
            "unit": "ns/iter",
            "extra": "iterations: 18653637\ncpu: 36.45109610527963 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 37.75117246755201,
            "unit": "ns/iter",
            "extra": "iterations: 18841886\ncpu: 37.74950947054936 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 37.55407718978283,
            "unit": "ns/iter",
            "extra": "iterations: 19296232\ncpu: 37.55170926634794 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 35.27632607248796,
            "unit": "ns/iter",
            "extra": "iterations: 19894840\ncpu: 35.275682538788985 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 38.02030446433043,
            "unit": "ns/iter",
            "extra": "iterations: 18318139\ncpu: 38.01997036926085 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 37.83105787265275,
            "unit": "ns/iter",
            "extra": "iterations: 18955136\ncpu: 37.83022981212047 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 39.267575066398884,
            "unit": "ns/iter",
            "extra": "iterations: 17806405\ncpu: 39.26490692534511 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 43.659051109047226,
            "unit": "ns/iter",
            "extra": "iterations: 13314280\ncpu: 43.65716839363444 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 45.363446056359166,
            "unit": "ns/iter",
            "extra": "iterations: 15404275\ncpu: 45.359396011821616 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 41.689639868025274,
            "unit": "ns/iter",
            "extra": "iterations: 16596555\ncpu: 41.652142146367524 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 48.04329320420954,
            "unit": "ns/iter",
            "extra": "iterations: 13518773\ncpu: 48.042709497378155 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 52.32055558489051,
            "unit": "ns/iter",
            "extra": "iterations: 12634829\ncpu: 52.317109079988406 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 64.28503787442736,
            "unit": "ns/iter",
            "extra": "iterations: 11512649\ncpu: 64.28125038815915 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 79.85049054111012,
            "unit": "ns/iter",
            "extra": "iterations: 8169142\ncpu: 79.84768253508082 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 263.3110609132522,
            "unit": "ns/iter",
            "extra": "iterations: 2555223\ncpu: 263.3033285157469 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 1016.1337357731998,
            "unit": "ns/iter",
            "extra": "iterations: 665110\ncpu: 1016.0072033197612 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 4408.73471399827,
            "unit": "ns/iter",
            "extra": "iterations: 158233\ncpu: 4408.649485252778 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 28087.92958207606,
            "unit": "ns/iter",
            "extra": "iterations: 24454\ncpu: 28085.237220904615 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 242756.0678905593,
            "unit": "ns/iter",
            "extra": "iterations: 2887\ncpu: 242744.06165569712 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1239330.085814121,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1239223.6304728533 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 6833224.398303821,
            "unit": "ns/iter",
            "extra": "iterations: 118\ncpu: 6832681.872881388 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 456.42455263381936,
            "unit": "ns/iter",
            "extra": "iterations: 1541187\ncpu: 456.4034870525173 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1832.8802541947966,
            "unit": "ns/iter",
            "extra": "iterations: 391354\ncpu: 1832.7993887886514 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 7752.184077853316,
            "unit": "ns/iter",
            "extra": "iterations: 88267\ncpu: 7752.1058039811005 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 30558.724977413436,
            "unit": "ns/iter",
            "extra": "iterations: 23249\ncpu: 30556.30267968515 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 125221.52981233862,
            "unit": "ns/iter",
            "extra": "iterations: 6021\ncpu: 125221.79405414242 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 549039.3518091043,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 549020.835257886 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2216961.6205792115,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2216718.6430868176 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 8704562.465752993,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 8702501.5616439 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 846.8745317577204,
            "unit": "ns/iter",
            "extra": "iterations: 798465\ncpu: 846.8574878047335 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3467.0935808583445,
            "unit": "ns/iter",
            "extra": "iterations: 198983\ncpu: 3466.9288984486434 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 11979.407827371038,
            "unit": "ns/iter",
            "extra": "iterations: 58206\ncpu: 11978.913754595784 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 54460.83539767761,
            "unit": "ns/iter",
            "extra": "iterations: 12837\ncpu: 54452.810236037076 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 218022.3418803013,
            "unit": "ns/iter",
            "extra": "iterations: 3159\ncpu: 218003.82051282085 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 989513.3054830597,
            "unit": "ns/iter",
            "extra": "iterations: 766\ncpu: 989489.5979112259 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 4182128.2209290327,
            "unit": "ns/iter",
            "extra": "iterations: 172\ncpu: 4182093.511627925 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 18930793.949999727,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 18928521.04999996 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 1692.6913352151118,
            "unit": "ns/iter",
            "extra": "iterations: 405942\ncpu: 1692.6588379620616 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 138.27323588324768,
            "unit": "ns/iter",
            "extra": "iterations: 5201158\ncpu: 138.26293510022174 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 17.86195006757958,
            "unit": "ns/iter",
            "extra": "iterations: 39884105\ncpu: 17.84705067344531 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 82.01187284866772,
            "unit": "ns/iter",
            "extra": "iterations: 8759987\ncpu: 82.00287100882785 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.43781234793187296,
            "unit": "ms/iter",
            "extra": "iterations: 1644\ncpu: 0.43778064902676633 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.41537371665551176,
            "unit": "ms/iter",
            "extra": "iterations: 1507\ncpu: 0.4153511658925018 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 251.18019219999042,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 251.16033420000008 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 255.94912599999589,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 255.9402288000001 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 845.3272441736277,
            "unit": "ns/iter",
            "extra": "iterations: 841167\ncpu: 845.25705953752 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 47817.8125128941,
            "unit": "ns/iter",
            "extra": "iterations: 14545\ncpu: 47812.81780680662 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 17.4783833878625,
            "unit": "ns/iter",
            "extra": "iterations: 39885436\ncpu: 17.477778480345737 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 85.02928200170581,
            "unit": "ns/iter",
            "extra": "iterations: 7754183\ncpu: 85.01275995162791 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeTorsionEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 193.54785146423302,
            "unit": "ns/iter",
            "extra": "iterations: 3488911\ncpu: 193.53639602729714 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 3.2334664497344545,
            "unit": "ms/iter",
            "extra": "iterations: 189\ncpu: 3.2332189153439432 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 28.968152839997856,
            "unit": "ms/iter",
            "extra": "iterations: 25\ncpu: 28.965735799999948 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2429.5680494000408,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2429.4317445999977 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2441.1988140000176,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2441.092504400001 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::smallMolecule, Population::small>",
            "value": 2.8104329126207834,
            "unit": "ms/iter",
            "extra": "iterations: 206\ncpu: 2.8102807087379054 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::smallMolecule, Population::small>",
            "value": 41.321289745396456,
            "unit": "ns/iter",
            "extra": "iterations: 15930524\ncpu: 41.31880878494606 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::smallMolecule, Population::small>",
            "value": 146.8082649726004,
            "unit": "ns/iter",
            "extra": "iterations: 4863295\ncpu: 146.78998518494134 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::smallMolecule, Population::small>",
            "value": 0.4939856638713554,
            "unit": "ms/iter",
            "extra": "iterations: 1431\ncpu: 0.4939478329839317 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 221.90335459999915,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 221.8988252000031 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 214.80843779995666,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 214.79076499999792 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::mediumMolecule, Population::small>",
            "value": 1.3099779364793176,
            "unit": "ms/iter",
            "extra": "iterations: 551\ncpu: 1.3099099764065283 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::mediumMolecule, Population::small>",
            "value": 157.20180864414206,
            "unit": "ns/iter",
            "extra": "iterations: 4727077\ncpu: 157.19615758321694 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::mediumMolecule, Population::small>",
            "value": 44.26285664888885,
            "unit": "ns/iter",
            "extra": "iterations: 15501240\ncpu: 44.260687983669655 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesTorsion<ProblemType::mediumMolecule, Population::small>",
            "value": 609.9944879724871,
            "unit": "ns/iter",
            "extra": "iterations: 1218245\ncpu: 609.9751289765392 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1869.8797369999738,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1869.7852853999962 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::mediumMolecule, Population::small>",
            "value": 50.17461557143373,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 50.169484928570036 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1929.3467561999933,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1929.2520330000002 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tristan.youngs@stfc.ac.uk",
            "name": "Tristan Youngs",
            "username": "trisyoungs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d78a4f378d656e98a89fd4a26d36188941b617f4",
          "message": "Merge pull request #680 from disorderedmaterials/bragg-2021\n\nBragg Part 4 - Module",
          "timestamp": "2021-05-11T14:31:39+01:00",
          "tree_id": "d667915a93781c3b1629cab4b8876f02e5881980",
          "url": "https://github.com/disorderedmaterials/dissolve/commit/d78a4f378d656e98a89fd4a26d36188941b617f4"
        },
        "date": 1620741142686,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::SimpleMethod>/iterations:5",
            "value": 14.959301399994729,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 14.958039600000001 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::CellsMethod>/iterations:5",
            "value": 22.25512360000721,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 22.198761600000005 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::SimpleMethod>/iterations:5",
            "value": 374.4162338000024,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 374.3697334 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::CellsMethod>/iterations:5",
            "value": 526.4472091999778,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 526.4004895999999 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::SimpleMethod>/iterations:5",
            "value": 1320.6782186000055,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1320.5419176 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::CellsMethod>/iterations:5",
            "value": 2050.9665459999724,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2050.7069702 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 7.27798465889268,
            "unit": "ns/iter",
            "extra": "iterations: 95838724\ncpu: 7.277718712114742 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 7.406341222688448,
            "unit": "ns/iter",
            "extra": "iterations: 94733150\ncpu: 7.405902221133804 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 16.114619350591195,
            "unit": "ns/iter",
            "extra": "iterations: 40971389\ncpu: 16.112103009248695 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 14.022272535483499,
            "unit": "ns/iter",
            "extra": "iterations: 46597389\ncpu: 14.021357913422987 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 10.540429337717539,
            "unit": "ns/iter",
            "extra": "iterations: 71740354\ncpu: 10.539400641931586 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 10.976173666753409,
            "unit": "ns/iter",
            "extra": "iterations: 65523007\ncpu: 10.975873375286302 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 11.981160395429905,
            "unit": "ns/iter",
            "extra": "iterations: 61327508\ncpu: 11.980402040793821 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 11.856084579871002,
            "unit": "ns/iter",
            "extra": "iterations: 60675430\ncpu: 11.854225425349261 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 12.053781593314012,
            "unit": "ns/iter",
            "extra": "iterations: 59075509\ncpu: 12.051983910963862 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 11.39897568017009,
            "unit": "ns/iter",
            "extra": "iterations: 62323503\ncpu: 11.393669239034908 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 11.609795761913542,
            "unit": "ns/iter",
            "extra": "iterations: 61136786\ncpu: 11.607542012430944 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 11.736817563815832,
            "unit": "ns/iter",
            "extra": "iterations: 59383959\ncpu: 11.735867947100003 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 12.55486509637651,
            "unit": "ns/iter",
            "extra": "iterations: 55885193\ncpu: 12.553952206982686 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 15.40506118925565,
            "unit": "ns/iter",
            "extra": "iterations: 46197245\ncpu: 15.404866329150153 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 15.551643924551785,
            "unit": "ns/iter",
            "extra": "iterations: 42214559\ncpu: 15.54747244901922 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 14.406871452908444,
            "unit": "ns/iter",
            "extra": "iterations: 46151375\ncpu: 14.405389525230863 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 14.410318858760984,
            "unit": "ns/iter",
            "extra": "iterations: 51348973\ncpu: 14.40873166051436 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 14.721573082603962,
            "unit": "ns/iter",
            "extra": "iterations: 49584351\ncpu: 14.720105179958908 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 15.455607208358245,
            "unit": "ns/iter",
            "extra": "iterations: 44747490\ncpu: 15.453989173470916 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 21.407348837819505,
            "unit": "ns/iter",
            "extra": "iterations: 32775196\ncpu: 21.406735965819884 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 19.803944495354198,
            "unit": "ns/iter",
            "extra": "iterations: 33678478\ncpu: 19.801660900471703 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 22.169819563509193,
            "unit": "ns/iter",
            "extra": "iterations: 33257352\ncpu: 22.168207288421588 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 23.774989930546848,
            "unit": "ns/iter",
            "extra": "iterations: 32663156\ncpu: 23.698817713756856 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 23.06236713687842,
            "unit": "ns/iter",
            "extra": "iterations: 33053754\ncpu: 23.06146823746555 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 21.041827056626072,
            "unit": "ns/iter",
            "extra": "iterations: 29116536\ncpu: 21.032183223993535 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 22.07029527707215,
            "unit": "ns/iter",
            "extra": "iterations: 31120398\ncpu: 22.06775970538678 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 23.309122054999893,
            "unit": "ns/iter",
            "extra": "iterations: 34171127\ncpu: 23.307369230169037 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 23.6463513175935,
            "unit": "ns/iter",
            "extra": "iterations: 27664370\ncpu: 23.64406375420807 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 26.195615066672516,
            "unit": "ns/iter",
            "extra": "iterations: 27676544\ncpu: 26.192757339933607 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 28.875674537023468,
            "unit": "ns/iter",
            "extra": "iterations: 23399012\ncpu: 28.87277685057838 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 26.613603890392714,
            "unit": "ns/iter",
            "extra": "iterations: 26250285\ncpu: 26.611462580310988 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 28.061094166617472,
            "unit": "ns/iter",
            "extra": "iterations: 26838618\ncpu: 28.058932319093127 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 29.06212696465267,
            "unit": "ns/iter",
            "extra": "iterations: 21461438\ncpu: 29.05771901211836 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 47.183001734115074,
            "unit": "ns/iter",
            "extra": "iterations: 19309052\ncpu: 47.179703954393894 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 33.89488290637219,
            "unit": "ns/iter",
            "extra": "iterations: 20843746\ncpu: 33.89120261780175 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 32.73219013271606,
            "unit": "ns/iter",
            "extra": "iterations: 21724446\ncpu: 32.72807007368561 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 33.14584190525578,
            "unit": "ns/iter",
            "extra": "iterations: 20410622\ncpu: 33.14213814748014 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 33.842771490601706,
            "unit": "ns/iter",
            "extra": "iterations: 21137795\ncpu: 33.838685160869424 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 33.825953050991906,
            "unit": "ns/iter",
            "extra": "iterations: 20139767\ncpu: 33.82351061956157 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 29.512905020129406,
            "unit": "ns/iter",
            "extra": "iterations: 21634604\ncpu: 29.509869096748695 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 31.49005490263758,
            "unit": "ns/iter",
            "extra": "iterations: 22981776\ncpu: 31.48693930355946 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 30.49556038645708,
            "unit": "ns/iter",
            "extra": "iterations: 22929248\ncpu: 30.4921671220968 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 35.94478447929057,
            "unit": "ns/iter",
            "extra": "iterations: 21512991\ncpu: 35.94258622615524 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 39.15438596739476,
            "unit": "ns/iter",
            "extra": "iterations: 16988202\ncpu: 39.150683927587615 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 37.0924061362284,
            "unit": "ns/iter",
            "extra": "iterations: 17465312\ncpu: 37.09139830997583 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 34.99586490494593,
            "unit": "ns/iter",
            "extra": "iterations: 19770525\ncpu: 34.99488865369047 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 38.104704206887526,
            "unit": "ns/iter",
            "extra": "iterations: 18965790\ncpu: 38.09692651874755 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 39.12687259186373,
            "unit": "ns/iter",
            "extra": "iterations: 15996812\ncpu: 39.12388981004484 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 40.82329490675748,
            "unit": "ns/iter",
            "extra": "iterations: 18254471\ncpu: 40.819678258548436 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 75.63561444195004,
            "unit": "ns/iter",
            "extra": "iterations: 9978233\ncpu: 75.62529107107433 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 245.0459728105242,
            "unit": "ns/iter",
            "extra": "iterations: 2815425\ncpu: 245.01787190211218 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 990.086474303782,
            "unit": "ns/iter",
            "extra": "iterations: 741862\ncpu: 989.9757919936557 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 4097.401282036036,
            "unit": "ns/iter",
            "extra": "iterations: 170354\ncpu: 4096.554316306096 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 23010.031034485848,
            "unit": "ns/iter",
            "extra": "iterations: 27550\ncpu: 23008.35459165184 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 237624.42836624905,
            "unit": "ns/iter",
            "extra": "iterations: 2785\ncpu: 237600.4833034123 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1250530.9805310871,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1250406.0070796437 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 5588510.54098363,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 5587968.024590175 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 357.0969913731038,
            "unit": "ns/iter",
            "extra": "iterations: 1857093\ncpu: 357.0826646807688 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1403.2247238207417,
            "unit": "ns/iter",
            "extra": "iterations: 509452\ncpu: 1403.090251878491 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 6216.475055533505,
            "unit": "ns/iter",
            "extra": "iterations: 121550\ncpu: 6216.00445084331 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 24165.358398408487,
            "unit": "ns/iter",
            "extra": "iterations: 29071\ncpu: 24163.135839840477 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 102230.86639380842,
            "unit": "ns/iter",
            "extra": "iterations: 6841\ncpu: 102227.15275544488 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 552600.0449999628,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552582.9199999919 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2197346.780645427,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2197049.064516149 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 8348672.4875001535,
            "unit": "ns/iter",
            "extra": "iterations: 80\ncpu: 8347113.724999921 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 791.1619214846442,
            "unit": "ns/iter",
            "extra": "iterations: 899825\ncpu: 791.063124496426 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3262.870521246065,
            "unit": "ns/iter",
            "extra": "iterations: 220932\ncpu: 3262.5917341082713 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 10988.230384103823,
            "unit": "ns/iter",
            "extra": "iterations: 63316\ncpu: 10987.407495735528 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 48361.10490720513,
            "unit": "ns/iter",
            "extra": "iterations: 12125\ncpu: 48359.70424742347 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 193438.1902742354,
            "unit": "ns/iter",
            "extra": "iterations: 3537\ncpu: 193405.08368673877 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 915067.9241830565,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 915008.1856209262 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 3870027.5329669598,
            "unit": "ns/iter",
            "extra": "iterations: 182\ncpu: 3869594.582417585 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 16535024.536584921,
            "unit": "ns/iter",
            "extra": "iterations: 41\ncpu: 16533643.682926945 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 1434.9818073232111,
            "unit": "ns/iter",
            "extra": "iterations: 411924\ncpu: 1434.9155159689524 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 107.8297723112889,
            "unit": "ns/iter",
            "extra": "iterations: 6627030\ncpu: 107.82367455707893 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 13.820019719125122,
            "unit": "ns/iter",
            "extra": "iterations: 51365366\ncpu: 13.818764281753753 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 64.86102919326292,
            "unit": "ns/iter",
            "extra": "iterations: 10964238\ncpu: 64.85721625159886 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.4369672595282111,
            "unit": "ms/iter",
            "extra": "iterations: 1653\ncpu: 0.43690669509982033 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.3313962104029886,
            "unit": "ms/iter",
            "extra": "iterations: 2134\ncpu: 0.33136363964386295 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 221.30633679998937,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 221.28361459999724 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 228.19968640001207,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 227.67190760000062 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 729.9435219816064,
            "unit": "ns/iter",
            "extra": "iterations: 875916\ncpu: 729.8274777490047 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 39044.92038923597,
            "unit": "ns/iter",
            "extra": "iterations: 17573\ncpu: 39040.59073578854 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 13.938810653391783,
            "unit": "ns/iter",
            "extra": "iterations: 50845632\ncpu: 13.93757172690873 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 66.6358797087553,
            "unit": "ns/iter",
            "extra": "iterations: 9933492\ncpu: 66.63453929393683 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeTorsionEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 146.38022664034864,
            "unit": "ns/iter",
            "extra": "iterations: 4657246\ncpu: 146.37522003347328 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 3.2804277042254517,
            "unit": "ms/iter",
            "extra": "iterations: 213\ncpu: 3.280297140845075 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 21.77963803030087,
            "unit": "ms/iter",
            "extra": "iterations: 33\ncpu: 21.777484060606007 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2239.6834147999925,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2239.4472116000006 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2165.490044800026,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2165.318743800003 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::smallMolecule, Population::small>",
            "value": 2.47955827340819,
            "unit": "ms/iter",
            "extra": "iterations: 267\ncpu: 2.4793054119850972 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::smallMolecule, Population::small>",
            "value": 33.70586771194494,
            "unit": "ns/iter",
            "extra": "iterations: 19658736\ncpu: 33.703390797861886 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::smallMolecule, Population::small>",
            "value": 111.72191220815492,
            "unit": "ns/iter",
            "extra": "iterations: 5812819\ncpu: 111.70818582171525 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::smallMolecule, Population::small>",
            "value": 0.40313509273752907,
            "unit": "ms/iter",
            "extra": "iterations: 1790\ncpu: 0.40307772458101604 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 176.5820423999685,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 176.57308080000007 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 178.3632492000379,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 178.35170880000533 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::mediumMolecule, Population::small>",
            "value": 1.2230526927272545,
            "unit": "ms/iter",
            "extra": "iterations: 550\ncpu: 1.2229027018181362 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::mediumMolecule, Population::small>",
            "value": 105.96311210219422,
            "unit": "ns/iter",
            "extra": "iterations: 7101245\ncpu: 105.95188914056422 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::mediumMolecule, Population::small>",
            "value": 33.45604910431832,
            "unit": "ns/iter",
            "extra": "iterations: 20349335\ncpu: 33.451665963531426 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesTorsion<ProblemType::mediumMolecule, Population::small>",
            "value": 467.96902105708796,
            "unit": "ns/iter",
            "extra": "iterations: 1450340\ncpu: 467.9040645641692 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1608.8376691999656,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1608.6955693999982 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::mediumMolecule, Population::small>",
            "value": 35.78098347368627,
            "unit": "ms/iter",
            "extra": "iterations: 19\ncpu: 35.78006236842151 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1639.735216200006,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1639.5862600000044 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tristan.youngs@stfc.ac.uk",
            "name": "Tristan Youngs",
            "username": "trisyoungs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16b629f39bea02b3942f37ff23f5541a8ff783a8",
          "message": "Merge pull request #676 from disorderedmaterials/bragg-part3-more-data\n\nBragg Part 3 - More Data",
          "timestamp": "2021-05-11T14:33:55+01:00",
          "tree_id": "122045fbfa14ccef67d0bd9843b7a5727e05fe32",
          "url": "https://github.com/disorderedmaterials/dissolve/commit/16b629f39bea02b3942f37ff23f5541a8ff783a8"
        },
        "date": 1620741285036,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::SimpleMethod>/iterations:5",
            "value": 17.8747802000089,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 17.874676400000006 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::CellsMethod>/iterations:5",
            "value": 26.780179800016413,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 26.7781548 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::SimpleMethod>/iterations:5",
            "value": 430.7803887999853,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 430.74839440000005 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::CellsMethod>/iterations:5",
            "value": 639.5232452000073,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 639.4839920000001 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::SimpleMethod>/iterations:5",
            "value": 1687.7891212000122,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1687.661724 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::CellsMethod>/iterations:5",
            "value": 2424.2725015999895,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2423.6271468000004 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 8.852706826676673,
            "unit": "ns/iter",
            "extra": "iterations: 77392229\ncpu: 8.852052213149204 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 8.902301747628467,
            "unit": "ns/iter",
            "extra": "iterations: 79797671\ncpu: 8.901967414562739 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 17.809614653914217,
            "unit": "ns/iter",
            "extra": "iterations: 36940196\ncpu: 17.809425889348326 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 18.663260268215215,
            "unit": "ns/iter",
            "extra": "iterations: 38961776\ncpu: 18.65668354029871 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 13.080070579385806,
            "unit": "ns/iter",
            "extra": "iterations: 53866152\ncpu: 13.079105075112805 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 15.353893255934162,
            "unit": "ns/iter",
            "extra": "iterations: 45703674\ncpu: 15.35296943523625 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 12.951302287246337,
            "unit": "ns/iter",
            "extra": "iterations: 55176575\ncpu: 12.950706345944777 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 13.142910759883272,
            "unit": "ns/iter",
            "extra": "iterations: 52446030\ncpu: 13.142376572640536 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 13.030697663074784,
            "unit": "ns/iter",
            "extra": "iterations: 54353486\ncpu: 13.029862334864704 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 13.133281381734806,
            "unit": "ns/iter",
            "extra": "iterations: 52234520\ncpu: 13.133020519763535 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 13.642129181949356,
            "unit": "ns/iter",
            "extra": "iterations: 51092618\ncpu: 13.641046559798468 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 13.458370691254986,
            "unit": "ns/iter",
            "extra": "iterations: 51710359\ncpu: 13.457620377379303 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 13.437898401151523,
            "unit": "ns/iter",
            "extra": "iterations: 51836572\ncpu: 13.436968420674216 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 13.908698360989675,
            "unit": "ns/iter",
            "extra": "iterations: 50618927\ncpu: 13.907434011787803 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 15.225801741206892,
            "unit": "ns/iter",
            "extra": "iterations: 46027103\ncpu: 15.22464348885917 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 17.035352571475205,
            "unit": "ns/iter",
            "extra": "iterations: 40927829\ncpu: 17.033544119821396 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 17.8761279327797,
            "unit": "ns/iter",
            "extra": "iterations: 38683378\ncpu: 17.875696377911844 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 18.33926554002976,
            "unit": "ns/iter",
            "extra": "iterations: 37383222\ncpu: 18.337951581594442 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 27.60123938514802,
            "unit": "ns/iter",
            "extra": "iterations: 26710341\ncpu: 27.598404677798765 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 26.248968355690167,
            "unit": "ns/iter",
            "extra": "iterations: 26771824\ncpu: 26.246750240103182 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 26.248452022303674,
            "unit": "ns/iter",
            "extra": "iterations: 26691922\ncpu: 26.24656171256596 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 26.885869950254857,
            "unit": "ns/iter",
            "extra": "iterations: 25844403\ncpu: 26.884106086722383 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 26.154672829541376,
            "unit": "ns/iter",
            "extra": "iterations: 26848497\ncpu: 26.15325833695656 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 26.197503414830102,
            "unit": "ns/iter",
            "extra": "iterations: 26715852\ncpu: 26.195852784331926 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 26.26871893103427,
            "unit": "ns/iter",
            "extra": "iterations: 26762439\ncpu: 26.267250940768132 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 26.32832121450677,
            "unit": "ns/iter",
            "extra": "iterations: 26666367\ncpu: 26.32589771227545 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 26.353274780414793,
            "unit": "ns/iter",
            "extra": "iterations: 26547154\ncpu: 26.351745652283633 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 26.298730487811827,
            "unit": "ns/iter",
            "extra": "iterations: 26441101\ncpu: 26.296586401602703 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 26.49459836955101,
            "unit": "ns/iter",
            "extra": "iterations: 26564109\ncpu: 26.492742557260105 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 27.638928185488204,
            "unit": "ns/iter",
            "extra": "iterations: 25506876\ncpu: 27.63507381303775 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 30.479190415978664,
            "unit": "ns/iter",
            "extra": "iterations: 23005938\ncpu: 30.476807726770595 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 31.28929147456949,
            "unit": "ns/iter",
            "extra": "iterations: 22218045\ncpu: 31.286573458645748 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 35.491778859552944,
            "unit": "ns/iter",
            "extra": "iterations: 20038035\ncpu: 35.488236097002456 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 49.99401911774437,
            "unit": "ns/iter",
            "extra": "iterations: 13030519\ncpu: 49.989476474421146 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 38.75713035541695,
            "unit": "ns/iter",
            "extra": "iterations: 17966671\ncpu: 38.75528226681495 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 39.20913078148211,
            "unit": "ns/iter",
            "extra": "iterations: 17906441\ncpu: 39.20888645599669 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 39.05398210308283,
            "unit": "ns/iter",
            "extra": "iterations: 17918735\ncpu: 39.0522800856197 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 38.74479872020314,
            "unit": "ns/iter",
            "extra": "iterations: 17908429\ncpu: 38.742753649692155 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 38.78403486524498,
            "unit": "ns/iter",
            "extra": "iterations: 17951856\ncpu: 38.78193201861743 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 38.77559799648701,
            "unit": "ns/iter",
            "extra": "iterations: 17961435\ncpu: 38.772847325394714 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 38.88490745576926,
            "unit": "ns/iter",
            "extra": "iterations: 18063038\ncpu: 38.882846229964414 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 38.64052854648873,
            "unit": "ns/iter",
            "extra": "iterations: 18126769\ncpu: 38.63702510910819 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 38.75638741209708,
            "unit": "ns/iter",
            "extra": "iterations: 18136140\ncpu: 38.75589193731436 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 38.58225408436624,
            "unit": "ns/iter",
            "extra": "iterations: 18034223\ncpu: 38.579770029460285 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 39.46866449078009,
            "unit": "ns/iter",
            "extra": "iterations: 17751012\ncpu: 39.46619094167708 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 41.772715573949824,
            "unit": "ns/iter",
            "extra": "iterations: 16660640\ncpu: 41.769228312958575 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 43.08476524415757,
            "unit": "ns/iter",
            "extra": "iterations: 16217083\ncpu: 43.08102949217177 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 49.545728674146545,
            "unit": "ns/iter",
            "extra": "iterations: 12670890\ncpu: 49.53946257918789 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 60.046765416813194,
            "unit": "ns/iter",
            "extra": "iterations: 10181049\ncpu: 60.04138375132059 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 110.89237739450559,
            "unit": "ns/iter",
            "extra": "iterations: 6327797\ncpu: 110.88811524769166 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 414.8639824385961,
            "unit": "ns/iter",
            "extra": "iterations: 1676857\ncpu: 414.84114507080716 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 1637.4259320078688,
            "unit": "ns/iter",
            "extra": "iterations: 423253\ncpu: 1637.238542904594 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 6558.966002453987,
            "unit": "ns/iter",
            "extra": "iterations: 107596\ncpu: 6558.919811145307 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 26292.42525540822,
            "unit": "ns/iter",
            "extra": "iterations: 26624\ncpu: 26291.245868389084 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 138202.0996829154,
            "unit": "ns/iter",
            "extra": "iterations: 5046\ncpu: 138198.86563614634 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1108307.433811928,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1108230.8181818034 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 7177158.619999772,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7176492.920000044 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 442.86158042182467,
            "unit": "ns/iter",
            "extra": "iterations: 1580983\ncpu: 442.8181251790829 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1742.6925545331012,
            "unit": "ns/iter",
            "extra": "iterations: 402003\ncpu: 1742.5767494272206 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 7249.478307484886,
            "unit": "ns/iter",
            "extra": "iterations: 96070\ncpu: 7249.1108046216395 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 29246.141885973047,
            "unit": "ns/iter",
            "extra": "iterations: 23977\ncpu: 29245.15498185748 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 118464.00253892133,
            "unit": "ns/iter",
            "extra": "iterations: 5908\ncpu: 118459.61882193573 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 477526.9794801888,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 477436.77633379365 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2438752.36619683,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 2438517.475352127 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 10201954.507462023,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 10200665.761193952 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 883.6612902414015,
            "unit": "ns/iter",
            "extra": "iterations: 795448\ncpu: 883.6086343796168 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3630.18699652373,
            "unit": "ns/iter",
            "extra": "iterations: 193902\ncpu: 3629.9477055419147 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 12279.944082793429,
            "unit": "ns/iter",
            "extra": "iterations: 57299\ncpu: 12279.183249271382 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 56675.71195345033,
            "unit": "ns/iter",
            "extra": "iterations: 12373\ncpu: 56672.2676796247 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 231491.53200006366,
            "unit": "ns/iter",
            "extra": "iterations: 3000\ncpu: 231470.8720000027 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 893525.9885639647,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 893509.2299873065 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 4517813.352564214,
            "unit": "ns/iter",
            "extra": "iterations: 156\ncpu: 4517415.211538469 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 18881284.805552747,
            "unit": "ns/iter",
            "extra": "iterations: 36\ncpu: 18879996.02777768 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 1753.7839480352554,
            "unit": "ns/iter",
            "extra": "iterations: 394419\ncpu: 1753.74973061645 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 144.65267085404707,
            "unit": "ns/iter",
            "extra": "iterations: 4783264\ncpu: 144.6462739668986 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 19.41903127000736,
            "unit": "ns/iter",
            "extra": "iterations: 35908912\ncpu: 19.41863253890809 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 76.01535686052951,
            "unit": "ns/iter",
            "extra": "iterations: 9101665\ncpu: 76.01177531803262 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.3621889756097373,
            "unit": "ms/iter",
            "extra": "iterations: 1927\ncpu: 0.3621756777374157 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.3860718753461838,
            "unit": "ms/iter",
            "extra": "iterations: 1805\ncpu: 0.3860344459833788 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 255.6962117999774,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 255.68247559999972 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 255.18792500001837,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 255.17268520000016 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 803.7820977100913,
            "unit": "ns/iter",
            "extra": "iterations: 860996\ncpu: 803.7435377167762 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 53000.38997444613,
            "unit": "ns/iter",
            "extra": "iterations: 13306\ncpu: 52995.63144446083 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 19.348121231318824,
            "unit": "ns/iter",
            "extra": "iterations: 34286685\ncpu: 19.34776269563536 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 75.83397645752959,
            "unit": "ns/iter",
            "extra": "iterations: 9230980\ncpu: 75.83086736186148 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeTorsionEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 171.82401403245225,
            "unit": "ns/iter",
            "extra": "iterations: 4058602\ncpu: 171.8118379185758 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 3.1230598883920737,
            "unit": "ms/iter",
            "extra": "iterations: 224\ncpu: 3.1227023258928455 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 24.84748092857509,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 24.845579142857485 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2503.346906200022,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2503.1530241999976 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2535.5766545999813,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2534.9573002 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::smallMolecule, Population::small>",
            "value": 2.7987249087302537,
            "unit": "ms/iter",
            "extra": "iterations: 252\ncpu: 2.7983167182540116 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::smallMolecule, Population::small>",
            "value": 42.04770281639067,
            "unit": "ns/iter",
            "extra": "iterations: 16583633\ncpu: 42.04546464577447 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::smallMolecule, Population::small>",
            "value": 122.79021695704178,
            "unit": "ns/iter",
            "extra": "iterations: 5849591\ncpu: 122.78149327021447 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::smallMolecule, Population::small>",
            "value": 0.4353307882715741,
            "unit": "ms/iter",
            "extra": "iterations: 1620\ncpu: 0.43532022222222727 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 212.59429659999114,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 212.58022859999528 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 213.89857340000162,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 213.88562000000206 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::mediumMolecule, Population::small>",
            "value": 1.3186543532708903,
            "unit": "ms/iter",
            "extra": "iterations: 535\ncpu: 1.3185464654205805 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::mediumMolecule, Population::small>",
            "value": 121.81933581139056,
            "unit": "ns/iter",
            "extra": "iterations: 5731324\ncpu: 121.81571082004973 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::mediumMolecule, Population::small>",
            "value": 41.68401312618543,
            "unit": "ns/iter",
            "extra": "iterations: 16759174\ncpu: 41.68137087185756 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesTorsion<ProblemType::mediumMolecule, Population::small>",
            "value": 596.1267127262324,
            "unit": "ns/iter",
            "extra": "iterations: 1162693\ncpu: 596.0557447236606 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1935.8437551999941,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1935.6967372000042 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::mediumMolecule, Population::small>",
            "value": 46.336275266655015,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 46.33127926666513 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1985.0709659999666,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1984.9186327999973 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56431339+StephenSmith25@users.noreply.github.com",
            "name": "StephenSmith25",
            "username": "StephenSmith25"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc0ce5d046b7bfeb6492fdde1236894a899cb434",
          "message": "Merge pull request #681 from StephenSmith25/apply_clang_tidy\n\nApply clang tidy",
          "timestamp": "2021-05-11T16:47:00+01:00",
          "tree_id": "850f2ac3c1574de5767b11ac6a0b3315fb101ecd",
          "url": "https://github.com/disorderedmaterials/dissolve/commit/dc0ce5d046b7bfeb6492fdde1236894a899cb434"
        },
        "date": 1620749399078,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::SimpleMethod>/iterations:5",
            "value": 16.82426900001701,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 16.824148 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::CellsMethod>/iterations:5",
            "value": 20.40112559998306,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 20.395492400000002 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::SimpleMethod>/iterations:5",
            "value": 410.4670113999873,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 410.4021960000001 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::CellsMethod>/iterations:5",
            "value": 488.39195359996666,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 488.34600679999994 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::SimpleMethod>/iterations:5",
            "value": 1650.8204665999983,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1650.6205192000002 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::CellsMethod>/iterations:5",
            "value": 1826.5535464000095,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1825.7413413999998 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 8.902462699281626,
            "unit": "ns/iter",
            "extra": "iterations: 78755860\ncpu: 8.901611892753127 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 8.94324806809943,
            "unit": "ns/iter",
            "extra": "iterations: 79072480\ncpu: 8.942834852277322 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 18.495819079084093,
            "unit": "ns/iter",
            "extra": "iterations: 33205005\ncpu: 18.49426088024986 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 20.6155389878985,
            "unit": "ns/iter",
            "extra": "iterations: 35352547\ncpu: 20.608924839276714 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 13.448971868933636,
            "unit": "ns/iter",
            "extra": "iterations: 52182452\ncpu: 13.448085958091786 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 13.612737110603565,
            "unit": "ns/iter",
            "extra": "iterations: 50784422\ncpu: 13.611262682087803 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 13.794002148584378,
            "unit": "ns/iter",
            "extra": "iterations: 51659966\ncpu: 13.793777196833611 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 14.139353977684323,
            "unit": "ns/iter",
            "extra": "iterations: 50885982\ncpu: 14.137736950816702 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 13.939059915444663,
            "unit": "ns/iter",
            "extra": "iterations: 52191050\ncpu: 13.938391524983595 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 13.897265996761252,
            "unit": "ns/iter",
            "extra": "iterations: 50195844\ncpu: 13.896548367629798 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 14.008276359894671,
            "unit": "ns/iter",
            "extra": "iterations: 51426594\ncpu: 14.005888237513929 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 14.358473342189006,
            "unit": "ns/iter",
            "extra": "iterations: 51305564\ncpu: 14.35727031477526 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 15.601777876268331,
            "unit": "ns/iter",
            "extra": "iterations: 45290216\ncpu: 15.59993964259295 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 16.50333249891829,
            "unit": "ns/iter",
            "extra": "iterations: 42001514\ncpu: 16.502617334222627 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 17.44215126432228,
            "unit": "ns/iter",
            "extra": "iterations: 40462587\ncpu: 17.440959373161153 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 17.681939787643884,
            "unit": "ns/iter",
            "extra": "iterations: 39340595\ncpu: 17.680798777954447 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 17.67232150273741,
            "unit": "ns/iter",
            "extra": "iterations: 38922319\ncpu: 17.670050517801783 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 18.93476845458189,
            "unit": "ns/iter",
            "extra": "iterations: 35204087\ncpu: 18.933422417686913 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 34.51820142489753,
            "unit": "ns/iter",
            "extra": "iterations: 18220112\ncpu: 34.51446763883776 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 26.930679357039697,
            "unit": "ns/iter",
            "extra": "iterations: 26788182\ncpu: 26.929404653141454 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 24.571548534909585,
            "unit": "ns/iter",
            "extra": "iterations: 27266631\ncpu: 24.569536368464558 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 26.943652997323397,
            "unit": "ns/iter",
            "extra": "iterations: 27205369\ncpu: 26.94301955617642 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 25.605855814811374,
            "unit": "ns/iter",
            "extra": "iterations: 27053417\ncpu: 25.604047429572425 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 27.036904680562625,
            "unit": "ns/iter",
            "extra": "iterations: 26461088\ncpu: 27.036171150634495 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 26.465470698611902,
            "unit": "ns/iter",
            "extra": "iterations: 27307474\ncpu: 26.462907737273678 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 26.256393877338322,
            "unit": "ns/iter",
            "extra": "iterations: 25118053\ncpu: 26.256203416721977 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 26.096200021278616,
            "unit": "ns/iter",
            "extra": "iterations: 27124994\ncpu: 26.093254582839634 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 28.249824244902086,
            "unit": "ns/iter",
            "extra": "iterations: 24320774\ncpu: 28.249084177995528 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 29.150804648127327,
            "unit": "ns/iter",
            "extra": "iterations: 24110477\ncpu: 29.14790711108687 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 32.994762757369315,
            "unit": "ns/iter",
            "extra": "iterations: 21675910\ncpu: 32.99236959371008 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 31.774115663796874,
            "unit": "ns/iter",
            "extra": "iterations: 22759896\ncpu: 31.770421798061033 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 34.170656263742956,
            "unit": "ns/iter",
            "extra": "iterations: 19753415\ncpu: 34.16711419265959 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 35.353004580102876,
            "unit": "ns/iter",
            "extra": "iterations: 20029471\ncpu: 35.35128691117193 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 46.54979436904727,
            "unit": "ns/iter",
            "extra": "iterations: 13310009\ncpu: 46.545542906845135 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 36.68541960615588,
            "unit": "ns/iter",
            "extra": "iterations: 19077187\ncpu: 36.68352755571337 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 38.51596739706076,
            "unit": "ns/iter",
            "extra": "iterations: 18611205\ncpu: 38.51239288374947 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 37.73301980160554,
            "unit": "ns/iter",
            "extra": "iterations: 18462991\ncpu: 37.73146414901051 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 39.10531850141575,
            "unit": "ns/iter",
            "extra": "iterations: 18748928\ncpu: 39.09953641082853 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 38.77569584770565,
            "unit": "ns/iter",
            "extra": "iterations: 18679195\ncpu: 38.77094141369587 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 37.459833588802184,
            "unit": "ns/iter",
            "extra": "iterations: 18376648\ncpu: 37.456399175736436 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 38.73272126516764,
            "unit": "ns/iter",
            "extra": "iterations: 18297853\ncpu: 38.730889192300225 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 39.18084196058435,
            "unit": "ns/iter",
            "extra": "iterations: 17341263\ncpu: 39.17878432499388 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 40.241226634818695,
            "unit": "ns/iter",
            "extra": "iterations: 17252274\ncpu: 40.2384592894823 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 44.70293241698219,
            "unit": "ns/iter",
            "extra": "iterations: 15853066\ncpu: 44.70206053516721 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 46.364475146057615,
            "unit": "ns/iter",
            "extra": "iterations: 15259131\ncpu: 46.35683493378494 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 43.16716351564891,
            "unit": "ns/iter",
            "extra": "iterations: 16026667\ncpu: 43.16195382358676 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 48.912378418924405,
            "unit": "ns/iter",
            "extra": "iterations: 13291132\ncpu: 48.90525569981527 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 54.88783818076136,
            "unit": "ns/iter",
            "extra": "iterations: 12881683\ncpu: 54.88709534305361 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 67.966222171342,
            "unit": "ns/iter",
            "extra": "iterations: 10813987\ncpu: 67.9557110619789 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 77.89809952946267,
            "unit": "ns/iter",
            "extra": "iterations: 9005454\ncpu: 77.89578770820418 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 280.8246080973264,
            "unit": "ns/iter",
            "extra": "iterations: 2486523\ncpu: 280.79989728628766 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 1093.9508499444823,
            "unit": "ns/iter",
            "extra": "iterations: 632512\ncpu: 1093.9383632247395 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 4713.421930830736,
            "unit": "ns/iter",
            "extra": "iterations: 148330\ncpu: 4713.0174138744505 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 29944.476504453884,
            "unit": "ns/iter",
            "extra": "iterations: 22749\ncpu: 29943.164842410624 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 240558.99130433679,
            "unit": "ns/iter",
            "extra": "iterations: 2990\ncpu: 240528.798996657 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1238447.764397828,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1238367.7417103124 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 6134825.990826241,
            "unit": "ns/iter",
            "extra": "iterations: 109\ncpu: 6130660.926605497 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 472.6262925603539,
            "unit": "ns/iter",
            "extra": "iterations: 1484070\ncpu: 472.5703336095991 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1928.6140026874618,
            "unit": "ns/iter",
            "extra": "iterations: 381741\ncpu: 1928.4746228463964 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 8147.477570312627,
            "unit": "ns/iter",
            "extra": "iterations: 89279\ncpu: 8146.883802462016 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 31449.18641411592,
            "unit": "ns/iter",
            "extra": "iterations: 22332\ncpu: 31444.688608274806 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 124585.01332132924,
            "unit": "ns/iter",
            "extra": "iterations: 5555\ncpu: 124573.4738073811 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 536930.0558375417,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 536860.2799129847 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2212459.4379085787,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 2212306.3888889276 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 9056895.594200624,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 9056179.217391236 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 940.5720154004758,
            "unit": "ns/iter",
            "extra": "iterations: 760747\ncpu: 940.4630632785882 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3803.6765012369387,
            "unit": "ns/iter",
            "extra": "iterations: 190010\ncpu: 3803.2551655176444 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 12787.465370010616,
            "unit": "ns/iter",
            "extra": "iterations: 56093\ncpu: 12786.642789652768 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 61704.819187249144,
            "unit": "ns/iter",
            "extra": "iterations: 11935\ncpu: 61697.109677419656 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 241073.00503233323,
            "unit": "ns/iter",
            "extra": "iterations: 2782\ncpu: 241063.85406182517 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 975043.8486112973,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 974928.2444444458 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 4031142.6988637326,
            "unit": "ns/iter",
            "extra": "iterations: 176\ncpu: 4030924.414772728 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 17067623.474997617,
            "unit": "ns/iter",
            "extra": "iterations: 40\ncpu: 17066807.02500023 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 1732.7380489387465,
            "unit": "ns/iter",
            "extra": "iterations: 422201\ncpu: 1732.5234994706304 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 137.11067197855172,
            "unit": "ns/iter",
            "extra": "iterations: 5107038\ncpu: 137.1009254287909 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 18.595089486808476,
            "unit": "ns/iter",
            "extra": "iterations: 37231913\ncpu: 18.592341548499128 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 76.99872402525048,
            "unit": "ns/iter",
            "extra": "iterations: 8154550\ncpu: 76.99478794047556 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.4493283198197971,
            "unit": "ms/iter",
            "extra": "iterations: 1554\ncpu: 0.449285930501928 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.39766058199536014,
            "unit": "ms/iter",
            "extra": "iterations: 1744\ncpu: 0.39763010665138293 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 235.18586259997392,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 235.16618319999907 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 239.5028037999964,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 239.4857938000001 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 758.5206521111668,
            "unit": "ns/iter",
            "extra": "iterations: 1004982\ncpu: 758.4374217647771 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 44167.61857151689,
            "unit": "ns/iter",
            "extra": "iterations: 16003\ncpu: 44164.521527214405 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 17.25284078802748,
            "unit": "ns/iter",
            "extra": "iterations: 41886529\ncpu: 17.252645331390543 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 80.87857726509178,
            "unit": "ns/iter",
            "extra": "iterations: 8549618\ncpu: 80.8711754139177 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeTorsionEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 189.43574325945042,
            "unit": "ns/iter",
            "extra": "iterations: 3805663\ncpu: 189.36720592443473 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 3.186228977168966,
            "unit": "ms/iter",
            "extra": "iterations: 219\ncpu: 3.186003278538843 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 24.53236889654959,
            "unit": "ms/iter",
            "extra": "iterations: 29\ncpu: 24.530782275861945 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2336.5590427999905,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2332.4538727999993 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2346.3949021999724,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2345.1312605999988 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::smallMolecule, Population::small>",
            "value": 3.0034268577405423,
            "unit": "ms/iter",
            "extra": "iterations: 239\ncpu: 3.0026136569037605 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::smallMolecule, Population::small>",
            "value": 43.399420230715016,
            "unit": "ns/iter",
            "extra": "iterations: 15516172\ncpu: 43.39622221254114 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::smallMolecule, Population::small>",
            "value": 145.99019827412684,
            "unit": "ns/iter",
            "extra": "iterations: 4965146\ncpu: 145.98284703007621 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::smallMolecule, Population::small>",
            "value": 0.4643816651525063,
            "unit": "ms/iter",
            "extra": "iterations: 1541\ncpu: 0.46436086632057566 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 221.03349160001926,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 221.00519840000175 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 207.7319376000105,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 207.72093420000033 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::mediumMolecule, Population::small>",
            "value": 1.3694763606868938,
            "unit": "ms/iter",
            "extra": "iterations: 524\ncpu: 1.3693987786259623 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::mediumMolecule, Population::small>",
            "value": 147.1889600175002,
            "unit": "ns/iter",
            "extra": "iterations: 4279572\ncpu: 147.18526081580126 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::mediumMolecule, Population::small>",
            "value": 46.651600328454236,
            "unit": "ns/iter",
            "extra": "iterations: 14805898\ncpu: 46.647526006190155 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesTorsion<ProblemType::mediumMolecule, Population::small>",
            "value": 583.2529761755858,
            "unit": "ns/iter",
            "extra": "iterations: 1195326\ncpu: 583.1865440892246 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1778.5639285999878,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1778.434533799998 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::mediumMolecule, Population::small>",
            "value": 47.93090373332234,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 47.928172733332985 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1840.0567449999926,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1839.960862800001 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56431339+StephenSmith25@users.noreply.github.com",
            "name": "StephenSmith25",
            "username": "StephenSmith25"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90aa0cc5b794f28f437a7153f95ea7a4ad91dfb4",
          "message": "Merge pull request #679 from StephenSmith25/clean_up_GR_cells_impl\n\nSmall bug fix in parallel computations + Clean up parallel GR implementation",
          "timestamp": "2021-05-11T18:20:23+01:00",
          "tree_id": "4ded5c97dd6b0d7834bdd78efc0ed79f5d0435ab",
          "url": "https://github.com/disorderedmaterials/dissolve/commit/90aa0cc5b794f28f437a7153f95ea7a4ad91dfb4"
        },
        "date": 1620755039186,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::SimpleMethod>/iterations:5",
            "value": 18.077446600000258,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 18.068982 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::CellsMethod>/iterations:5",
            "value": 16.429629599997497,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 16.415860400000003 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::SimpleMethod>/iterations:5",
            "value": 412.10602179999114,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 412.0362177999999 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::CellsMethod>/iterations:5",
            "value": 773.3111680000093,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 773.212474 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::SimpleMethod>/iterations:5",
            "value": 1638.9488778000214,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1638.244746 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::CellsMethod>/iterations:5",
            "value": 3989.258792400005,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 3988.916242400001 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 8.891037546592191,
            "unit": "ns/iter",
            "extra": "iterations: 76937181\ncpu: 8.890095076397403 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 8.690725860272302,
            "unit": "ns/iter",
            "extra": "iterations: 80365481\ncpu: 8.68971506560133 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 20.2063474673181,
            "unit": "ns/iter",
            "extra": "iterations: 37002916\ncpu: 20.205114645559206 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 17.9443619775255,
            "unit": "ns/iter",
            "extra": "iterations: 40094865\ncpu: 17.942129247722793 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 13.292620575962813,
            "unit": "ns/iter",
            "extra": "iterations: 53719599\ncpu: 13.292015806000283 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 15.470315658396755,
            "unit": "ns/iter",
            "extra": "iterations: 45597710\ncpu: 15.469061275226368 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 13.389890597259077,
            "unit": "ns/iter",
            "extra": "iterations: 52426658\ncpu: 13.389178593073868 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 13.230427847313159,
            "unit": "ns/iter",
            "extra": "iterations: 53098873\ncpu: 13.229496283282682 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 13.256036098529693,
            "unit": "ns/iter",
            "extra": "iterations: 51062909\ncpu: 13.255033257114247 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 13.560862611947178,
            "unit": "ns/iter",
            "extra": "iterations: 52934115\ncpu: 13.555326446848156 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 13.756247648921565,
            "unit": "ns/iter",
            "extra": "iterations: 50819797\ncpu: 13.754255610269437 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 13.724009148629566,
            "unit": "ns/iter",
            "extra": "iterations: 50950149\ncpu: 13.722316592243834 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 14.91205256963581,
            "unit": "ns/iter",
            "extra": "iterations: 45528789\ncpu: 14.910364846295392 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 17.19473341873248,
            "unit": "ns/iter",
            "extra": "iterations: 41248960\ncpu: 17.194227151423874 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 18.395455793711676,
            "unit": "ns/iter",
            "extra": "iterations: 37408601\ncpu: 18.39352580974629 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 17.92406181583701,
            "unit": "ns/iter",
            "extra": "iterations: 38613341\ncpu: 17.92307516202745 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 18.366353019474335,
            "unit": "ns/iter",
            "extra": "iterations: 36384406\ncpu: 18.36475274599775 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 26.484271952459824,
            "unit": "ns/iter",
            "extra": "iterations: 28096558\ncpu: 26.481389108231777 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 35.218228831797504,
            "unit": "ns/iter",
            "extra": "iterations: 21110327\ncpu: 35.21381198879583 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 26.434123341570633,
            "unit": "ns/iter",
            "extra": "iterations: 25528215\ncpu: 26.43208434275556 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 26.012021715105906,
            "unit": "ns/iter",
            "extra": "iterations: 26638961\ncpu: 26.009329305298493 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 26.334233815383584,
            "unit": "ns/iter",
            "extra": "iterations: 25141349\ncpu: 26.33319305976775 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 27.009422790909287,
            "unit": "ns/iter",
            "extra": "iterations: 25655244\ncpu: 27.005301801066405 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 26.48598397689846,
            "unit": "ns/iter",
            "extra": "iterations: 26873065\ncpu: 26.484326406384856 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 26.053055851103732,
            "unit": "ns/iter",
            "extra": "iterations: 26477419\ncpu: 26.04527669407659 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 27.13116935034083,
            "unit": "ns/iter",
            "extra": "iterations: 26538471\ncpu: 27.12980744067734 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 26.988257359869802,
            "unit": "ns/iter",
            "extra": "iterations: 26756930\ncpu: 26.985294800263066 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 27.61070210324234,
            "unit": "ns/iter",
            "extra": "iterations: 25257596\ncpu: 27.60724646953719 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 29.57473774679424,
            "unit": "ns/iter",
            "extra": "iterations: 23542896\ncpu: 29.571431271667056 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 31.93504728005945,
            "unit": "ns/iter",
            "extra": "iterations: 21735487\ncpu: 31.9328814670684 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 31.350447349451024,
            "unit": "ns/iter",
            "extra": "iterations: 21337793\ncpu: 31.346096571467886 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 34.83593429301333,
            "unit": "ns/iter",
            "extra": "iterations: 20114819\ncpu: 34.833754705921116 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 45.818919091073184,
            "unit": "ns/iter",
            "extra": "iterations: 12842784\ncpu: 45.811062383358745 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 61.813092361642184,
            "unit": "ns/iter",
            "extra": "iterations: 11536238\ncpu: 61.809448019362634 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 38.61614290783397,
            "unit": "ns/iter",
            "extra": "iterations: 18419928\ncpu: 38.56491523745396 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 38.23333788027825,
            "unit": "ns/iter",
            "extra": "iterations: 17726196\ncpu: 38.22986099217285 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 37.11666395851405,
            "unit": "ns/iter",
            "extra": "iterations: 18641267\ncpu: 37.11172861801774 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 38.515637938924534,
            "unit": "ns/iter",
            "extra": "iterations: 18293875\ncpu: 38.51257724238303 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 38.782036306563406,
            "unit": "ns/iter",
            "extra": "iterations: 18210097\ncpu: 38.780330110268345 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 37.699824671779524,
            "unit": "ns/iter",
            "extra": "iterations: 18210987\ncpu: 37.69626802764753 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 38.48323643365356,
            "unit": "ns/iter",
            "extra": "iterations: 18037212\ncpu: 38.480953431162035 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 37.98044787314582,
            "unit": "ns/iter",
            "extra": "iterations: 18352786\ncpu: 37.976451095762755 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 39.25848543885283,
            "unit": "ns/iter",
            "extra": "iterations: 18136039\ncpu: 39.25526433859129 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 42.548091810712506,
            "unit": "ns/iter",
            "extra": "iterations: 16652960\ncpu: 42.54631476926633 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 43.62871315344023,
            "unit": "ns/iter",
            "extra": "iterations: 16141334\ncpu: 43.62688226388199 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 43.66778660155231,
            "unit": "ns/iter",
            "extra": "iterations: 15405360\ncpu: 43.664293531602 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 52.81301633222129,
            "unit": "ns/iter",
            "extra": "iterations: 13350658\ncpu: 52.80827199678122 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 60.007096624068865,
            "unit": "ns/iter",
            "extra": "iterations: 10950418\ncpu: 60.00255031360463 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 75.58256708217908,
            "unit": "ns/iter",
            "extra": "iterations: 9317006\ncpu: 75.57823113991749 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 77.86721805353464,
            "unit": "ns/iter",
            "extra": "iterations: 9149414\ncpu: 77.8627020265983 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 287.1807265552452,
            "unit": "ns/iter",
            "extra": "iterations: 2449972\ncpu: 287.1467131052945 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 1123.8598921141206,
            "unit": "ns/iter",
            "extra": "iterations: 640121\ncpu: 1123.7153319450547 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 4856.923610043792,
            "unit": "ns/iter",
            "extra": "iterations: 136641\ncpu: 4856.688439048306 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 27958.5558239034,
            "unit": "ns/iter",
            "extra": "iterations: 25258\ncpu: 27955.71886135114 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 274241.2321857801,
            "unit": "ns/iter",
            "extra": "iterations: 2498\ncpu: 274224.22978382854 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1450543.6316832658,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1450180.8059405915 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 9782443.309859445,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 9781692.309859304 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 451.7911667781852,
            "unit": "ns/iter",
            "extra": "iterations: 1567016\ncpu: 451.771295889769 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1824.6353607870542,
            "unit": "ns/iter",
            "extra": "iterations: 383453\ncpu: 1824.49258448883 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 7352.189097261975,
            "unit": "ns/iter",
            "extra": "iterations: 97315\ncpu: 7351.48678004419 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 29689.77192394315,
            "unit": "ns/iter",
            "extra": "iterations: 23878\ncpu: 29687.72037021527 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 118603.62079307581,
            "unit": "ns/iter",
            "extra": "iterations: 6002\ncpu: 118593.76707763852 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 592231.9087102714,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 592185.7989949774 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2368644.4206901044,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 2368214.2103448035 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 11186696.296878295,
            "unit": "ns/iter",
            "extra": "iterations: 64\ncpu: 11185888.48437496 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 975.0039181506255,
            "unit": "ns/iter",
            "extra": "iterations: 713602\ncpu: 974.892787576271 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3938.099089206858,
            "unit": "ns/iter",
            "extra": "iterations: 176659\ncpu: 3937.8669866805694 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 13187.546899090388,
            "unit": "ns/iter",
            "extra": "iterations: 53178\ncpu: 13186.821373500268 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 62055.935944890974,
            "unit": "ns/iter",
            "extra": "iterations: 11615\ncpu: 62052.841756350244 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 252531.25713211932,
            "unit": "ns/iter",
            "extra": "iterations: 2664\ncpu: 252485.23686186344 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 1060298.4901367242,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1060207.8770864937 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 4442504.389937667,
            "unit": "ns/iter",
            "extra": "iterations: 159\ncpu: 4442208.018867938 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 19707521.39999864,
            "unit": "ns/iter",
            "extra": "iterations: 35\ncpu: 19705893.51428568 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 1814.6979447695999,
            "unit": "ns/iter",
            "extra": "iterations: 389932\ncpu: 1814.5886795646554 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 166.17456156690824,
            "unit": "ns/iter",
            "extra": "iterations: 4347870\ncpu: 166.15726045166676 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 18.172837498670944,
            "unit": "ns/iter",
            "extra": "iterations: 38183965\ncpu: 18.17118824616574 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 77.58062756440002,
            "unit": "ns/iter",
            "extra": "iterations: 8861529\ncpu: 77.57084234560472 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.48649792592590935,
            "unit": "ms/iter",
            "extra": "iterations: 1458\ncpu: 0.48644570164609263 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.42156947857564264,
            "unit": "ms/iter",
            "extra": "iterations: 1657\ncpu: 0.4215424248642101 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 261.32227879998027,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 261.2958931999998 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 262.33568459997514,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 262.31946180000136 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 788.3741683892661,
            "unit": "ns/iter",
            "extra": "iterations: 893146\ncpu: 788.261982923287 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 48943.26428425919,
            "unit": "ns/iter",
            "extra": "iterations: 14719\ncpu: 48940.43725796565 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 18.064021128700524,
            "unit": "ns/iter",
            "extra": "iterations: 39607924\ncpu: 18.063348788489527 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 75.97345762337343,
            "unit": "ns/iter",
            "extra": "iterations: 9476544\ncpu: 75.96385201187175 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeTorsionEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 191.79926229649624,
            "unit": "ns/iter",
            "extra": "iterations: 3820234\ncpu: 191.77287045767252 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 3.628625326530023,
            "unit": "ms/iter",
            "extra": "iterations: 196\ncpu: 3.6282564948980474 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 26.353993346149835,
            "unit": "ms/iter",
            "extra": "iterations: 26\ncpu: 26.35113096153838 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2568.1169110000155,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2567.896960400003 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2588.179912800024,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2587.9637167999986 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::smallMolecule, Population::small>",
            "value": 2.8297451480002564,
            "unit": "ms/iter",
            "extra": "iterations: 250\ncpu: 2.829339848000018 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::smallMolecule, Population::small>",
            "value": 38.596660983101444,
            "unit": "ns/iter",
            "extra": "iterations: 17738874\ncpu: 38.594417886952286 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::smallMolecule, Population::small>",
            "value": 125.78274232992747,
            "unit": "ns/iter",
            "extra": "iterations: 5669595\ncpu: 125.7391048214201 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::smallMolecule, Population::small>",
            "value": 0.4703615439999946,
            "unit": "ms/iter",
            "extra": "iterations: 1500\ncpu: 0.470306407999999 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 214.19579919997886,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 214.183491 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 218.38334079998276,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 218.3631691999949 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::mediumMolecule, Population::small>",
            "value": 1.3844290059996638,
            "unit": "ms/iter",
            "extra": "iterations: 500\ncpu: 1.3843139940000242 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::mediumMolecule, Population::small>",
            "value": 124.56298567926916,
            "unit": "ns/iter",
            "extra": "iterations: 5642870\ncpu: 124.55439891402985 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::mediumMolecule, Population::small>",
            "value": 38.72193432840062,
            "unit": "ns/iter",
            "extra": "iterations: 16850541\ncpu: 38.716941135598454 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesTorsion<ProblemType::mediumMolecule, Population::small>",
            "value": 590.7157506469774,
            "unit": "ns/iter",
            "extra": "iterations: 1183672\ncpu: 590.6806809656744 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1974.6343574000093,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1974.4530230000012 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::mediumMolecule, Population::small>",
            "value": 48.17132873333018,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 48.16488073333289 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2020.9105716000067,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2020.7368922 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tristan.youngs@stfc.ac.uk",
            "name": "Tristan Youngs",
            "username": "trisyoungs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed5f4ad7acb46b72d3bd4f1e081617cb7bf274b4",
          "message": "Merge pull request #657 from disorderedmaterials/remove-array-1\n\nRemove Array 1",
          "timestamp": "2021-05-12T13:48:14+01:00",
          "tree_id": "5a53ffa2597f0410f89dcfda7462b9bf038f4765",
          "url": "https://github.com/disorderedmaterials/dissolve/commit/ed5f4ad7acb46b72d3bd4f1e081617cb7bf274b4"
        },
        "date": 1620825037302,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::SimpleMethod>/iterations:5",
            "value": 16.46843160001481,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 16.4599984 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::CellsMethod>/iterations:5",
            "value": 15.579145400033667,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 15.579063000000005 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::SimpleMethod>/iterations:5",
            "value": 398.4183777999988,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 398.383821 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::CellsMethod>/iterations:5",
            "value": 756.0632327999883,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 756.0176596 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::SimpleMethod>/iterations:5",
            "value": 1576.6410184000051,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1576.5486778 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::CellsMethod>/iterations:5",
            "value": 3795.4572148000357,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 3795.2422346 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 8.625295987912562,
            "unit": "ns/iter",
            "extra": "iterations: 80882526\ncpu: 8.624667112894068 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 8.454079074086522,
            "unit": "ns/iter",
            "extra": "iterations: 82352390\ncpu: 8.453759909093076 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 17.254777754006422,
            "unit": "ns/iter",
            "extra": "iterations: 36217750\ncpu: 17.25435014599186 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 17.377592988613078,
            "unit": "ns/iter",
            "extra": "iterations: 38398115\ncpu: 17.37711132434483 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 13.264108690959322,
            "unit": "ns/iter",
            "extra": "iterations: 54126159\ncpu: 13.26371677325192 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 13.060727031815928,
            "unit": "ns/iter",
            "extra": "iterations: 53705490\ncpu: 13.059300957872264 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 13.025545219391374,
            "unit": "ns/iter",
            "extra": "iterations: 53716587\ncpu: 13.02449195068927 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 13.604188229788686,
            "unit": "ns/iter",
            "extra": "iterations: 51976279\ncpu: 13.603478790776906 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 13.029241663357967,
            "unit": "ns/iter",
            "extra": "iterations: 54041830\ncpu: 13.028829371618155 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 13.210981259597308,
            "unit": "ns/iter",
            "extra": "iterations: 52794490\ncpu: 13.210199189347136 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 13.292378307208821,
            "unit": "ns/iter",
            "extra": "iterations: 53522808\ncpu: 13.29143112222365 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 13.246585852961388,
            "unit": "ns/iter",
            "extra": "iterations: 53656740\ncpu: 13.246202080111475 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 14.91444557884352,
            "unit": "ns/iter",
            "extra": "iterations: 46710970\ncpu: 14.913315587323458 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 15.958337412836299,
            "unit": "ns/iter",
            "extra": "iterations: 42672698\ncpu: 15.95730668353802 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 17.152534801663297,
            "unit": "ns/iter",
            "extra": "iterations: 40832603\ncpu: 17.150137697564926 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 16.396519168924304,
            "unit": "ns/iter",
            "extra": "iterations: 41410283\ncpu: 16.395561194305348 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 17.511660999037737,
            "unit": "ns/iter",
            "extra": "iterations: 41474148\ncpu: 17.510284454788437 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 17.209760489155855,
            "unit": "ns/iter",
            "extra": "iterations: 40393160\ncpu: 17.208455862329263 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 17.71467288925042,
            "unit": "ns/iter",
            "extra": "iterations: 37469955\ncpu: 17.713712786684727 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 25.319892490105023,
            "unit": "ns/iter",
            "extra": "iterations: 27690475\ncpu: 25.31881782454079 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 25.02995471548271,
            "unit": "ns/iter",
            "extra": "iterations: 27764677\ncpu: 25.02891393262037 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 25.714308092660076,
            "unit": "ns/iter",
            "extra": "iterations: 27590414\ncpu: 25.713366243797648 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 24.988678876120012,
            "unit": "ns/iter",
            "extra": "iterations: 28049512\ncpu: 24.987274858828403 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 25.40106401794588,
            "unit": "ns/iter",
            "extra": "iterations: 27596527\ncpu: 25.40015249020301 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 25.07408111012516,
            "unit": "ns/iter",
            "extra": "iterations: 27814432\ncpu: 25.073172085628098 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 25.510295011008456,
            "unit": "ns/iter",
            "extra": "iterations: 27569276\ncpu: 25.509047390290434 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 25.32424206966982,
            "unit": "ns/iter",
            "extra": "iterations: 27655708\ncpu: 25.32221445930805 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 26.69003349724383,
            "unit": "ns/iter",
            "extra": "iterations: 25472546\ncpu: 26.688181542590865 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 29.034832115568257,
            "unit": "ns/iter",
            "extra": "iterations: 24460903\ncpu: 29.033815718086828 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 29.949672460232588,
            "unit": "ns/iter",
            "extra": "iterations: 21900852\ncpu: 29.94857779962136 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 30.891981889956682,
            "unit": "ns/iter",
            "extra": "iterations: 23274375\ncpu: 30.890658846908252 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 30.721598751099872,
            "unit": "ns/iter",
            "extra": "iterations: 22151966\ncpu: 30.71974767386366 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 30.3321088338597,
            "unit": "ns/iter",
            "extra": "iterations: 22802242\ncpu: 30.329512729493604 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 32.64144209562656,
            "unit": "ns/iter",
            "extra": "iterations: 21574242\ncpu: 32.63941657834391 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 36.90683384609147,
            "unit": "ns/iter",
            "extra": "iterations: 18999228\ncpu: 36.90523872864704 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 36.98282987018597,
            "unit": "ns/iter",
            "extra": "iterations: 18897411\ncpu: 36.980278409566196 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 36.65586533337858,
            "unit": "ns/iter",
            "extra": "iterations: 19302185\ncpu: 36.65392809156078 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 36.818289931142964,
            "unit": "ns/iter",
            "extra": "iterations: 18807769\ncpu: 36.8162535386303 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 37.34620135640344,
            "unit": "ns/iter",
            "extra": "iterations: 18963519\ncpu: 37.34468802968492 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 36.37801293838122,
            "unit": "ns/iter",
            "extra": "iterations: 19030965\ncpu: 36.37564842350335 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 36.976581472959964,
            "unit": "ns/iter",
            "extra": "iterations: 19027499\ncpu: 36.97530311261607 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 37.47474462476965,
            "unit": "ns/iter",
            "extra": "iterations: 18780893\ncpu: 37.473173932677376 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 37.93484143388848,
            "unit": "ns/iter",
            "extra": "iterations: 18431176\ncpu: 37.93306238299715 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 41.534899229171835,
            "unit": "ns/iter",
            "extra": "iterations: 17053199\ncpu: 41.53299935103135 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 42.46247322839788,
            "unit": "ns/iter",
            "extra": "iterations: 16464739\ncpu: 42.45767588541834 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 42.34429391567708,
            "unit": "ns/iter",
            "extra": "iterations: 16164500\ncpu: 42.34173918153971 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 43.08350856421268,
            "unit": "ns/iter",
            "extra": "iterations: 16605710\ncpu: 43.08178650596752 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 43.46415072793,
            "unit": "ns/iter",
            "extra": "iterations: 16007703\ncpu: 43.46160870176034 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 45.01951307054361,
            "unit": "ns/iter",
            "extra": "iterations: 12821816\ncpu: 45.01440443381758 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 95.93947936281866,
            "unit": "ns/iter",
            "extra": "iterations: 7080593\ncpu: 95.9363268020062 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 328.1680932217316,
            "unit": "ns/iter",
            "extra": "iterations: 2117105\ncpu: 328.15841443858204 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 1190.1804564539832,
            "unit": "ns/iter",
            "extra": "iterations: 580212\ncpu: 1190.148416440882 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 4516.560853843032,
            "unit": "ns/iter",
            "extra": "iterations: 154033\ncpu: 4516.400511578685 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 28889.83795693591,
            "unit": "ns/iter",
            "extra": "iterations: 23827\ncpu: 28889.335291895637 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 273167.0933125496,
            "unit": "ns/iter",
            "extra": "iterations: 2572\ncpu: 273149.3573094842 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1347452.9621511777,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1347355.9621513754 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 5918798.758622071,
            "unit": "ns/iter",
            "extra": "iterations: 116\ncpu: 5918451.275862018 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 432.5487025153461,
            "unit": "ns/iter",
            "extra": "iterations: 1582639\ncpu: 432.53442636002234 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1714.797927939663,
            "unit": "ns/iter",
            "extra": "iterations: 411185\ncpu: 1714.7301457981148 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 7156.202226575564,
            "unit": "ns/iter",
            "extra": "iterations: 96471\ncpu: 7155.805433757347 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 28908.196352809224,
            "unit": "ns/iter",
            "extra": "iterations: 24512\ncpu: 28906.638177219505 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 115503.23575212923,
            "unit": "ns/iter",
            "extra": "iterations: 6036\ncpu: 115500.985752152 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 567709.4592933247,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 567700.1497695826 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2478907.41463351,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 2478859.6933798115 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 9100159.067567827,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 9099532.418918986 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 906.4466004811698,
            "unit": "ns/iter",
            "extra": "iterations: 771065\ncpu: 906.3930628416416 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3622.35833315859,
            "unit": "ns/iter",
            "extra": "iterations: 190228\ncpu: 3622.157542527922 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 12486.202445507735,
            "unit": "ns/iter",
            "extra": "iterations: 57166\ncpu: 12485.536455235619 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 57104.43543204716,
            "unit": "ns/iter",
            "extra": "iterations: 12452\ncpu: 57100.16358817812 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 232275.94794430563,
            "unit": "ns/iter",
            "extra": "iterations: 3016\ncpu: 232258.47314323584 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 1018762.8151382526,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1018707.6695778692 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 4341886.374999149,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 4341569.637499986 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 17600114.43589531,
            "unit": "ns/iter",
            "extra": "iterations: 39\ncpu: 17599081.051282056 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 1705.8014221832334,
            "unit": "ns/iter",
            "extra": "iterations: 401636\ncpu: 1705.6816819209412 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 150.4006879566617,
            "unit": "ns/iter",
            "extra": "iterations: 4635757\ncpu: 150.3907879554514 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 17.307047112370707,
            "unit": "ns/iter",
            "extra": "iterations: 40913907\ncpu: 17.30607712433827 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 75.55465127858145,
            "unit": "ns/iter",
            "extra": "iterations: 9458754\ncpu: 75.55127081220235 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.475200084393799,
            "unit": "ms/iter",
            "extra": "iterations: 1493\ncpu: 0.47517402210314436 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.4094268864425956,
            "unit": "ms/iter",
            "extra": "iterations: 1726\ncpu: 0.4093981066048639 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 254.17252900001586,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 254.15312820000227 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 257.76645539999663,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 257.75045759999955 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 813.5343602042303,
            "unit": "ns/iter",
            "extra": "iterations: 887291\ncpu: 813.3984814452086 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 47908.500033829536,
            "unit": "ns/iter",
            "extra": "iterations: 14779\ncpu: 47904.379322011046 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 16.886880854248883,
            "unit": "ns/iter",
            "extra": "iterations: 40268285\ncpu: 16.88551749844785 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 77.30243872175588,
            "unit": "ns/iter",
            "extra": "iterations: 9235289\ncpu: 77.29767590380752 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeTorsionEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 173.74154021959606,
            "unit": "ns/iter",
            "extra": "iterations: 4060330\ncpu: 173.7344513869558 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 3.5050252722770225,
            "unit": "ms/iter",
            "extra": "iterations: 202\ncpu: 3.504682202970339 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 25.760849821429993,
            "unit": "ms/iter",
            "extra": "iterations: 28\ncpu: 25.758778107143396 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2445.169447000035,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2444.4834045999983 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2457.616219600004,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2457.405900800001 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::smallMolecule, Population::small>",
            "value": 2.7492543100774225,
            "unit": "ms/iter",
            "extra": "iterations: 258\ncpu: 2.7491736937984714 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::smallMolecule, Population::small>",
            "value": 35.166441514093556,
            "unit": "ns/iter",
            "extra": "iterations: 19909462\ncpu: 35.16381452195858 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::smallMolecule, Population::small>",
            "value": 119.7886780234138,
            "unit": "ns/iter",
            "extra": "iterations: 5417146\ncpu: 119.77990975322035 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::smallMolecule, Population::small>",
            "value": 0.4435239589387302,
            "unit": "ms/iter",
            "extra": "iterations: 1583\ncpu: 0.443512019583067 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 207.98054779997983,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 207.9652278000026 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 208.35638220000874,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 208.3450426000013 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::mediumMolecule, Population::small>",
            "value": 1.3265465536396106,
            "unit": "ms/iter",
            "extra": "iterations: 522\ncpu: 1.3264841015326083 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::mediumMolecule, Population::small>",
            "value": 122.49099248657349,
            "unit": "ns/iter",
            "extra": "iterations: 5773791\ncpu: 122.44961585897195 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::mediumMolecule, Population::small>",
            "value": 35.46011185535309,
            "unit": "ns/iter",
            "extra": "iterations: 19560085\ncpu: 35.45724382077122 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesTorsion<ProblemType::mediumMolecule, Population::small>",
            "value": 570.3541075501522,
            "unit": "ns/iter",
            "extra": "iterations: 1236613\ncpu: 570.3262904401096 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1899.3286502000046,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1899.0691701999992 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::mediumMolecule, Population::small>",
            "value": 46.93475580000571,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 46.92919573333446 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1949.4846624000274,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1948.8122024000008 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tristan.youngs@stfc.ac.uk",
            "name": "Tristan Youngs",
            "username": "trisyoungs"
          },
          "committer": {
            "email": "tristan.youngs@stfc.ac.uk",
            "name": "Tristan Youngs",
            "username": "trisyoungs"
          },
          "distinct": true,
          "id": "7a1720cc04ed5184daf123926308eeed8dd1aebb",
          "message": "Generalise curl opts and try to fix tagging.",
          "timestamp": "2021-05-12T16:43:36+01:00",
          "tree_id": "fc9cbc265a7de6bfbc150cf46ed1b6a6b1ad014d",
          "url": "https://github.com/disorderedmaterials/dissolve/commit/7a1720cc04ed5184daf123926308eeed8dd1aebb"
        },
        "date": 1620835552922,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::SimpleMethod>/iterations:5",
            "value": 15.549573199996303,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 15.5384498 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::CellsMethod>/iterations:5",
            "value": 14.731957799995143,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 14.728155200000003 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::SimpleMethod>/iterations:5",
            "value": 370.0256101999912,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 369.7374988 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::CellsMethod>/iterations:5",
            "value": 703.1132718000208,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 702.9999237999999 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::SimpleMethod>/iterations:5",
            "value": 1470.1472319999993,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1469.9793479999998 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::CellsMethod>/iterations:5",
            "value": 3493.986108399986,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 3492.9756448000007 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 8.252129679450912,
            "unit": "ns/iter",
            "extra": "iterations: 87124027\ncpu: 8.251466188540654 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 7.624810134490526,
            "unit": "ns/iter",
            "extra": "iterations: 91420633\ncpu: 7.624261089944615 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 16.43759589076497,
            "unit": "ns/iter",
            "extra": "iterations: 43706633\ncpu: 16.43567153754447 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 17.972348664833998,
            "unit": "ns/iter",
            "extra": "iterations: 37182436\ncpu: 17.94832388066242 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 12.179412080831467,
            "unit": "ns/iter",
            "extra": "iterations: 58548967\ncpu: 12.177958357489073 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 12.274255570280014,
            "unit": "ns/iter",
            "extra": "iterations: 60140835\ncpu: 12.272991720184821 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 12.277103587777324,
            "unit": "ns/iter",
            "extra": "iterations: 55778704\ncpu: 12.276927947268204 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 12.892917272081364,
            "unit": "ns/iter",
            "extra": "iterations: 60106855\ncpu: 12.891529659969718 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 12.731523682766063,
            "unit": "ns/iter",
            "extra": "iterations: 54197056\ncpu: 12.731110560691741 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 12.67790621632485,
            "unit": "ns/iter",
            "extra": "iterations: 56040116\ncpu: 12.676180595343405 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 12.506363882436553,
            "unit": "ns/iter",
            "extra": "iterations: 55722981\ncpu: 12.503670290001114 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 12.114014491032174,
            "unit": "ns/iter",
            "extra": "iterations: 60153608\ncpu: 12.112935619755321 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 12.659585837199726,
            "unit": "ns/iter",
            "extra": "iterations: 56206786\ncpu: 12.658384879007349 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 15.208042530701118,
            "unit": "ns/iter",
            "extra": "iterations: 45069371\ncpu: 15.20726133497635 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 16.021894827922548,
            "unit": "ns/iter",
            "extra": "iterations: 40572824\ncpu: 16.02054155757068 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 16.49405664924223,
            "unit": "ns/iter",
            "extra": "iterations: 40139142\ncpu: 16.493864990935748 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 17.041240800322477,
            "unit": "ns/iter",
            "extra": "iterations: 43575585\ncpu: 17.039136594494376 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 17.456587901626584,
            "unit": "ns/iter",
            "extra": "iterations: 39958930\ncpu: 17.453266816704094 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 20.390155301625473,
            "unit": "ns/iter",
            "extra": "iterations: 31616733\ncpu: 20.388161515612474 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 24.210819891295724,
            "unit": "ns/iter",
            "extra": "iterations: 28833432\ncpu: 24.210569799668576 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 23.107224623820628,
            "unit": "ns/iter",
            "extra": "iterations: 29840571\ncpu: 23.105482364931987 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 24.04880303896812,
            "unit": "ns/iter",
            "extra": "iterations: 29954651\ncpu: 24.04724074401673 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 23.502942707044085,
            "unit": "ns/iter",
            "extra": "iterations: 29577528\ncpu: 23.500376400624276 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 23.257787952445746,
            "unit": "ns/iter",
            "extra": "iterations: 28647196\ncpu: 23.256115537450977 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 23.437914386271835,
            "unit": "ns/iter",
            "extra": "iterations: 29902354\ncpu: 23.43417571740332 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 24.276108026794954,
            "unit": "ns/iter",
            "extra": "iterations: 27612667\ncpu: 24.274152909604744 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 24.124298438976314,
            "unit": "ns/iter",
            "extra": "iterations: 27419033\ncpu: 24.12199467428328 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 25.489710370590487,
            "unit": "ns/iter",
            "extra": "iterations: 27961940\ncpu: 25.484865105926065 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 27.398142223582667,
            "unit": "ns/iter",
            "extra": "iterations: 24901059\ncpu: 27.394827183856165 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 30.584426762447784,
            "unit": "ns/iter",
            "extra": "iterations: 23427216\ncpu: 30.58192531284978 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 30.29689458595567,
            "unit": "ns/iter",
            "extra": "iterations: 22110868\ncpu: 30.292784073425018 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 28.889152980550495,
            "unit": "ns/iter",
            "extra": "iterations: 22939426\ncpu: 28.885556116356387 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 31.693638030408046,
            "unit": "ns/iter",
            "extra": "iterations: 22344291\ncpu: 31.689775791051453 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 42.92405477222449,
            "unit": "ns/iter",
            "extra": "iterations: 17357483\ncpu: 42.920614123602974 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 33.624460920231066,
            "unit": "ns/iter",
            "extra": "iterations: 19748701\ncpu: 33.619766940619954 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 34.57001088091431,
            "unit": "ns/iter",
            "extra": "iterations: 20442201\ncpu: 34.5666742049933 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 34.49761251896704,
            "unit": "ns/iter",
            "extra": "iterations: 20100055\ncpu: 34.49430456782344 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 34.619130177153494,
            "unit": "ns/iter",
            "extra": "iterations: 22270604\ncpu: 34.61727091012027 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 35.023877326950995,
            "unit": "ns/iter",
            "extra": "iterations: 19161567\ncpu: 35.02320008588018 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 33.764107709955255,
            "unit": "ns/iter",
            "extra": "iterations: 19900519\ncpu: 33.76214791182112 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 34.679821830462025,
            "unit": "ns/iter",
            "extra": "iterations: 20732163\ncpu: 34.67687317526872 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 34.041471116247,
            "unit": "ns/iter",
            "extra": "iterations: 19695901\ncpu: 34.0351453838035 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 34.23258086388239,
            "unit": "ns/iter",
            "extra": "iterations: 21161612\ncpu: 34.231044922286856 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 37.95157763005488,
            "unit": "ns/iter",
            "extra": "iterations: 18449097\ncpu: 37.94856929854031 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 38.77875301742594,
            "unit": "ns/iter",
            "extra": "iterations: 17815678\ncpu: 38.774307887692984 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 41.853129064968,
            "unit": "ns/iter",
            "extra": "iterations: 16624535\ncpu: 41.84799815453493 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 42.70676342337409,
            "unit": "ns/iter",
            "extra": "iterations: 12905358\ncpu: 42.7035616524545 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 47.232269803110356,
            "unit": "ns/iter",
            "extra": "iterations: 15803406\ncpu: 47.226605517822826 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 55.93860891564836,
            "unit": "ns/iter",
            "extra": "iterations: 12498020\ncpu: 55.9326931785999 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 78.71290113696578,
            "unit": "ns/iter",
            "extra": "iterations: 8983247\ncpu: 78.70481564182701 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 269.54062829753684,
            "unit": "ns/iter",
            "extra": "iterations: 2630728\ncpu: 269.51281128266027 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 956.0367109342758,
            "unit": "ns/iter",
            "extra": "iterations: 616029\ncpu: 955.9249158724668 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 4178.863274133132,
            "unit": "ns/iter",
            "extra": "iterations: 159743\ncpu: 4178.1716945343815 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 25428.687412797917,
            "unit": "ns/iter",
            "extra": "iterations: 27234\ncpu: 25383.624697069765 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 264987.3421367894,
            "unit": "ns/iter",
            "extra": "iterations: 2499\ncpu: 264959.8631452592 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1450277.9529413388,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1450117.1019607757 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 6332688.035714438,
            "unit": "ns/iter",
            "extra": "iterations: 112\ncpu: 6331918.151785767 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 428.57139574428834,
            "unit": "ns/iter",
            "extra": "iterations: 1745076\ncpu: 428.5678497670023 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1666.4735006890182,
            "unit": "ns/iter",
            "extra": "iterations: 438785\ncpu: 1666.2382579167752 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 6850.716539934634,
            "unit": "ns/iter",
            "extra": "iterations: 108495\ncpu: 6849.743896032007 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 27250.593175241233,
            "unit": "ns/iter",
            "extra": "iterations: 25554\ncpu: 27245.919308131608 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 109584.5422402905,
            "unit": "ns/iter",
            "extra": "iterations: 6392\ncpu: 109566.64048811085 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 532548.9853958389,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 532486.3366641045 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2348752.1980830105,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2348459.1533546313 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 9351016.970587058,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 9350169.94117637 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 828.917225033775,
            "unit": "ns/iter",
            "extra": "iterations: 851441\ncpu: 828.8300351991554 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3462.1495048463607,
            "unit": "ns/iter",
            "extra": "iterations: 207612\ncpu: 3461.7465512590697 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 11870.853044692085,
            "unit": "ns/iter",
            "extra": "iterations: 60236\ncpu: 11869.22478252209 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 52811.112605293034,
            "unit": "ns/iter",
            "extra": "iterations: 13534\ncpu: 52807.95950938332 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 211680.8935773872,
            "unit": "ns/iter",
            "extra": "iterations: 3223\ncpu: 211645.03785293072 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 911198.8614379881,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 910926.2849673195 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 4244484.230303263,
            "unit": "ns/iter",
            "extra": "iterations: 165\ncpu: 4243927.212121176 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 16972097.564103723,
            "unit": "ns/iter",
            "extra": "iterations: 39\ncpu: 16970489.92307679 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 1556.954130593224,
            "unit": "ns/iter",
            "extra": "iterations: 430374\ncpu: 1556.784959128581 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 140.33921511697648,
            "unit": "ns/iter",
            "extra": "iterations: 5025233\ncpu: 140.32176418486372 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 16.471303609523986,
            "unit": "ns/iter",
            "extra": "iterations: 43175674\ncpu: 16.468700546515905 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 69.13240096895964,
            "unit": "ns/iter",
            "extra": "iterations: 10624673\ncpu: 69.12507782592472 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.46099457874271416,
            "unit": "ms/iter",
            "extra": "iterations: 1543\ncpu: 0.4609906882696033 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.37935633984802,
            "unit": "ms/iter",
            "extra": "iterations: 1842\ncpu: 0.3793010792616687 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 235.6092465999609,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 235.58598920000122 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 233.29823200001556,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 233.27326879999927 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 703.9945494201953,
            "unit": "ns/iter",
            "extra": "iterations: 978428\ncpu: 703.937626478395 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 44523.16406880922,
            "unit": "ns/iter",
            "extra": "iterations: 16103\ncpu: 44516.87368813193 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 15.463932490797644,
            "unit": "ns/iter",
            "extra": "iterations: 46277662\ncpu: 15.463183987125412 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 69.51740458889374,
            "unit": "ns/iter",
            "extra": "iterations: 9492554\ncpu: 69.50735450122241 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeTorsionEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 154.98147628487212,
            "unit": "ns/iter",
            "extra": "iterations: 4265613\ncpu: 154.9694069762086 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 3.336432599033964,
            "unit": "ms/iter",
            "extra": "iterations: 207\ncpu: 3.336222864734342 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 23.185226533329722,
            "unit": "ms/iter",
            "extra": "iterations: 30\ncpu: 23.183246366666783 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2328.141869199999,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2327.9153549999987 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2359.0180472000156,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2358.0935064000014 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::smallMolecule, Population::small>",
            "value": 2.5391637014923045,
            "unit": "ms/iter",
            "extra": "iterations: 268\ncpu: 2.539037597014917 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::smallMolecule, Population::small>",
            "value": 33.369953081156424,
            "unit": "ns/iter",
            "extra": "iterations: 20643734\ncpu: 33.36858041282708 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::smallMolecule, Population::small>",
            "value": 110.34170547029522,
            "unit": "ns/iter",
            "extra": "iterations: 6506264\ncpu: 110.33323962876605 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::smallMolecule, Population::small>",
            "value": 0.40539093949961996,
            "unit": "ms/iter",
            "extra": "iterations: 1719\ncpu: 0.40536930191972825 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 193.03702679999333,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 193.01172799999904 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 194.83759679997092,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 194.82995899999764 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::mediumMolecule, Population::small>",
            "value": 1.2491067113043517,
            "unit": "ms/iter",
            "extra": "iterations: 575\ncpu: 1.2489989060869626 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::mediumMolecule, Population::small>",
            "value": 112.20540620838317,
            "unit": "ns/iter",
            "extra": "iterations: 6368123\ncpu: 112.19452231058007 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::mediumMolecule, Population::small>",
            "value": 33.58333298223877,
            "unit": "ns/iter",
            "extra": "iterations: 20649561\ncpu: 33.58149313682775 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesTorsion<ProblemType::mediumMolecule, Population::small>",
            "value": 567.4895962365285,
            "unit": "ns/iter",
            "extra": "iterations: 1213359\ncpu: 567.4652860365323 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1746.4538918000017,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1746.274571800001 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::mediumMolecule, Population::small>",
            "value": 43.38440743750027,
            "unit": "ms/iter",
            "extra": "iterations: 16\ncpu: 43.381001812500486 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1797.641075599995,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1797.4499557999993 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tristan.youngs@stfc.ac.uk",
            "name": "trisyoungs",
            "username": "trisyoungs"
          },
          "committer": {
            "email": "tristan.youngs@stfc.ac.uk",
            "name": "trisyoungs",
            "username": "trisyoungs"
          },
          "distinct": true,
          "id": "9ffa29b8c9fdc9fe3014b88a0d61a1814109d431",
          "message": "Try different quoting.",
          "timestamp": "2021-05-12T20:35:55+01:00",
          "tree_id": "e05c68ce4d202da7853f803021cf3aeec464fef2",
          "url": "https://github.com/disorderedmaterials/dissolve/commit/9ffa29b8c9fdc9fe3014b88a0d61a1814109d431"
        },
        "date": 1620849511119,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::SimpleMethod>/iterations:5",
            "value": 16.625921000013477,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 16.6067626 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::CellsMethod>/iterations:5",
            "value": 13.981424800022069,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 13.9813826 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::SimpleMethod>/iterations:5",
            "value": 381.7107389999819,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 381.64415840000004 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::CellsMethod>/iterations:5",
            "value": 737.7895015999911,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 737.6957654 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::SimpleMethod>/iterations:5",
            "value": 1521.6589396000018,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1521.4726591999997 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::CellsMethod>/iterations:5",
            "value": 3730.203748800022,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 3729.7248498 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 8.102509067901284,
            "unit": "ns/iter",
            "extra": "iterations: 87567658\ncpu: 8.10168787430625 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 7.648498693130181,
            "unit": "ns/iter",
            "extra": "iterations: 93629026\ncpu: 7.648129138927561 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 16.783042396837118,
            "unit": "ns/iter",
            "extra": "iterations: 37112509\ncpu: 16.78152220859008 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 15.898694035218547,
            "unit": "ns/iter",
            "extra": "iterations: 36040099\ncpu: 15.8979779994501 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 12.153192502628904,
            "unit": "ns/iter",
            "extra": "iterations: 57295082\ncpu: 12.152143529526636 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 12.418258423841266,
            "unit": "ns/iter",
            "extra": "iterations: 58228312\ncpu: 12.415402510723666 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 12.228979607978088,
            "unit": "ns/iter",
            "extra": "iterations: 55739636\ncpu: 12.228224113268366 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 12.197752983081928,
            "unit": "ns/iter",
            "extra": "iterations: 57970458\ncpu: 12.196681420043271 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 12.091804001418224,
            "unit": "ns/iter",
            "extra": "iterations: 59614798\ncpu: 12.091366106784319 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 12.747893956420072,
            "unit": "ns/iter",
            "extra": "iterations: 58520394\ncpu: 12.746445093995854 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 11.875713516475118,
            "unit": "ns/iter",
            "extra": "iterations: 60605118\ncpu: 11.874372078608959 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 13.006419717528853,
            "unit": "ns/iter",
            "extra": "iterations: 57178684\ncpu: 13.00482125471804 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 13.49521704410287,
            "unit": "ns/iter",
            "extra": "iterations: 48720813\ncpu: 13.493570745627808 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 14.679560637927473,
            "unit": "ns/iter",
            "extra": "iterations: 47319970\ncpu: 14.678816935006566 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 15.403553915334086,
            "unit": "ns/iter",
            "extra": "iterations: 41085447\ncpu: 15.402933135910583 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 14.644401207600335,
            "unit": "ns/iter",
            "extra": "iterations: 46941962\ncpu: 14.643751554312948 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 15.793694246468993,
            "unit": "ns/iter",
            "extra": "iterations: 47012494\ncpu: 15.791988508416477 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 15.163090379813337,
            "unit": "ns/iter",
            "extra": "iterations: 47490085\ncpu: 15.161022558708753 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 17.05941274401148,
            "unit": "ns/iter",
            "extra": "iterations: 30863917\ncpu: 17.058958621486582 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 24.946937692816324,
            "unit": "ns/iter",
            "extra": "iterations: 30064995\ncpu: 24.945694120354755 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 25.3543164744958,
            "unit": "ns/iter",
            "extra": "iterations: 29666896\ncpu: 25.273563132455738 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 25.84016374642704,
            "unit": "ns/iter",
            "extra": "iterations: 28165012\ncpu: 25.838708075110986 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 24.51186190895738,
            "unit": "ns/iter",
            "extra": "iterations: 27987738\ncpu: 24.506930713729115 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 23.31266850736444,
            "unit": "ns/iter",
            "extra": "iterations: 29631494\ncpu: 23.311453820046886 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 24.1024755287235,
            "unit": "ns/iter",
            "extra": "iterations: 29680003\ncpu: 24.09888065038271 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 25.073446573184246,
            "unit": "ns/iter",
            "extra": "iterations: 28259603\ncpu: 25.070024585978906 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 25.426902907480454,
            "unit": "ns/iter",
            "extra": "iterations: 26647893\ncpu: 25.426178234804397 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 26.966973944577543,
            "unit": "ns/iter",
            "extra": "iterations: 26606750\ncpu: 26.962712469580087 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 28.245091562373183,
            "unit": "ns/iter",
            "extra": "iterations: 24479378\ncpu: 28.243012424580225 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 30.155780628660338,
            "unit": "ns/iter",
            "extra": "iterations: 23004773\ncpu: 30.15434566557097 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 30.815959925208283,
            "unit": "ns/iter",
            "extra": "iterations: 23585499\ncpu: 30.812559827544675 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 32.75296925315055,
            "unit": "ns/iter",
            "extra": "iterations: 20997536\ncpu: 32.7504309077023 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 38.656952770359055,
            "unit": "ns/iter",
            "extra": "iterations: 18899488\ncpu: 38.653100020487344 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 41.801185166741156,
            "unit": "ns/iter",
            "extra": "iterations: 17544873\ncpu: 41.79661921747765 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 36.10002239134817,
            "unit": "ns/iter",
            "extra": "iterations: 18895699\ncpu: 36.099280741083106 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 36.84396858425441,
            "unit": "ns/iter",
            "extra": "iterations: 19151797\ncpu: 36.83888754668813 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 37.19175859534628,
            "unit": "ns/iter",
            "extra": "iterations: 19152075\ncpu: 37.18779025249196 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 37.3484040564425,
            "unit": "ns/iter",
            "extra": "iterations: 17397639\ncpu: 37.34231777081963 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 34.677485352236694,
            "unit": "ns/iter",
            "extra": "iterations: 18625368\ncpu: 34.6726311125771 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 34.07200070919298,
            "unit": "ns/iter",
            "extra": "iterations: 19639251\ncpu: 34.06015158113677 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 35.15390290265745,
            "unit": "ns/iter",
            "extra": "iterations: 19180340\ncpu: 35.14951872594531 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 33.10429507855488,
            "unit": "ns/iter",
            "extra": "iterations: 20827349\ncpu: 33.100347864723446 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 35.489173893705775,
            "unit": "ns/iter",
            "extra": "iterations: 19515927\ncpu: 35.484116281025244 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 37.92483732244801,
            "unit": "ns/iter",
            "extra": "iterations: 17691746\ncpu: 37.919982290046725 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 43.76906126237549,
            "unit": "ns/iter",
            "extra": "iterations: 18024685\ncpu: 43.76432853056814 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 43.51539905755056,
            "unit": "ns/iter",
            "extra": "iterations: 14894418\ncpu: 43.51028969376326 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 48.10918139285556,
            "unit": "ns/iter",
            "extra": "iterations: 13561047\ncpu: 48.105678492229 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 56.703208289865515,
            "unit": "ns/iter",
            "extra": "iterations: 10754421\ncpu: 56.70079198126909 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 74.52388614273335,
            "unit": "ns/iter",
            "extra": "iterations: 8234942\ncpu: 74.51855702201692 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 86.05754806302066,
            "unit": "ns/iter",
            "extra": "iterations: 7940302\ncpu: 86.04791404659464 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 295.5830442528777,
            "unit": "ns/iter",
            "extra": "iterations: 2368141\ncpu: 295.54537757676013 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 1048.5644012642965,
            "unit": "ns/iter",
            "extra": "iterations: 642270\ncpu: 1048.3380027091525 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 4381.482648970188,
            "unit": "ns/iter",
            "extra": "iterations: 159126\ncpu: 4381.03452609881 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 27037.811526419388,
            "unit": "ns/iter",
            "extra": "iterations: 25871\ncpu: 27034.56866762025 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 271844.9031167966,
            "unit": "ns/iter",
            "extra": "iterations: 2663\ncpu: 271504.0000000008 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1360304.0237152304,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1360065.4328063175 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 7913490.162161759,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 7913017.067567532 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 443.80644367927283,
            "unit": "ns/iter",
            "extra": "iterations: 1573542\ncpu: 443.7614407495965 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1751.0401876076824,
            "unit": "ns/iter",
            "extra": "iterations: 398705\ncpu: 1750.8430794697817 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 7058.594881234281,
            "unit": "ns/iter",
            "extra": "iterations: 99946\ncpu: 7058.183819262493 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 28644.86926124073,
            "unit": "ns/iter",
            "extra": "iterations: 24744\ncpu: 28642.9857743293 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 118598.46094011873,
            "unit": "ns/iter",
            "extra": "iterations: 5914\ncpu: 118587.45164017577 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 550113.0893417939,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 550010.7476489 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2365109.838283448,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 2364749.7623762335 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 9542518.294872537,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 9542093.897435823 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 858.5103962538473,
            "unit": "ns/iter",
            "extra": "iterations: 809330\ncpu: 858.4586336846653 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3486.285141575282,
            "unit": "ns/iter",
            "extra": "iterations: 194314\ncpu: 3486.100342744208 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 11702.564976051637,
            "unit": "ns/iter",
            "extra": "iterations: 61792\ncpu: 11701.221857198376 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 53335.19523659648,
            "unit": "ns/iter",
            "extra": "iterations: 12764\ncpu: 53328.41005954185 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 212779.9079456915,
            "unit": "ns/iter",
            "extra": "iterations: 3096\ncpu: 212752.67377261003 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 957004.8644988445,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 956920.0216802034 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 4267940.03529347,
            "unit": "ns/iter",
            "extra": "iterations: 170\ncpu: 4267339.38823523 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 17519905.702704057,
            "unit": "ns/iter",
            "extra": "iterations: 37\ncpu: 17518654.32432421 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 1710.7116561362832,
            "unit": "ns/iter",
            "extra": "iterations: 401857\ncpu: 1710.6190933590537 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 141.3765387106895,
            "unit": "ns/iter",
            "extra": "iterations: 5161464\ncpu: 141.36925201841842 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 16.71069870495135,
            "unit": "ns/iter",
            "extra": "iterations: 40990335\ncpu: 16.710161846688955 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 72.05241915843843,
            "unit": "ns/iter",
            "extra": "iterations: 9505723\ncpu: 72.05088524039746 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.4525532300067185,
            "unit": "ms/iter",
            "extra": "iterations: 1513\ncpu: 0.45250643225379206 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.41060584384380405,
            "unit": "ms/iter",
            "extra": "iterations: 1665\ncpu: 0.4105338330330394 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 243.44186580001406,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 243.4138044000008 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 248.59981760000665,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 248.56157399999856 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 726.4085399177786,
            "unit": "ns/iter",
            "extra": "iterations: 986239\ncpu: 726.3526670512937 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 44913.292262056755,
            "unit": "ns/iter",
            "extra": "iterations: 14836\ncpu: 44907.78612833673 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 15.30690218290118,
            "unit": "ns/iter",
            "extra": "iterations: 45294598\ncpu: 15.305221894231186 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 69.34667411430401,
            "unit": "ns/iter",
            "extra": "iterations: 10320935\ncpu: 69.3442229797981 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeTorsionEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 164.61758320996825,
            "unit": "ns/iter",
            "extra": "iterations: 4384899\ncpu: 164.60068293477363 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 3.2984668256883674,
            "unit": "ms/iter",
            "extra": "iterations: 218\ncpu: 3.2979484862386035 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 24.95429190322108,
            "unit": "ms/iter",
            "extra": "iterations: 31\ncpu: 24.950695354837922 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2308.2626704000177,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2308.0118885999977 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2492.686187199979,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2492.387987999996 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::smallMolecule, Population::small>",
            "value": 2.88488040890664,
            "unit": "ms/iter",
            "extra": "iterations: 247\ncpu: 2.884433028340061 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::smallMolecule, Population::small>",
            "value": 35.32381945183392,
            "unit": "ns/iter",
            "extra": "iterations: 19276850\ncpu: 35.32180247291465 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::smallMolecule, Population::small>",
            "value": 123.84294104399827,
            "unit": "ns/iter",
            "extra": "iterations: 5555347\ncpu: 123.83473291586965 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::smallMolecule, Population::small>",
            "value": 0.4685356821404865,
            "unit": "ms/iter",
            "extra": "iterations: 1551\ncpu: 0.4684743558994246 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 206.72385540001414,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 206.69231819999823 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 213.50211839999247,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 213.4718389999989 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::mediumMolecule, Population::small>",
            "value": 1.2320013617020016,
            "unit": "ms/iter",
            "extra": "iterations: 564\ncpu: 1.2309714078014522 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::mediumMolecule, Population::small>",
            "value": 127.94105246579976,
            "unit": "ns/iter",
            "extra": "iterations: 5675776\ncpu: 127.93157552376857 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::mediumMolecule, Population::small>",
            "value": 36.28421309891079,
            "unit": "ns/iter",
            "extra": "iterations: 20241699\ncpu: 36.276486919402906 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesTorsion<ProblemType::mediumMolecule, Population::small>",
            "value": 553.6608317725437,
            "unit": "ns/iter",
            "extra": "iterations: 1174600\ncpu: 553.5296466882396 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1862.020838599983,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1861.803160799997 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::mediumMolecule, Population::small>",
            "value": 46.2135669374959,
            "unit": "ms/iter",
            "extra": "iterations: 16\ncpu: 46.20943593750049 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1854.2510411999956,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1854.041241800002 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tristan.youngs@stfc.ac.uk",
            "name": "Tristan Youngs",
            "username": "trisyoungs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b0f5a922b01f823fc035bba8f8899216a30bb496",
          "message": "Merge pull request #670 from disorderedmaterials/remove-array-2\n\nRemove Array 2",
          "timestamp": "2021-05-12T23:06:42+01:00",
          "tree_id": "fb84199b852c72bce76fd4c04d9b596829004d07",
          "url": "https://github.com/disorderedmaterials/dissolve/commit/b0f5a922b01f823fc035bba8f8899216a30bb496"
        },
        "date": 1620858402252,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::SimpleMethod>/iterations:5",
            "value": 14.559505399984118,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 14.559385599999999 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::small, Method::CellsMethod>/iterations:5",
            "value": 14.232685999968453,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 14.1811258 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::SimpleMethod>/iterations:5",
            "value": 362.4138799999855,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 362.39127940000003 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::medium, Method::CellsMethod>/iterations:5",
            "value": 676.2135039999976,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 676.1850817999999 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::SimpleMethod>/iterations:5",
            "value": 1417.7490397999918,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1417.6839768 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateGR<ProblemType::atomic, Population::large, Method::CellsMethod>/iterations:5",
            "value": 3438.9766849999883,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 3438.854797 ms\nthreads: 1"
          },
          {
            "name": "BM_MIM<CubicBox>",
            "value": 7.6347593435580485,
            "unit": "ns/iter",
            "extra": "iterations: 92053758\ncpu: 7.6342704987666385 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<OrthorhombicBox>",
            "value": 7.567309855895813,
            "unit": "ns/iter",
            "extra": "iterations: 94447788\ncpu: 7.567180631059316 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<MonoclinicBox>",
            "value": 16.17951966268212,
            "unit": "ns/iter",
            "extra": "iterations: 40614292\ncpu: 16.179086243827545 ns\nthreads: 1"
          },
          {
            "name": "BM_MIM<TriclinicBox>",
            "value": 15.797346102588367,
            "unit": "ns/iter",
            "extra": "iterations: 39604696\ncpu: 15.796876511815645 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1024",
            "value": 11.654996802482101,
            "unit": "ns/iter",
            "extra": "iterations: 58548582\ncpu: 11.654588457838319 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2048",
            "value": 11.65981127114388,
            "unit": "ns/iter",
            "extra": "iterations: 60261585\ncpu: 11.659099242079304 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4096",
            "value": 11.67152485771214,
            "unit": "ns/iter",
            "extra": "iterations: 57511530\ncpu: 11.671020697936564 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8192",
            "value": 11.84712084146342,
            "unit": "ns/iter",
            "extra": "iterations: 60178798\ncpu: 11.846738663673554 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16384",
            "value": 12.182976889298656,
            "unit": "ns/iter",
            "extra": "iterations: 58134839\ncpu: 12.182885721933465 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/32768",
            "value": 11.802768087531417,
            "unit": "ns/iter",
            "extra": "iterations: 59330566\ncpu: 11.802690555825828 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/65536",
            "value": 12.011397604611018,
            "unit": "ns/iter",
            "extra": "iterations: 58363667\ncpu: 12.010645424318525 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/131072",
            "value": 12.163792795117022,
            "unit": "ns/iter",
            "extra": "iterations: 58546574\ncpu: 12.16358098084442 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/262144",
            "value": 13.139851876801597,
            "unit": "ns/iter",
            "extra": "iterations: 54351784\ncpu: 13.139130575732413 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/524288",
            "value": 14.710120489410214,
            "unit": "ns/iter",
            "extra": "iterations: 48722871\ncpu: 14.709804292936722 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/1048576",
            "value": 14.974667014035102,
            "unit": "ns/iter",
            "extra": "iterations: 46823971\ncpu: 14.974064801124987 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/2097152",
            "value": 15.217935180219921,
            "unit": "ns/iter",
            "extra": "iterations: 46723177\ncpu: 15.217772520049369 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/4194304",
            "value": 15.001588890402754,
            "unit": "ns/iter",
            "extra": "iterations: 45930166\ncpu: 15.001234025585756 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/8388608",
            "value": 15.006759167330394,
            "unit": "ns/iter",
            "extra": "iterations: 46481613\ncpu: 15.006122334868252 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_1d/16777216",
            "value": 14.945829791220024,
            "unit": "ns/iter",
            "extra": "iterations: 42026421\ncpu: 14.94522065059972 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1024",
            "value": 22.504664880449216,
            "unit": "ns/iter",
            "extra": "iterations: 29589933\ncpu: 22.504485664093945 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2048",
            "value": 22.428813381234043,
            "unit": "ns/iter",
            "extra": "iterations: 31759459\ncpu: 22.42867483983282 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4096",
            "value": 22.445473425119566,
            "unit": "ns/iter",
            "extra": "iterations: 31308330\ncpu: 22.445339243581454 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8192",
            "value": 22.487471922394388,
            "unit": "ns/iter",
            "extra": "iterations: 31023834\ncpu: 22.486910966581434 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16384",
            "value": 22.728293547587718,
            "unit": "ns/iter",
            "extra": "iterations: 31006080\ncpu: 22.72745822754758 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/32768",
            "value": 22.192664490374597,
            "unit": "ns/iter",
            "extra": "iterations: 31458755\ncpu: 22.192308373297074 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/65536",
            "value": 23.000765657954876,
            "unit": "ns/iter",
            "extra": "iterations: 31136619\ncpu: 23.000120051570256 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/131072",
            "value": 22.202390375949342,
            "unit": "ns/iter",
            "extra": "iterations: 29851706\ncpu: 22.201743779735732 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/262144",
            "value": 23.744178789519022,
            "unit": "ns/iter",
            "extra": "iterations: 28434507\ncpu: 23.742940821868224 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/524288",
            "value": 25.177291644217675,
            "unit": "ns/iter",
            "extra": "iterations: 28120530\ncpu: 25.17654126718093 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/1048576",
            "value": 29.26519651859414,
            "unit": "ns/iter",
            "extra": "iterations: 25355133\ncpu: 29.263315124397067 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/2097152",
            "value": 27.116164669577195,
            "unit": "ns/iter",
            "extra": "iterations: 25462432\ncpu: 27.11540661159149 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/4194304",
            "value": 28.282999782853903,
            "unit": "ns/iter",
            "extra": "iterations: 24637450\ncpu: 28.281039312104266 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/8388608",
            "value": 26.44047033463435,
            "unit": "ns/iter",
            "extra": "iterations: 24531895\ncpu: 26.44048256361754 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_2d/16777216",
            "value": 29.2361296051139,
            "unit": "ns/iter",
            "extra": "iterations: 23427253\ncpu: 29.234639887143263 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1024",
            "value": 32.87703466621754,
            "unit": "ns/iter",
            "extra": "iterations: 21083495\ncpu: 32.875706376006036 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2048",
            "value": 32.66663294737725,
            "unit": "ns/iter",
            "extra": "iterations: 21441732\ncpu: 32.665564890000326 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4096",
            "value": 31.652273095730624,
            "unit": "ns/iter",
            "extra": "iterations: 21329546\ncpu: 31.65096491036436 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8192",
            "value": 32.81377424802731,
            "unit": "ns/iter",
            "extra": "iterations: 21290498\ncpu: 32.81237437470924 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16384",
            "value": 33.355237245474406,
            "unit": "ns/iter",
            "extra": "iterations: 21056756\ncpu: 33.353869418441896 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/32768",
            "value": 32.21663140366342,
            "unit": "ns/iter",
            "extra": "iterations: 21981019\ncpu: 32.215575856606065 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/65536",
            "value": 33.0936883364835,
            "unit": "ns/iter",
            "extra": "iterations: 20589564\ncpu: 33.092459461501846 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/131072",
            "value": 33.9323951213928,
            "unit": "ns/iter",
            "extra": "iterations: 20556194\ncpu: 33.9317821674576 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/262144",
            "value": 33.1778052626201,
            "unit": "ns/iter",
            "extra": "iterations: 21169649\ncpu: 33.17604335338801 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/524288",
            "value": 38.32476264573814,
            "unit": "ns/iter",
            "extra": "iterations: 18564866\ncpu: 38.324434068093886 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/1048576",
            "value": 39.632335038849476,
            "unit": "ns/iter",
            "extra": "iterations: 17678451\ncpu: 39.63173549537824 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/2097152",
            "value": 37.933678790056874,
            "unit": "ns/iter",
            "extra": "iterations: 18889583\ncpu: 37.93130176563429 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/4194304",
            "value": 39.83765589126049,
            "unit": "ns/iter",
            "extra": "iterations: 17578519\ncpu: 39.835493763723676 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/8388608",
            "value": 43.34760742063681,
            "unit": "ns/iter",
            "extra": "iterations: 16507185\ncpu: 43.345420312428196 ns\nthreads: 1"
          },
          {
            "name": "BM_HistogramBinning_3d/16777216",
            "value": 37.28403473657601,
            "unit": "ns/iter",
            "extra": "iterations: 17357039\ncpu: 37.28361410030873 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1024",
            "value": 65.90603440307714,
            "unit": "ns/iter",
            "extra": "iterations: 10460637\ncpu: 65.9037495517717 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4096",
            "value": 237.13464027571996,
            "unit": "ns/iter",
            "extra": "iterations: 2977586\ncpu: 237.13010606578402 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16384",
            "value": 940.0028165434203,
            "unit": "ns/iter",
            "extra": "iterations: 700504\ncpu: 939.9766867855275 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/65536",
            "value": 3905.57958755183,
            "unit": "ns/iter",
            "extra": "iterations: 178156\ncpu: 3905.504922652048 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/262144",
            "value": 23832.997434614852,
            "unit": "ns/iter",
            "extra": "iterations: 30015\ncpu: 23832.02458770639 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/1048576",
            "value": 212050.6296980857,
            "unit": "ns/iter",
            "extra": "iterations: 3246\ncpu: 212044.83703019013 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/4194304",
            "value": 1081461.5269648272,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1081416.9938366802 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_1d/16777216",
            "value": 4605322.7032262515,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 4605084.612903225 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1024",
            "value": 424.67820542037305,
            "unit": "ns/iter",
            "extra": "iterations: 1671411\ncpu: 424.65762041771984 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4096",
            "value": 1627.18488993312,
            "unit": "ns/iter",
            "extra": "iterations: 426378\ncpu: 1627.1382060050034 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16384",
            "value": 6813.703086557152,
            "unit": "ns/iter",
            "extra": "iterations: 103643\ncpu: 6813.4888704494215 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/65536",
            "value": 26982.228122570617,
            "unit": "ns/iter",
            "extra": "iterations: 25780\ncpu: 26980.377812257513 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/262144",
            "value": 109896.4233883404,
            "unit": "ns/iter",
            "extra": "iterations: 6422\ncpu: 109895.48878853954 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/1048576",
            "value": 461962.6611949925,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 461952.6789231768 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/4194304",
            "value": 2005039.5149859327,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2004978.471389621 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_2d/16777216",
            "value": 7614355.284090379,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 7613972.306818181 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1024",
            "value": 810.1896437515576,
            "unit": "ns/iter",
            "extra": "iterations: 863498\ncpu: 810.158602567692 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4096",
            "value": 3302.7155865323657,
            "unit": "ns/iter",
            "extra": "iterations: 215359\ncpu: 3302.61247962705 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16384",
            "value": 10956.968949685228,
            "unit": "ns/iter",
            "extra": "iterations: 63381\ncpu: 10956.700762058139 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/65536",
            "value": 51615.730680500004,
            "unit": "ns/iter",
            "extra": "iterations: 13872\ncpu: 51614.9881776237 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/262144",
            "value": 209245.0902233235,
            "unit": "ns/iter",
            "extra": "iterations: 3314\ncpu: 209241.95141822376 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/1048576",
            "value": 859007.6243781279,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 858987.103233817 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/4194304",
            "value": 3655201.128865592,
            "unit": "ns/iter",
            "extra": "iterations: 194\ncpu: 3655087.221649452 ns\nthreads: 1"
          },
          {
            "name": "BM_Array_3d/16777216",
            "value": 14542865.1249991,
            "unit": "ns/iter",
            "extra": "iterations: 48\ncpu: 14541981.770833286 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 1540.7502368676073,
            "unit": "ns/iter",
            "extra": "iterations: 468616\ncpu: 1540.70393029688 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 131.4067446768187,
            "unit": "ns/iter",
            "extra": "iterations: 5304094\ncpu: 131.3988641604015 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 15.856284631987936,
            "unit": "ns/iter",
            "extra": "iterations: 43682343\ncpu: 15.855627593053034 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 68.61309238183317,
            "unit": "ns/iter",
            "extra": "iterations: 9809277\ncpu: 68.61170542946222 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.3956975601588952,
            "unit": "ms/iter",
            "extra": "iterations: 1762\ncpu: 0.3956821804767277 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::smallMolecule, Population::small>",
            "value": 0.3655125701617471,
            "unit": "ms/iter",
            "extra": "iterations: 1917\ncpu: 0.3654949384454883 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 225.79570140001124,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 225.78570139999957 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 220.54534740000236,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 220.53450779999935 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_AtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 679.7445313094876,
            "unit": "ns/iter",
            "extra": "iterations: 958959\ncpu: 679.7196063648241 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_SpeciesInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 40851.8740796103,
            "unit": "ns/iter",
            "extra": "iterations: 17384\ncpu: 40850.366946617265 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeBondEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 16.43990982544513,
            "unit": "ns/iter",
            "extra": "iterations: 44691100\ncpu: 16.439319036676228 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeAngleEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 75.41177032929845,
            "unit": "ns/iter",
            "extra": "iterations: 9445785\ncpu: 75.4084776437331 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeTorsionEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 169.3466884173404,
            "unit": "ns/iter",
            "extra": "iterations: 4118182\ncpu: 169.3383597422375 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_MoleculeEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 2.969909511210005,
            "unit": "ms/iter",
            "extra": "iterations: 223\ncpu: 2.9697301390134037 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalIntraMolecularEnergy<ProblemType::mediumMolecule, Population::small>",
            "value": 23.041113133331237,
            "unit": "ms/iter",
            "extra": "iterations: 30\ncpu: 23.04045986666665 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterMolecularEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2095.2859056000307,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2095.201940200002 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateEnergy_TotalInterAtomicEnergy<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 2147.2561294000116,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2147.040503400001 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::smallMolecule, Population::small>",
            "value": 2.549068028368775,
            "unit": "ms/iter",
            "extra": "iterations: 282\ncpu: 2.549000989361717 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::smallMolecule, Population::small>",
            "value": 41.36894422397106,
            "unit": "ns/iter",
            "extra": "iterations: 18027706\ncpu: 41.36597629226899 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::smallMolecule, Population::small>",
            "value": 127.11657333822622,
            "unit": "ns/iter",
            "extra": "iterations: 5529755\ncpu: 127.11129245328246 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::smallMolecule, Population::small>",
            "value": 0.4381624300126813,
            "unit": "ms/iter",
            "extra": "iterations: 1586\ncpu: 0.438148495586383 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 190.34729219997644,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 190.34191220000025 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::smallMolecule, Population::small>/iterations:5",
            "value": 201.75404100000378,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 201.74520119999784 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_InterAtomic<ProblemType::mediumMolecule, Population::small>",
            "value": 1.1523771867769403,
            "unit": "ms/iter",
            "extra": "iterations: 605\ncpu: 1.152278510743804 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesAngle<ProblemType::mediumMolecule, Population::small>",
            "value": 138.8735158866733,
            "unit": "ns/iter",
            "extra": "iterations: 4990943\ncpu: 138.86984864383155 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesBond<ProblemType::mediumMolecule, Population::small>",
            "value": 41.093884906309725,
            "unit": "ns/iter",
            "extra": "iterations: 17197120\ncpu: 41.09263463882354 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_SpeciesTorsion<ProblemType::mediumMolecule, Population::small>",
            "value": 523.0667061889391,
            "unit": "ns/iter",
            "extra": "iterations: 1312337\ncpu: 523.0498675264047 ns\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalInterAtomic<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1658.9232469999843,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1658.740565800002 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalIntraMolecular<ProblemType::mediumMolecule, Population::small>",
            "value": 42.23356887500529,
            "unit": "ms/iter",
            "extra": "iterations: 16\ncpu: 42.23263118750076 ms\nthreads: 1"
          },
          {
            "name": "BM_CalculateForces_TotalForces<ProblemType::mediumMolecule, Population::small>/iterations:5",
            "value": 1704.3775195999842,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1704.3188162000035 ms\nthreads: 1"
          }
        ]
      }
    ]
  }
}