# FinderAU Page Layout + Listing

Link to live site: https://grantjhanrahan.github.io/fau-design/


## Challenge

Reproduce a given layout using JavaScript and whatever front end technologies I felt were appropriate.

The solution needed to consider the needs of a wide variety of users, fills in the interactions left out by the designer and appreciates that the template should be easy to update by other developers.


## Technologies used

- HTML
- CSS
- JavaScript
- jQuery
- AJAX


## Approach

I began the project by building the basic structure of the HTML. From there I started to build on the CSS required. When implementing the CSS I tried to follow the FinderAU styling guide;
- Responsive web design: https://github.com/finderau/styleguide/blob/master/pages/browser-support.md
- Sass styleguide (even though I used CSS): https://github.com/finderau/styleguide/blob/master/pages/sass.md
- BEM methodology for class and id names
- JavaScript styleguide: https://github.com/finderau/styleguide/blob/master/pages/js.md

I aimed to improve accessibility by incorporating WAI-ARIA Landmarks to help make it easier for people using screen readers to navigate through the site: https://developer.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/

The use of jQuery for the AJAX call wasn't required but I found that I preferred the formatting it provided compared to a XMLHttpRequest Object (https://www.w3schools.com/js/js_ajax_http.asp)


## To do

If I had to approach the challenge again;
- I would instead use Sass styling to remove the duplicated css styling rules.
- Research further into the usability needs of potential users and implement the changes into my code.
