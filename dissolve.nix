{pkgs ? import <nixos> {}}:

pkgs.stdenv.mkDerivation {
  name = "dissolve";
  cmakeFlags = [
    "-DCMAKE_BUILD_TYPE=Release"
    "-DGUI=OFF"
    "-DPARALLEL=OFF"
  ];
  buildInputs = [
    pkgs.antlr
    pkgs.bison
    pkgs.cmake
    pkgs.freetype
    pkgs.ftgl
    pkgs.gdb
    pkgs.libGL
    pkgs.libglvnd
    pkgs.libglvnd.dev
    pkgs.openmpi
    pkgs.qt5.full
    pkgs.tbb
  ];
  src = pkgs.fetchFromGitHub {
    owner = "projectdissolve";
    repo = "dissolve";
    rev = "e8da2be5c0ca2026464431f7c9cc9d58980bd15f";
    sha256 = "0fxbh4d4wbapv1yhjm7vb9xnnv9h4v22k8x9jpmd3xvc0i687g42";
  };
  installPhase = "cp -r .$prefix $out";
}