import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ThingWithCert } from 'cdk-iot-core-certificates';

export class IotCoreCertificates extends Stack {
    constructor(scope: Construct, id: string, props: StackProps = {}) {
        super(scope, id, props);

        new ThingWithCert(this, 'ThingWithCert', {
            thingName: 'integrationTest',
            saveToParamStore: true,
        });
    }
}
