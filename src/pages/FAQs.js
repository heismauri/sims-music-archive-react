import React from 'react';
import { Link } from 'react-router-dom';

import SEO from '../utils/SEO';

const FAQs = () => {
  return (
    <div id="faqs">
      <SEO title="FAQs" />
      <h1>Frequently Asked Questions</h1>
      <p>
        We recommend that you read the answers to our frequently asked questions (FAQ) before contacting us or joining
        our Discord server. Many of your questions may have already been answered here.
      </p>
      <div className="accordion" id="accordionSMAFAQs">
        { /* Start faqOne */ }
        <div className="accordion-item bg-light-gray border-0 rounded-4 mb-3">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" aria-expanded="false" data-bs-toggle="collapse"
              data-bs-target="#collapseOne" aria-controls="collapseOne">
              What is Sims Music Archive?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionSMAFAQs">
            <div className="accordion-body pt-0">
              <p>
                Sims Music Archive is a passion project started by two fans who were looking to build the most complete
                collection of music from The Sims and its many spin-off franchises in lossless audio.
              </p>
              <p>
                First and foremost, this project is about preservation. The Sims franchise has had several lackluster
                official releases of its soundtracks, and many tracks have never been made available outside of the
                game. Our philosophy is that these tracks should be available to everyone and preserved forever in the
                highest quality possible.
              </p>
            </div>
          </div>
        </div>
        { /* End faqOne */ }
        { /* Start faqTwo */ }
        <div className="accordion-item bg-light-gray border-0 rounded-4 mb-3">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" aria-expanded="false" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-controls="collapseTwo">
              Where can I download The Sims Original Soundtrack?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionSMAFAQs">
            <div className="accordion-body pt-0">
              <p>
                The goal of this project is to find each track from The Sims in lossless audio. Once we have completed
                this goal, we will be sure to post the soundtrack for download on
                our <Link to="/releases">Releases</Link> page.
              </p>
              <p>
                If you don&apos;t care about audio quality and just want to download the entire soundtrack in variable
                bit rates as they were directly from the game, then this can be downloaded from the
                following <a
                  href="https://archive.org/details/the-sims-complete-soundtrack-collection-20210822-t-072554-z-001">
                    Internet Archive</a> page.
              </p>
            </div>
          </div>
        </div>
        { /* End faqTwo */ }
        { /* Start faqThree */ }
        <div className="accordion-item bg-light-gray border-0 rounded-4 mb-3">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" aria-expanded="false" data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-controls="collapseThree">
              What&apos;s particularly wrong with the in-game files?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionSMAFAQs">
            <div className="accordion-body pt-0">
              <p>
                <strong>Short answer:</strong> Poor choice of codecs and reference material that has been destructively
                tampered by audio engineers.
              </p>
              <p>
                <strong>Long answer:</strong> It&apos;s a case by case scenario depending on the game and the codec
                used. Also the below LONG explanation will give almost a full insight on why this whole project started.
                This is going to get a bit technical but we are going to do our best to explain in a way that everybody
                can understand.
              </p>
              <hr />
              <h5>Mainline series, The Sims 1, 2, 3, 4 (mp3 codec)</h5>
              <p>
                While the vast majority of people are mostly ok with the quality produced by the mp3 codec, it&apos;s
                neither ideal as a codec for today&apos;s standards as it is considered superceded by other better
                quality/efficient codecs (see AAC, OPUS, Vorbis) or it&apos;s failing to meet the quality standards they
                have associated at given bitrate produced by a modern and very well fine-tuned encoder.
              </p>
              <p>
                In the case of The Sims 1 for example, it&apos;s files are 44100Hz at 128kbps. While that sounds good in
                theory, it&apos;s the practice that it&apos;s rather lacking. In 1999-1998 (when the game was in
                development and the in-game files where rendered), the mp3 codec and the available encoders where not
                what they are today. The quality that the mp3 codec is associated today is a product of 20+ years of
                progressive and painstaking fine-tuning by pioneer developers and scientists. So the in-game files of
                The Sims 1 are suffering from bad distortion, limited frequency response, balding spots, bad pre-echo,
                muddy sections and alot more
                issues <a href="https://en.wikipedia.org/wiki/Modified_discrete_cosine_transform">
                MDCT-based codecs</a> are associated with.
              </p>
              <p>
                In the case of The Sims 1 there&apos;s so many tracks that you are completely unable to hear properly
                (weird drums, missing elements) with some of the worst offenders being the Buy Mode tracks and the
                Latin radio tracks.
              </p>
              <p>Here is an example of the issue:</p>
              <p>
                <img src="/music/previews/latin5ingame.jpg" alt="latin5 preview 128kbps mp3" className="rounded-4" />
              </p>
              <p>
                <strong>In-game file (128kbps, mp3)</strong>
              </p>
              <audio controls>
                <source src="/music/previews/latin5ingame.flac" type="audio/flac" />
                Your browser does not support the audio element.
              </audio>
              <p>
                Here is the same track encoded at the same bitrate and codec with the only difference being that
                it&apos;s encoded by an encoder that is 20+ years further in it&apos;s fine tuning so it&apos;s able to
                produce a considerably better quality result.
              </p>
              <p>
                <img src="/music/previews/latin5master.jpg" alt="latin5 preview flac" className="rounded-4" />
              </p>
              <audio controls>
                <source src="/music/previews/latin5master.flac" type="audio/flac" />
                Your browser does not support the audio element.
              </audio>
              <hr />
              <h5>
                6th generation console versions/spinoffs, The Sims 1, 2, Bustin&apos; Out, Urbz (ADPCM codec variants)
              </h5>
              <p>
                There are 2 very distinct issues with the tracks on these games.
              </p>
              <p>
                <strong>1. The ADPCM codec</strong>
              </p>
              <div className="ps-3">
                <p>
                  <a href="https://en.wikipedia.org/wiki/Adaptive_differential_pulse-code_modulation">
                    ADPCM</a> codec variants are considered rather poor in a quality manner and a last resort when it
                  comes for audio that demands quality. It&apos;s being mostly chosen as it&apos;s a very effective way
                  to cut on size/bitrate/memory bandwidth and it requires virtually zero computation power to be decoded
                  by hardware. The biggest issue with ADPCM codecs is dirtortion and noise levels as none of the
                  variants are able to be tuned to a real psychoacoustic model so it&apos;s weaknesses will always be
                  rather crude and audible. Ofcourse, there are ADPCM variants that are more well tuned for the task
                  than others producing considerably better results than others.
                </p>
                <p>
                  In the case of these games, the Gamecube ports are considered the best (Nintendo DSP 4-bit ADPCM),
                  followed by XBOX (Microsoft 4-bit IMA ADPCM) and lastly Playstation2 (Intel DVI 4-bit IMA ADPCM).
                </p>
                <p>
                  Here&apos;s an example of what&apos;s wrong with these files:
                </p>
                <p>
                  <img src="/music/previews/sbo_bb10artifacts.jpg" alt="Artifacts preview" className="rounded-4" />
                </p>
                <audio controls>
                  <source src="/music/previews/sbo_bb10artifacts.flac" type="audio/flac" />
                  Your browser does not support the audio element.
                </audio>
                <p>
                  This file is the original master recording transitioning to the phase inverted ADPCM track resulting
                  in a difference only/subtraction/extraction audio. This way, you can get a better idea of the kinds of
                  distortions the ADPCM codec causes to audio. (Note, we know that is is not a great way to compare
                  audio, but it&apos;s still a quite valid way to get an idea what ADPCM distortion &quot;sounds&quot;
                  like and what you should try to hear when you&apos;re spotting irregularities in ADPCM audio).
                </p>
              </div>
              <p>
                <strong>2. Tracks have been tampered to 24kHz mono</strong>
              </p>
              <div className="ps-3">
                <p>
                  There&apos;s not alot we need to say about this issue. Nobody likes 24kHz (missing highs) or mono
                  audio. Here&apos;s an example of what you&apos;re essentially missing from the following excerpt -
                  The Black Eyed Peas - Friddy Dope (From The Urbz: Sims In The City)
                </p>
                <p>
                  <strong>In-Game file (24hHz mono ADPCM)</strong>
                </p>
                <audio controls>
                  <source src="/music/previews/bepingame.flac" type="audio/flac" />
                  Your browser does not support the audio element.
                </audio>
                <p>
                  <strong>Original Master (44100Hz, 16bit, LPCM)</strong>
                </p>
                <audio controls>
                  <source src="/music/previews/bepmaster.flac" type="audio/flac" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        </div>
        { /* End faqThree */ }
        { /* Start faqFour */ }
        <div className="accordion-item bg-light-gray border-0 rounded-4 mb-3">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" aria-expanded="false" data-bs-toggle="collapse"
              data-bs-target="#collapseFour" aria-controls="collapseFour">
              Will there be a similar project for music from the SimCity franchise?
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionSMAFAQs">
            <div className="accordion-body pt-0">
              <p>
                Currently, we are only looking for music from the mainline games in The Sims franchise, however, we may
                consider expanding our project out to other Maxis / EA properties once we have reached certain
                milestones with the project.
              </p>
              <p>
                We do not plan on making a monopoly out of lossless music research and welcome any parallel projects
                working with similar goals if any exist. Perhaps we can join forces?
              </p>
            </div>
          </div>
        </div>
        { /* End faqFour */ }
        { /* Start faqFive */ }
        <div className="accordion-item bg-light-gray border-0 rounded-4 mb-3">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" aria-expanded="false" data-bs-toggle="collapse"
              data-bs-target="#collapseFive" aria-controls="collapseFive">
              I found lossless music from a Sims game! How can I share this with you?
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionSMAFAQs">
            <div className="accordion-body pt-0">
              <p>
                We are confident that we are already in possession of every single officially released soundtrack album
                from The Sims, its expansions, and other games that came later in the franchise. Please be sure to check
                your lossless music against our <a
                  href="https://docs.google.com/spreadsheets/d/1SicF1MsCvRM8Rwa8nuDLK4SunKjPBWB2Mw2wSgPfJ8I/view">
                    Music Database</a> which will show an up to date list of the music we are actively looking for.
              </p>
              <p>
                Should you think that you are in possession of a track we do not have in lossless quality, then please
                contact us via our <a href="https://discord.gg/r5DNAywy7m"> Discord</a>. We will be sure to analyse the
                audio properly and confirm its legitimacy.
              </p>
            </div>
          </div>
        </div>
        { /* End faqFive */ }
        { /* Start faqSix */ }
        <div className="accordion-item bg-light-gray border-0 rounded-4 mb-3">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" aria-expanded="false" data-bs-toggle="collapse"
              data-bs-target="#collapseSix" aria-controls="collapseSix">
              Are you working with the original composers or performers?
            </button>
          </h2>
          <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionSMAFAQs">
            <div className="accordion-body pt-0">
              <p>
                We can confirm that we are in contact, or are actively trying to get in contact with as many of the
                original composers and performers as we can. We are extremely thankful to all of the contacts we have
                made who have helped us by providing us with lossless masters of some rare tracks.
              </p>
              <p>
                In respect of their privacy we will not be sharing the personal contact details, nor will we be
                revealing their identities should they request to remain anonymous.
              </p>
            </div>
          </div>
        </div>
        { /* End faqSix */ }
      </div>
    </div>
  );
};

export default FAQs;
