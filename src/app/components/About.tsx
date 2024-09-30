import { Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function About() {
  const showExample = async (e: any) => {
    e.preventDefault();
    if (e.target.className.includes("example1")) {
      e.target.innerText = `Our company builds full stack apps in a fast paced, mostly remote, team environment. Tell me, in detail, if you think Dylan would be a good fit for our company and as what role.`;
      e.target.className = "examples ex1revealed";
    } else if (e.target.className.includes("ex1revealed")) {
      e.target.innerText = `Our company [sells, builds, makes] [product or service] in a [environment description]. Tell me, in lengthy detail, if you think Dylan would be a good fit for our company and as what role.`;
      e.target.className = "examples example1";
    }

    if (e.target.className.includes("example2")) {
      e.target.innerText = `Our saas company wants to leverage the growing AI trend to increase social media engagement on tiktok, instagram and facebook. Give us some cutting edge, outside the box, ideas that Dylan can implement for us based on his previous experience and projects.`;
      e.target.className = "examples ex2revealed";
    } else if (e.target.className.includes("ex2revealed")) {
      e.target.innerText = `Our [company description] company wants to leverage the growing AI trend to increase [profits, social media engagement, user experience] [for, on] our [platforms]. Give us some cutting edge, outside the box, ideas that Dylan can implement for us based on his previous experience and projects.`;
      e.target.className = "examples example2";
    }
  };
  const typing = useRef(null);

  useEffect(() => {
    const typed = new Typed(typing.current, {
      strings: [
        "Full Stack Developer",
        "Prompt Engineer",
        `Check out DylanGPT, the portfolio site of the future`,
        "Read below to find out more",
      ],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const copyText = (e: any) => {
    e.preventDefault();
    // Get the text from the paragraph element
    const text =
      document?.getElementsByClassName(e.target.id)[0].textContent ?? "";
    navigator.clipboard.writeText(text);
  };
  // Copy the text to the clipboard navigator.clipboard.writeText(text);

  // Alert the user that the text was copied alert("Copied to clipboard!"); }
  return (
    <section id='about'>
      <div className='full'>
        <img className='profile-pic' src='/favicon.png' alt='Dylan Kotzer' />
        {/* <img src='/desk.png' alt='Isometric Dylan' className='desk' /> */}
      </div>
      <Typography sx={{ textDecoration: "none" }} variant='h3'>
        Hi, I'm Dylan Kotzer
      </Typography>
      <div className='typed'>
        <h2>
          <span ref={typing}></span>
        </h2>
      </div>
      {/* <p className='gptText'>Full Stack Developer</p> */}
      {/* <a href='/Dylan_Kotzer.pdf'>
        <button className='fa fa-download'>View Resume</button>
      </a> */}
      <div className=''>
        <p className='gptText'>
          {" "}
          Allow me to introduce you to{" "}
          <a href='https://gpt.dylankotzer.com/'>DylanGPT</a>, an advanced
          chatbot built on cutting-edge technology that I developed to be the
          resume of tomorrow. You can use{" "}
          <a href='https://gpt.dylankotzer.com/'>DylanGPT</a> to answer any
          questions you may have about me, including contextualized questions
          about my skills, experience, and projects, and more.
        </p>

        <p className='gptText'>
          {" "}
          <a href='https://gpt.dylankotzer.com/'>DylanGPT</a> is also capable of
          having engaging conversations about a wide range of topics beyond just
          my portfolio. Why not take advantage of this unique opportunity to
          glimpse the future of digital resumes? Chat with{" "}
          <a href='https://gpt.dylankotzer.com/'>DylanGPT</a> to get a better
          understanding of my qualifications and fit for your organization.{" "}
        </p>
        <div className='desk'>
          <a href='https://gpt.dylankotzer.com'>
            <img src='/chatbot.png' alt='DylanGPT' />
            <h1 className='gpt-link'>DylanGPT</h1>
          </a>
        </div>
        <p className='gptText'>
          I strongly encourage you to engage with DylanGPT by asking questions
          and follow-ups to get the most out of your experience. However, if
          you're in need of inspiration, feel free to use the following chat
          template for inspiration.
        </p>
        {/* <div style={{ marginLeft: "12px" }}>
            <div className='exampleHolder'>
              <div onClick={copyText} className='copyBtn' id='ex1'></div>
              <p className='examples ex1 example1' onClick={showExample}>
                {" "}
                Our company [sells, builds, makes] [product or service] in a
                [environment description]. Tell me, in lengthy detail, if you
                think Dylan would be a good fit for our company.
              </p>
            </div> */}
        <p>Click the template box to switch the text to an example.</p>
        <div className='exampleHolder'>
          <div onClick={copyText} className='copyBtn' id='ex2'></div>
          <p className='examples example2 ex2' onClick={showExample}>
            Our [company description] company wants to leverage the growing AI
            trend to increase [profits, social media engagement, user
            experience] [for, on] our [platforms]. Give us some cutting edge,
            outside the box, ideas that Dylan can implement for us, based on his
            previous experience and projects.
          </p>
        </div>
        <p>
          After DylanGPT replies, you can respond with something along the lines
          of:
        </p>
        <div className='exampleHolder'>
          <div onClick={copyText} className='copyBtn' id='21'></div>
          <p className='examples example2 21'>
            {`Tell me how how Dylan's previous projects relate to these ideas.`}
          </p>
        </div>
        <p>
          Next, to see if the projects are real or if DylanGPT is just making
          the up try:
        </p>
        <div className='exampleHolder'>
          <div onClick={copyText} className='copyBtn' id='22'></div>
          <p className='examples example2 22'>
            {`Link me to those projects please.`}
          </p>
        </div>
        <p>
          If you get links that are not clickable, or code as a response, try
          asking DylanGPT to "fix the links please"
        </p>
        <p>
          If you are tired of chat bots you can browse all the same information
          on the <a href='/#/overview'>overview page</a>, or view{" "}
          <a href='/Dylan_Kotzer.pdf'>my resume. </a>
        </p>
      </div>
      {/* <a href='/Dylan_Kotzer.pdf'>
        <button className='fa fa-download'>View Resume</button>
      </a> */}
    </section>
  );
}

// Our fintech company wants to leverage the growing AI
//               trend to increase profits on our web and mobile apps. Give me some ideas that Dylan
//               would be able to implement for us based on his previous experience
//               and projects.

// Our toy store company wants to leverage the growing AI
//               trend to increase engagment on our social media platforms. Give ys some cutting edge ideas that Dylan
//               can implement for us based on his previous experience
//               and projects.
