import context from '../context'
import glob from 'glob'
import path from 'path'

export default listEntries('./modules/**/*.js', context)

function listEntries(pattern, basedir) {
    return glob
        .sync(pattern, {nodir: true, cwd: basedir})
        .reduce((prev, next) => {
            // const split = next.split('/')
            // const [,, cat, name] = split
            // const key = `modules/${cat}/${name}`
            const key = next.replace(/\.js$/, '')
            prev[key] = next
            return prev
        }, {})
}