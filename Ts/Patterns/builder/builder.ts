//? Solution ---> Step by step

//! Problem ---> Many properties with the constructor


class Computer {

    brand: string = 'not defined';
    ref: string = 'not defined';
    ram: string = 'not defined';
    cpu: string = 'not defined';
    gpu?: string = 'not defined';

    displayComputer() {
        console.log(`
            ${'amd'}
            `)
    }
}

const laptop = new Computer().displayComputer()
// console.log(laptop)