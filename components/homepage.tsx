import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const Homepage = () => {
  return (
    <div className="p-8">
      <h1 className="">
        <span className="font-bold text-green-500">ack</span>
        response
      </h1>{" "}
      <div className="mt-8 space-y-4">
        <section className="my-4">
          <h2 className="text-2xl font-bold">Introduction</h2>
          <p className="text-lg">
            Welcome to ackresponse, a simple app designed to showcase the power
            of modern DevOps practices.
          </p>
        </section>

        <section className="my-4">
          <h2 className="text-2xl font-bold">
            Infrastructure as Code (IaC) with Terraform
          </h2>
          <p className="text-lg">
            This application has been successfully synced and deployed using a
            robust infrastructure as code (IaC) approach. We leverage Terraform,
            a powerful IaC tool, to provision and manage our Google Kubernetes
            Engine (GKE) cluster.
          </p>
        </section>

        <section className="my-4">
          <h2 className="text-2xl font-bold">
            Continuous Integration and Deployment with GitHub Actions
          </h2>
          <p className="text-lg">
            To streamline our development workflow, we have integrated GitHub
            Actions. This allows us to automate our CI/CD pipelines, ensuring
            that every code change is tested, built, and deployed seamlessly.
          </p>
        </section>

        <section className="my-4">
          <h2 className="text-2xl font-bold">Automatic Syncing with ArgoCD</h2>
          <p className="text-lg">
            Moreover, we have implemented automatic syncing with ArgoCD, a
            declarative, GitOps continuous delivery tool for Kubernetes. This
            ensures that our application's state is always in sync with the
            desired state defined in our Git repository.
          </p>
        </section>

        <section className="my-4">
          <h2 className="text-2xl font-bold">Conclusion</h2>
          <p className="text-lg">
            Together, these tools enable us to maintain a reliable and efficient
            deployment process, allowing us to focus on delivering value to our
            users with confidence.
          </p>
        </section>

        
      </div>
    </div>
  );
};

export default Homepage;
