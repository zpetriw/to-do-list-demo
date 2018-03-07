export function createItem(course) {
    return { type: 'CREATE_COURSE', course}
    // /return { type: 'CREATE_COURSE', course: course} // Can omit this in ES6
}