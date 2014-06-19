# Grid System with SASS 

Recently, I decided to study some tools that I use daily and nothing better than "DO IT YOURSELF" =p

ps. I just started to create this and it's too far away from the "complete" status.

Make sure you have installed:
* node.js
* gruntjs
* sass
* compass


-> If you want to try it, you just need the content in the gs.scss file, into the "sass" folder.


## To specify the column size of your element, just follow the exemple bellow

```css
aside { width: col-size-g12(n) }
/* If you want to use the 12-column grid */

/* or */

aside { width: col-size-g16(n) }
/* If you want to use the 16-column grid */
```
Where 'n' is your column size from 1 to 12.


And if you want, apply the class "col" to your element. So it will get the following rules and will behave the way I like to use.

```css
.col {
	display: table;
	padding: 0px 20px;
	float: left;
}
```