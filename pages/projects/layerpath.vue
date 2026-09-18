<template>
  <div>
    <projecthero
      pDate="Freelance"
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
          <img src="/raghav/layerpath.png" alt="Layerpath" />
        </picture>
      </div>
    </div>

    <pcase
      heading="The product"
      para="Layerpath is product education software. You record a workflow once, and it becomes every format a team needs afterwards —
      interactive walkthroughs, step-by-step guides, videos and SOPs. Their own line for it is
      &lsquo;stop explaining the same workflow&rsquo;.<br><br>
      It is used by product, marketing, sales enablement and customer success teams, the people who otherwise spend their week
      demoing the same five screens and rewriting the same documentation every time the UI shifts."
      theme="theme_dreamz"
    />

    <pcase
      heading="What I built"
      para="I built their agent, end to end.<br><br>
      That is the part which takes a raw recording and does the work a person would otherwise do by hand: reading what happened in
      the workflow, breaking it into discrete steps with the right screenshots attached, and producing the finished formats out of
      the other side.<br><br>
      End to end meant the whole path — the agent loop itself, the tools it calls, how it handles a recording that does not go
      cleanly, and the plumbing that gets its output back into the product where a user can edit it."
      theme="theme_dreamz"
    />

    <pcase
      heading="Why it mattered"
      para="The gap between &lsquo;we recorded the workflow&rsquo; and &lsquo;we have documentation&rsquo; is where this kind of
      product usually dies — someone still has to assemble each format, so it stops happening by week three.<br><br>
      Closing that gap with an agent is what makes the promise hold: record once, and the formats keep arriving without anyone
      sitting down to make them."
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
              thumbnail="/raghav/divineheal.png"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Projecthero from '~/components/projects/projecthero'
import Pcase from '~/components/projects/pcase'
import LiveLink from '~/components/projects/live-link'
import Pfootern from '~/components/projects/pfootern'
import Pfooterp from '~/components/projects/pfooterp'
import Allprojectsnav from '~/components/projects/allprojectsnav'

export default {
  layout: 'projects',
  components: {
    Projecthero,
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
