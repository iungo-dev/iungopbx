if (!process.env.IUNGOSDK_API_SERVER) throw new Error('Process.env.IUNGOSDK_API_SERVER is undefined');
if (!process.env.IUNGOSDK_APP_KEY) throw new Error('Process.env.IUNGOSDK_APP_KEY is undefined');
if (!process.env.IUNGOSDK_APP_SECRET) throw new Error('Process.env.IUNGOSDK_APP_KEY is undefined');

import _mocha from 'mocha';
import _chai from 'chai';
import _sinon from 'sinon';
import _sinonChai from 'sinon-chai';
import SDK from '../src/SDK';
import AccountGenerator from './lib/AccountGenerator';
import AccountGeneratorHelper from './lib/AccountGeneratorHelper';

export var chai = _chai || window.chai;
export var sinon = _sinon || window.sinon;
export var expect = chai.expect;
export var spy = sinon.spy;

/**
 * @return {SDK}
 */
export function getSdk() {

    return new SDK({
        server: process.env.IUNGOSDK_API_SERVER,
        appKey: process.env.IUNGOSDK_APP_KEY,
        appSecret: process.env.IUNGOSDK_APP_SECRET
    });

}

//chai.use(sinonChai);

export var accountGenerator = new AccountGenerator(process.env.IUNGOSDK_AGS_SERVER);
export var accountGeneratorHelper = new AccountGeneratorHelper(accountGenerator, process.env.IUNGOSDK_AGS_DBNAME);