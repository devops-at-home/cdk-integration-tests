import { App, StackProps } from 'aws-cdk-lib';
import { IotCoreCertificates } from './stacks/iot-core-certificates.stack';

export class StackFactory {
    constructor(app: App, stackProps?: StackProps) {
        new IotCoreCertificates(app, 'iot-core-certs', stackProps);
    }
}
