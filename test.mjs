
import { deepCopy } from './replica';

let a = {
    name: 'Human', 
    func: () => {
        console.log('Hi!');
    }, 
    prop: {
        age: 21, 
        info: {
            hasShirt: true, 
            hasHat: false
        }
    },
    mark: [89, 92, { exam: [1, 2, 3] }]
};

let b = Object();

deepCopy(b, a);

a.name = 'Alien';
a.func = () => { console.log('Wassup!'); };
a.prop.age = 1024;
a.prop.info.hasShirt = false;
a.mark[0] = 87;
a.mark[1] = 91;
a.mark[2].exam = [4, 5, 6];

console.log(a); // updated props
console.log(b);
