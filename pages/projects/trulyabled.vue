<template>
  <div>
    <projecthero
      pDate="2026"
      pWebsite="trulyabled.com"
      pCategory="Kudrat Foundation"
      pHeading="TrulyAbled"
      pHeadingcolor="color:#B4532E;"
      pSubheading="Website, backend and the LLM chat for a disability inclusion platform"
    />

    <div class="p-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_ai" data-aos="reveal-right"></div>
        <picture>
          <img src="~assets/projects/trulyabled/main.jpg" alt="TrulyAbled" />
        </picture>
      </div>
    </div>

    <preface
      timeframe="2026
            <br>Ongoing"
      tools="LLM APIs
            <br>Backend APIs &amp; database
            <br>Edge AI"
      purpose="Kudrat Foundation initiative"
      role="Website
            <br>Backend Developer
            <br>LLM chat"
      team="Solo"
    />

    <projecttimeline timeline="The initiative" />

    <pcase
      heading="We see the person, not the disability"
      para="TrulyAbled is a Kudrat Foundation initiative working on disability inclusion in India. It builds assistive technology
      that runs on Edge AI — on the device itself, without depending on a connection that may not be there — designed alongside
      the people who will use it rather than for them.<br><br>
      It serves three groups: persons with disabilities who want more autonomy, the families and caregivers around them, and the
      NGOs and schools working in the same space. Its position is stated plainly: impairment is not disability, and the barrier is
      usually the infrastructure, not the person."
      theme="theme_dreamz"
    />

    <projecttimeline timeline="What I built" />

    <pcase
      heading="1. The website"
      para="The public face of the initiative — what it is doing, who it is for, and how to reach it.<br><br>
      A site about disability inclusion carries an obligation an ordinary marketing page does not: it has to be usable by the
      people it is written about. Semantics, keyboard paths, contrast and text that a screen reader can actually make sense of
      are not finishing touches here, they are the point. That shapes the build more than any visual decision does."
      theme="theme_dreamz"
    />

    <pcase
      heading="2. The backend"
      para="Behind the site sits the usual, necessary half: APIs and a database holding the content, the solutions catalogue and
      everything arriving from people who get in touch.<br><br>
      The work was in keeping that layer simple enough for a small initiative to run without a platform team behind it — clear
      endpoints, a schema that matches how the organisation actually thinks about its work, and no moving parts that exist only to
      look sophisticated."
      theme="theme_dreamz"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img src="~assets/projects/trulyabled/img1.jpg" alt="A solution in the catalogue, with a Hindi explanation on request" />
        </picture>
      </div>
    </div>

    <pcase
      heading="3. The LLM chat"
      para="I built the LLM chat — a way to ask about disability support in plain language instead of navigating a menu that assumes
      you already know the right vocabulary.<br><br>
      That framing matters for this audience. The person asking may be a caregiver who does not know what the thing they need is
      called, or someone for whom a dense page of links is the barrier. A chat that answers a question as it was actually asked
      removes a step that a conventional site structure quietly demands.<br><br>
      It answers in the language the question arrives in — Hindi, Hinglish or English — and follows up to narrow things down
      before it recommends, because &lsquo;my father had a stroke and can't walk on his own&rsquo; is the start of a conversation,
      not a search query."
      theme="theme_dreamz"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img src="~assets/projects/trulyabled/img3.jpg" alt="The chat answering a caregiver's question in Hinglish" />
        </picture>
      </div>
    </div>

    <pcase
      heading="4. Working with Edge AI"
      para="TrulyAbled's assistive tools are built to run on-device, which is a deliberate constraint rather than a technical
      flourish: connectivity in India is not evenly distributed, and an assistive tool that stops working when the network does
      is not assistive.<br><br>
      That constraint shapes what the surrounding backend is for — supporting the on-device work rather than becoming the thing
      everything depends on."
      theme="theme_dreamz"
    />

    <live-link link="https://www.trulyabled.com" text="Visit trulyabled.com" />

    <!-- Project Footer Navigation -->
    <div class="project-footer">
      <div class="projects-footer-container">
        <allprojectsnav />
        <div class="p-f-p-container">
          <nuxt-link to="/projects/divineheal">
            <pfooterp
              projectName="DivinHeal"
              projectCategories="Backend Infrastructure"
              thumbnail="/raghav/divineheal.jpg"
            />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/projects/GoCorona">
            <pfootern
              projectName="Gocorona"
              projectCategories="App Development competition"
              thumbnail="/raghav/gocorona2.jpg"
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
      title: 'TrulyAbled',
      titleTemplate: '%s - Raghav Aggarwal',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Built the website, backend and LLM chat for TrulyAbled, the Kudrat Foundation disability inclusion platform building Edge AI assistive technology in India.'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Portrait screenshots do not fill the column, and .reveal-holder is an
   inline-block, so without this they sit hard against the left edge. */
.p-image-100-duo {
  text-align: center;
}

.p-image-100-duo img {
  max-width: 100%;
  height: auto;
}
</style>
