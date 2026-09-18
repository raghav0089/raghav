<template>
  <div>
    <projecthero
      pDate="2026"
      pWebsite="layerpath.com"
      pCategory="Agentic AI"
      pHeading="Layerpath"
      pHeadingcolor="color:#1B6B57;"
      pSubheading="Built their agent end to end"
    />

    <div class="p-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_ai" data-aos="reveal-right"></div>
        <picture>
          <img src="~assets/projects/layerpath/main.jpg" alt="Layerpath" />
        </picture>
      </div>
    </div>

    <preface
      timeframe="2026
            <br>Ongoing"
      tools="Python
            <br>LLM APIs
            <br>Node.js / TypeScript"
      purpose="Freelance client"
      role="Agentic AI
            <br>Agent development, end to end"
      team="Solo"
    />

    <projecttimeline timeline="The product" />

    <pcase
      heading="Stop explaining the same workflow"
      para="Layerpath is product education software. You record a workflow once, and it becomes every format a team needs
      afterwards — interactive walkthroughs, step-by-step guides, videos and SOPs.<br><br>
      It is used by product, marketing, sales enablement and customer success teams: the people who otherwise spend their week
      demoing the same five screens, and rewriting the same documentation every time the interface moves."
      theme="theme_dreamz"
    />

    <projecttimeline timeline="The problem worth solving" />

    <pcase
      heading="The gap between recording and documentation"
      para="Recording a workflow is easy. Turning that recording into something a customer can actually follow is not — someone
      has to watch it back, decide where one step ends and the next begins, pull the right screenshot for each, write the
      copy, and then do it again for every format the team needs.<br><br>
      That is where products in this space usually die. It works for the first week, and by week three nobody is doing it any
      more. Closing that gap is what makes the promise hold."
      theme="theme_dreamz"
    />

    <projecttimeline timeline="What I built" />

    <pcase
      heading="1. The agent loop"
      para="I built their agent end to end. The core of it is the loop: give the agent a recording, let it work out what happened,
      and let it call tools to get there rather than trying to answer in one pass.<br><br>
      Written in Python against LLM APIs, with the surrounding service and product-side plumbing in Node.js and TypeScript."
      theme="theme_dreamz"
    />

    <pcase
      heading="2. Recording to steps"
      para="The first real job is segmentation: taking a continuous recording and deciding where the meaningful steps are.
      A step boundary is not just a click — it is the point where what the user is trying to do changes.<br><br>
      Each step then needs the right frame pulled out as its screenshot, and copy that describes the action rather than narrating
      the pixels."
      theme="theme_dreamz"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img src="~assets/projects/layerpath/img1.jpg" alt="Build once, ship every format" />
        </picture>
      </div>
    </div>

    <pcase
      heading="3. One source, every format"
      para="Once a recording has become structured steps, the formats fall out of the same source — an interactive walkthrough,
      a written guide, a video, an SOP.<br><br>
      This is the part that pays off later: when a screen changes, the step is what gets updated, and every format that was built
      from it follows. That is the difference between documentation that survives a redesign and documentation that quietly rots."
      theme="theme_dreamz"
    />

    <pcase
      heading="4. Handling the messy ones"
      para="Real recordings are not clean. People take a wrong turn, backtrack, sit on a loading screen, or record three tasks
      when they meant to record one.<br><br>
      An agent that only works on a tidy demo recording is not shippable, so a good share of the work was in what happens when the
      input is not what the happy path assumed."
      theme="theme_dreamz"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img src="~assets/projects/layerpath/img2.jpg" alt="Layerpath in use" />
        </picture>
      </div>
    </div>

    <pcase
      heading="5. Back into the product"
      para="The agent's output is a starting point, not a final answer, so it has to land somewhere a human can edit it.
      End to end meant carrying the work all the way through: the agent, the services around it, and the path that puts its
      output back into the product where a user picks it up and takes over."
      theme="theme_dreamz"
    />

    <live-link link="https://layerpath.com" text="Visit layerpath.com" />

    <!-- Project Footer Navigation -->
    <div class="project-footer">
      <div class="projects-footer-container">
        <allprojectsnav />
        <div class="p-f-p-container">
          <nuxt-link to="/projects/streerides">
            <pfooterp
              projectName="Stree Rides"
              projectCategories="Product Design"
              thumbnail="/raghav/streerides3.jpg"
            />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/projects/divineheal">
            <pfootern
              projectName="DivinHeal"
              projectCategories="Backend Infrastructure"
              thumbnail="/raghav/divineheal.jpg"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Projecthero from '~/components/projects/projecthero'
import Preface from '~/components/projects/preface'
import Projecttimeline from '~/components/projects/projecttimeline'
import Pcase from '~/components/projects/pcase'
import LiveLink from '~/components/projects/live-link'
import Pfootern from '~/components/projects/pfootern'
import Pfooterp from '~/components/projects/pfooterp'
import Allprojectsnav from '~/components/projects/allprojectsnav'

export default {
  layout: 'projects',
  components: {
    Projecthero,
    Preface,
    Projecttimeline,
    Pcase,
    LiveLink,
    Pfootern,
    Pfooterp,
    Allprojectsnav
  },

  head() {
    return {
      title: 'Layerpath',
      titleTemplate: '%s - Raghav Aggarwal',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Built the agent end to end for Layerpath, product education software that turns one workflow recording into walkthroughs, guides and videos.'
        }
      ]
    }
  }
}
</script>
