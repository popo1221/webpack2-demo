import commonEntry from './commonEntry'
import context from '../context'
import merge from 'webpack-merge'
import moduleEntry from './moduleEntry'


export default {
    ...commonEntry,
    ...moduleEntry
}