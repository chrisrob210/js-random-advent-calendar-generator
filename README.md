

# js-random-number-table-generator
Generates a table of numbers 1-25. Fully Customizable.

## Usage
**Adding To Project**
1. Add to project and add `<script src="random.js">`
2. Then inside an element (i.e. `<div>`) with an id place this: `<script>CreateTable()</script>`
3. In the javascript file `random.js` rename `document.getElementById('js');` to reflect the id you chose in step 2.

**Customization**
Changing the script to meet your needs is simple:
 1. Change MAX random (exclusive) value: `const  max = Math.floor(26);`
 2. Change MIN random (inclusive) value: `const  min = Math.ceil(1);`
 3. Change rows: `const  rowMax = 5;`
 4. Change columns: `const  cellMax = 5;` 

 

## Example Output
*original output*  

![Screenshot](https://github.com/chrisrob210/js-random-advent-calendar-generator/blob/main/randomjs.png?raw=true)

*formatted in markdown*
| |col(0)|col(1) |col(2) |col(3) |col(4)|
|:---:| :---: | :---:| :---:|:---:|:---:|
|row(0)| 17|13|6|9|24|
|row(1)|22|16|21|15|19|
|row(2)|4|5|11|3|23|
|row(3)|14|20|18|1|25|
|row(4)|2|8|10|12|7|






