import commonEntry from './commonEntry'
import context from '../context'
import merge from 'webpack-merge'
import moduleEntry from './moduleEntry'
import testEntry from './testEntry'


export default {
    ...commonEntry,
    ...moduleEntry,
    ...testEntry,
}