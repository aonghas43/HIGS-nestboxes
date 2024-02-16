# Source spreadsheet

## Assumptions

### these columns

```text 
Box no.	Kind of box	GPS 	Date installed	2022	2023		
```
plus "Location" to help cross-refer from GPS coordinates

## steps

* Create new tab **data** in spreadsheet
* copy with headers all columns except "Location"
* add column "Lat", with formula "=RIGHT(C3,LEN(C3)-FIND(" ", C3))"
* add column "Long" with formula "=LEFT(C3, FIND(" ", C3)-1)"
* drag formula boxes down to end of data in column
* check you have values for Lat, Long for all rows
* Copy all of "Kind of box" column to a temp column at RHS (assuming col = I)
* create another col side by side with temp col with formula =trim(I2) and drag to end. This is to eliminate trailing spaces.
* check that spelling, capitalisation is uniform, and correct if not
* Select all cells with data or header
* "Save as" CSV -> data.csv
* use **csv2geojson.bat" script to create geojson version as **data.geojson**
* create **data.js** to wrap contents in block

```javascript
var data =
.... data here
;
```


