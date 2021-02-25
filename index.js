const world = document.querySelector('#world');


for (let row = 1; row <= 20; row++) {
    for (let col = 1; col <= 20; col++) {
        const block = document.createElement('div');
        block.classList.add('block')
        block.setAttribute('row',row)
        block.setAttribute('col',col)
        world.appendChild(block);
    }
}
