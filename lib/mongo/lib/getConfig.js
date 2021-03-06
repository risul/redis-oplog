import Channel, { ChannelType } from '../../utils/Channel';
import getChannelsArray from '../../utils/getChannelsArray';

/**
 * @param cb optional callback
 * @param config
 */
export default function (cb, config) {
    if (_.isObject(cb)) {
        config = cb;
    } else if (!config) {
        config = {};
    }

    let newConfig = _.extend({
        pushToRedis: true
    }, config);

    newConfig.channels = getChannelsArray(newConfig);

    return newConfig;
};
