rem
rem (c) HIGS January 2024
rem
rem set YEAR=2023-24

set NAME="HIGS Nestboxes"
set DESC="HIGS Nestboxes 2022-23"

rem
rem don't change below here
rem

IF "%1" == "" (
set DATANAME=data
) ELSE (
set DATANAME=%1
)
set INFILE=%DATANAME%.csv
set OUTFILE=%DATANAME%.json
set OUTFILE2=%DATANAME%.js

set CRS=EPSG:4258
rem https://epsg.io/4258 lat-long UK and Europe


rem
rem OGIS free software ogr2ogr for conversion from CSV to GeoJSON
rem
INFILE_OPTIONS=-if CSV -oo Y_POSSIBLE_NAMES=Lon* -oo X_POSSIBLE_NAMES=Lat*  -oo HEADERS=YES -oo KEEP_GEOM_COLUMNS=NO 
OUTFILE_OPTIONS=-a_srs %CRS% -f GeoJSON -nlt POINT -nln %NAME% -lco DESCRIPTION=%DESC% -lco RFC7946=YES -lco ID_GENERATE=YES
ogr2ogr %INFILE_OPTION% %OUTFILE_OPTIONS%-a_srs %CRS% -f GeoJSON -nlt POINT -nln %NAME% -lco DESCRIPTION=%DESC% -lco RFC7946=YES -lco ID_GENERATE=YES %OUTFILE%   %INFILE%



