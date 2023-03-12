import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ThingWithCert } from 'cdk-iot-core-certificates';

export class IotCoreCertificates extends Stack {
    constructor(scope: Construct, id: string, props: StackProps = {}) {
        super(scope, id, props);

        // const { certId, thingArn } = new ThingWithCert(this, 'ThingWithCert', {
        new ThingWithCert(this, 'ThingWithCert', {
            thingName: 'integrationTest',
            saveToParamStore: true,
            paramPrefix: 'devices',
        });

        // new CfnOutput(this, 'Output-CertId', {
        //     value: certId,
        // });

        // new CfnOutput(this, 'Output-ThingArn', {
        //     value: thingArn,
        // });
    }
}
