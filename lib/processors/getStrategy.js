import { Strategy } from '../constants';
import { _ } from 'meteor/underscore';

/**
 * @param selector
 * @param options
 * @returns {*}
 */
export default function getStrategy(selector = {}, options = {}) {
    if (options.limit && !options.sort) {
        throw new Meteor.Error(`Sorry, but you are not allowed to use "limit" without "sort" option.`);
    }

    if (options.limit && options.sort) {
        return Strategy.LIMIT_SORT;
    }

    if (selector && selector._id && _.keys(selector).length === 1) {
        return Strategy.DEDICATED_CHANNELS;
    }

    return Strategy.DEFAULT;
}