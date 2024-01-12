class Queue<T extends () => Promise<void>> {
    elements: T[] = [];
    current?: T = undefined;

    enqueue(func: T) {
        this.elements.push(func);
        if (!this.current) {
            this.current = this.elements[0];
            this.exec();
        }
    }

    async exec() {
        if (!this.current) return;
        await this.current();
        this.elements.shift();
        this.current = this.elements[0];
        this.exec();
    }
}

export default Queue;
