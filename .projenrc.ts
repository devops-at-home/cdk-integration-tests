import { awscdk } from "projen";
const project = new awscdk.AwsCdkTypeScriptApp({
  authorName: "DevOps@Home",
  authorUrl: "https://devops-at-ho.me",
  cdkVersion: "2.43.1",
  defaultReleaseBranch: "main",
  eslint: false,
  name: "cdk-integration-tests",
  projenrcTs: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();