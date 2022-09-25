import { App, Stack, StackProps } from 'aws-cdk-lib';
import { IotCoreCertificates } from './stacks/iot-core-certificates-stack';

export class StackFactory {
    public readonly stacks: Stack[] = [];
    constructor(app: App, stackProps?: StackProps) {
        this.stacks.push(new IotCoreCertificates(app, 'integ-test-iot-core-certs', stackProps));
    }
}
