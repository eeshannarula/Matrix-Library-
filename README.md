# Matrix-Library-

### Changelog:
- Replaced Randomize for fill function.
- Modified constructor to use fill method for initialization.
- Added row operations

### Methods:

#### fill(value)

Fills the matrix with a number _value_.
```
/* Consider the matrix mtx
[ 0, 1, 2 ]
[ 2, 1, 0 ]
[ 1, 0, 2 ]
 */

// We call the fill method
mtx.fill(-1);

/* The matrix now looks like this
[ -1, -1, -1 ]
[ -1, -1, -1 ]
[ -1, -1, -1 ]
*/
```

_value_ is a finite number. 
If no value is given, the _fill()_ method will fill the matrix with a random number between 0 and 9.

#### switchRows(rowA, rowB)

Switches two rows of the matrix.
```
/* Consider the following matrix mtx
[ 9, 9, 9 ] 
[ 3, 3, 3 ]
[ 0, 0, 0 ]
 */

// We call the switchRows method
mtx.switchRows(0, 1);

/* The matrix now looks like this
[ 3, 3, 3 ]
[ 9, 9, 9 ]
[ 0, 0, 0 ]
*/
```

_rowA_ is the index of one row you want to switch. 
_rowB_ is the index of second row you want to switch.

#### multiplyRow(row, n)

Multiplies the row index _row_ by a constant _n_.
```
/* Consider the following matrix mtx
[ 1, 1, 1 ] 
[ 1, 1, 1 ]
[ 1, 1, 1 ]
 */

// We call the multiplyRow method
mtx.multiplyRow(1, 7);

/* The matrix now looks like this
[ 1, 1, 1 ]
[ 7, 7, 7 ]
[ 1, 1, 1 ]
*/
```

_row_ is the index of one row to multiply. 
_n_ is a number different of zero.

#### addRows(a, b)

Sums the rows index _a_ and _b_.
```
/* Consider the following matrix mtx
[ 2, 2, 2 ] 
[ 3, 3, 3 ]
[ 0, 0, 0 ]
 */

// We call the addRows method
mtx.addRows(0, 1);

/* The matrix now looks like this
[ 2, 2, 2 ]
[ 5, 5, 5 ]
[ 0, 0, 0 ]
*/
```

_a_ is the index of the first row to sum. 
_rowB_ is the index of the second row to add.
> Note that the result of the sum always goes in place of the row index _b_.
