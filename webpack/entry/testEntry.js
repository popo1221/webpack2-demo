import context from '../context'
import glob from 'glob'
import path from 'path'

export default {
    'test.bundle': listEntries('./**/*.spec.js', context)
}

function listEntries(pattern, basedir) {
    return glob
        .sync(pattern, {nodir: true, cwd: basedir})
        .reduce((prev, next) => {
            // const split = next.split('/')
            // const [,, cat, name] = split
            // const key = `modules/${cat}/${name}`
            prev.push(next)
            return prev
        }, [])
}