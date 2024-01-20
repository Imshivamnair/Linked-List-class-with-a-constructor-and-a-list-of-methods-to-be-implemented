// removes an element from the
// specified location
removeFrom(index)
{
    if (index < 0 || index >= this.size)
        return console.log("Please Enter a valid index");
    else {
        let curr, prev, it = 0;
        curr = this.head;
        prev = curr;

        // deleting first element
        if (index === 0) {
            this.head = curr.next;
        } else {
            // iterate over the list to the
            // position to remove an element
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }

            // remove the element
            prev.next = curr.next;
        }
        this.size--;

        // return the remove element
        return curr.element;
    }
}
