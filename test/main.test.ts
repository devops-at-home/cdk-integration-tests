import { App } from 'aws-cdk-lib';
import { StackFactory } from '../src/stack-factory';

describe('Integration test snapshots', () => {
    const app = new App();

    new StackFactory(app);

    const { stacks } = app.synth();

    test.each(stacks)(`$stackName`, (stack) => {
        expect(stack.template).toMatchSnapshot();
    });
});
