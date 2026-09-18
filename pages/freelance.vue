<template>
  <div>
    <div class="a-hero_container">
      <div class="nametag-container contain">
        <div class="example3" data-aos="fade-up" data-aos-duration="900">
          <nuxt-link to="/about" style="text-decoration: none;">
            <span class="underline-magical">Raghav Aggarwal</span>
          </nuxt-link>
        </div>

        <div class="example2" data-aos="fade-up" data-aos-duration="900">
          <nuxt-link to="/projects" style="text-decoration: none;">
            <span class="underline-magical">Projects</span>
          </nuxt-link>
        </div>

        <div class="example" data-aos="fade-up" data-aos-duration="900">
          <a href="mailto:raghavaggarwal0089@gmail.com">
            <span class="underline-magical">Hire me</span>
          </a>
        </div>
      </div>

      <div class="contain a-h-container page-heading">
        <p
          class="pm a-h-subheading"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="200"
        >freelance</p>
        <h1 data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
          I build the
          <span class="outlined">backend</span>
          your product
          <span class="outlined">runs on</span>
        </h1>
        <p
          class="pm a-subheading_2"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="600"
        >APIs, services and infrastructure — shipped by an SDE II at Amazon, on nights and weekends.</p>
      </div>
    </div>

    <pcase
      heading="Hello there!"
      para="I take on a small number of freelance projects alongside my day job as an SDE II at Amazon.
      That constraint is deliberate: fewer clients, more attention, and code that is still standing a year later. <br><br>
      Most of my freelance work is backend — the APIs, integrations and infrastructure that sit under someone else's product.
      I have also shipped full-stack web apps, mobile apps and ML-backed features, so I can take a feature from schema to screen
      when that is what a project needs."
      theme="theme_cricbuzz"
    />

    <pcase
      heading="What I work on"
      para="<b>Backend &amp; distributed systems</b> — APIs, service design, databases, cloud infrastructure and the unglamorous work of
      making things hold up under load. Go, Java and Python. This is the closest thing to my day job, and where I am most useful.<br><br>
      <b>Full-stack web apps</b> — React and Vue front ends on top of those APIs, deployed end to end.<br><br>
      <b>Mobile apps</b> — Flutter and React Native, the same ground my app-competition projects covered.<br><br>
      <b>Agentic AI &amp; LLM features</b> — AI agents that actually do the work: tool use, retrieval and chat interfaces wired into a
      product that already exists, rather than an AI demo that never ships."
      theme="theme_cricbuzz"
    />

    <pcase
      heading="Clients"
      para="A couple of the teams I have built backend systems for."
      theme="theme_cricbuzz"
    />

    <pcase
      heading="1. Layerpath"
      para="Product education software — record a workflow once, and turn it into interactive walkthroughs, step-by-step guides,
      videos and training paths. Their pitch is &lsquo;stop explaining the same workflow&rsquo;, and it is aimed at product,
      sales enablement and customer success teams.<br><br>
      My work was on the backend: APIs, services and the infrastructure underneath."
      theme="theme_cricbuzz"
    />

    <live-link link="https://layerpath.com" text="layerpath.com" />

    <pcase
      heading="2. DivinHeal"
      para="A platform for navigating healthcare and wellness options globally — matching people to trusted medical and
      wellness services, with support through the whole process rather than a directory listing.<br><br>
      Again backend work: APIs, integrations and infrastructure."
      theme="theme_cricbuzz"
    />

    <live-link link="https://www.divinheal.com" text="divinheal.com" />

    <pcase
      heading="How I work"
      para="<b>A scoped first conversation.</b> Tell me what you are building and what is in your way. If I am not the right person,
      I will say so in that first reply rather than three weeks in.<br><br>
      <b>Small, shipped increments.</b> You see working software early and often, not a long silence followed by a big reveal.<br><br>
      <b>Written handover.</b> You get the code, the deployment setup and documentation that lets someone else pick it up.
      No part of your product should depend on me being reachable."
      theme="theme_cricbuzz"
    />

    <pcase
      heading="Get in touch"
      para="Email is best — tell me what you are building, roughly when you need it, and I will reply with whether I can help
      and what it would take."
      theme="theme_cricbuzz"
    />

    <live-link link="mailto:raghavaggarwal0089@gmail.com" text="raghavaggarwal0089@gmail.com" />

    <br />
    <br />
    <br />

    <Footer />
  </div>
</template>

<script>
import Pcase from '~/components/projects/pcase'
import LiveLink from '~/components/projects/live-link'
import Footer from '~/components/footer'

export default {
  components: {
    Pcase,
    LiveLink,
    Footer
  },

  head() {
    return {
      title: 'Freelance',
      titleTemplate: '%s - Raghav Aggarwal',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Freelance backend, full-stack, mobile and ML engineering by Raghav Aggarwal, SDE II at Amazon. Past clients include Layerpath and DivinHeal.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'raghav aggarwal, freelance, freelance developer, backend developer, api development, hire developer'
        }
      ]
    }
  }
}
</script>
