import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { StackFactory } from '../src/stack-factory';

describe('Snapshot tests', () => {
    const app = new App();

    const { stacks } = new StackFactory(app);

    stacks.forEach((stack) => {
        const template = Template.fromStack(stack);
        expect(template.toJSON()).toMatchSnapshot();
    });
});
