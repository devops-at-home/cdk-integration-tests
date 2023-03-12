import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ThingWithCert } from 'cdk-iot-core-certificates';

export class IotCoreCertificates extends Stack {
    constructor(scope: Construct, id: string, props: StackProps = {}) {
        super(scope, id, props);

        const { thingArn, certId, certPem, privKey } = new ThingWithCert(this, 'ThingWithCert', {
            thingName: 'integrationTest',
            saveToParamStore: true,
            paramPrefix: 'devices',
        });

        new CfnOutput(this, 'Output-ThingArn', {
            value: thingArn,
        });

        new CfnOutput(this, 'Output-CertId', {
            value: certId,
        });

        new CfnOutput(this, 'Output-CertPem', {
            value: certPem,
        });

        new CfnOutput(this, 'Output-PrivKey', {
            value: privKey,
        });
    }
}
