import { App } from 'aws-cdk-lib';
import { StackFactory } from './stack-factory';

const env = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new StackFactory(app, { env });

app.synth();
