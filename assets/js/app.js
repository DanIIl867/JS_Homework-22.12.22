let radius;
let height;
let cylinder;
let pi;


radius = prompt('Введіть радіус основи циліндра', '');
height = prompt('Введіть висоту циліндра', '');

let radius_cube = Number(radius * radius);
height = Number(height)
pi = 3.14

cylinder = (pi * radius_cube * height);

alert(cylinder);