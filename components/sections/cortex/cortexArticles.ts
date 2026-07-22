// AUTO-GENERATED data file for The Cortex Printout.
// Add a new issue by pushing ONE object to this array — everything else
// (index cards, article pages, prev/next nav, and the homepage "latest"
// card) is generated from this single source of truth.

export interface CortexArticle {
  num: number;
  id: string; // route / view id, e.g. "cortex-article-13"
  category: string; // e.g. "Mental Health &amp; Performance"
  gradFrom: string; // hex color, gradient start
  gradTo: string; // hex color, gradient end
  badgeBg: string; // rgba(...) for the category badge background
  badgeColor: string; // hex color for the category badge text
  cardColor: string; // hex color for the category label on cards
  title: string; // full article title, may include <br/>
  deck: string; // article hero subtitle
  bylineDate?: string; // optional override, defaults to standard byline
  cardTitle: string; // title shown on index/home cards
  cardExcerpt: string; // teaser paragraph shown on index/home cards
  featuredExcerpt?: string; // optional longer excerpt used only in the pinned "Featured Article" slot
  toc: { href: string; text: string }[];
  keyTakeaways: string[];
  bodyHtml: string; // full <article> inner HTML (sections, FAQ, references)
  // — nav footer (prev/next) is generated, not stored here
}

export const cortexArticles: CortexArticle[] = [
  {
    num: 1,
    id: "cortex-article-1",
    category: "Physical Brain Health",
    gradFrom: "#0A3A6E",
    gradTo: "#0A84C8",
    badgeBg: "rgba(10,132,200,0.25)",
    badgeColor: "#7DD3FC",
    cardColor: "#0A84C8",
    title: "Is Your Brain Healthy?<br/>What Brain Health Is and Why It Matters",
    deck: "The brain controls everything — your thoughts, decisions, emotions, and every involuntary process your body runs. But how many of us actually know whether ours is working well?",
    bylineDate: "Published by EOS · Youth Brain Health Culture Organisation",
    cardTitle: "Is Your Brain Healthy? What Brain Health Is and Why It Matters",
    cardExcerpt:
      "What the brain is, what brain health means, and how to protect yours starting now.",
    featuredExcerpt:
      "The brain controls everything — your thoughts, decisions, emotions, and every function your body carries out. But how many of us actually know whether our brain is working well? This article breaks down what brain health really means, what damages it, and exactly what you can do about it.",
    toc: [
      { href: "#s-intro", text: "Introduction" },
      { href: "#s-what", text: "What Is the Brain?" },
      { href: "#s-health", text: "What Is Brain Health?" },
      { href: "#s-factors", text: "Factors That Affect Brain Health" },
      { href: "#s-signs", text: "Signs of Poor Brain Health" },
      { href: "#s-care", text: "How to Take Care of Your Brain" },
      { href: "#s-faq", text: "FAQs" },
    ],
    keyTakeaways: [
      "The brain is the body's control centre — responsible for thinking, emotions, memory, and all bodily functions.",
      "Brain health is how well your brain functions across thinking, memory, emotions, and behaviour.",
      "Lifestyle factors like nutrition, sleep, exercise, stress, and substance use all shape brain health.",
      "Poor brain health shows through symptoms like memory loss, confusion, mood changes, and headaches.",
      "Protecting your brain requires healthy eating, regular exercise, quality sleep, stress management, and routine check-ups.",
    ],
    bodyHtml: `<section id="s-intro">
        <p class="art-lede">What is the most important part of the body? If you said anything other than the brain, then you need to go back to primary school. Or didn't they teach you in primary school? The brain is the part of the body that controls the rest. It receives information from the other parts of the body and then acts based on that information. When the brain is functioning properly, it takes rational and correct decisions, but when it isn't, it takes some very questionable decisions. Anyone who doubts this has clearly never driven a car in Nigeria. Some drivers drive as if traffic laws do not exist. If you doubt me, come to Ibadan and board a Micra cab. I guarantee you would be holding on for dear life all through the ride.</p>
        <p>On a more serious note, let us answer the first question you need to know.</p>
      </section>
      <section id="s-what">
        <h2>What Is the Brain?</h2>
        <p>The brain is a complex organ that controls all thoughts, emotions, decisions, and body processes. The brain is the control center of the body. The brain controls all body processes, including involuntary processes such as blood circulation and kidney filtration, which is a good thing because some of you would decide to stop your kidneys from filtering your blood if you could, or stop your heart because you were served breakfast. If you are in this category, change your ways.</p>
        <p>In case you are among those asking where is the brain located in the head, the brain is housed in the cranium (skull, village person).</p>
        <div class="art-callout art-callout-blue">
          <div class="art-callout-icon">🧠</div>
          <div>The brain weighs roughly 1.4 kg and consumes about 20% of the body's total energy — despite being only 2% of your body weight.</div>
        </div>
      </section>
      <section id="s-health">
        <h2>What Is Brain Health?</h2>
        <p>Brain health is the brain's ability to function properly across thinking, memory, emotions, and behaviour. You cannot separate the brain from health. According to the World Health Organisation, brain health is <em>"the state of brain functioning across cognitive, sensory, social-emotional, behavioural, and motor domains, allowing a person to realize their full potential over the life course, irrespective of the presence or absence of disorders."</em> Brain health simply refers to the overall well-being of the brain. It examines whether the brain is functioning properly or like that of Lagosians. Don't argue, you know it's true.</p>
        <p>Proper brain health means the brain is receiving the proper nutrition, it is not being damaged by drugs and alcohol, it is carrying out its functions smoothly and properly, and if its decision-making is not compromised (Hence the jab at Lagosians).</p>
        <p>Now that we have seen what the brain is and what brain health is, there is another important question to ask.</p>
      </section>
      <section id="s-factors">
        <h2>What Are the Factors That Affect Brain Health?</h2>
        <p>Certain factors affect brain health. Or did you think the brain just decides to be healthy or unhealthy?</p>
        <h3>Physical Health</h3>
        <p>Brain and health walk side by side. Factors that affect physical health will definitely affect brain health. Proper nutrition is one of the most important things to consider in brain health. It is not just enough to eat, but to eat the right foods in the proper amounts. So, you who eats as if you won't eat again, more power to your elbows. The brain needs proper nutrition to function, so it is very important to eat well.</p>
        <p>Exercise is also important. It improves blood flow to the brain, helps the body to deal with anxiety, and reduces the risk of hypertension and obesity, which are important risk factors for diseases that affect the brain, such as stroke.</p>
        <p>Other important areas to understand are sleep and hydration. Yes, hydration, did you think the brain does not need water? It does. Water helps to deliver the nutrients that the brain needs. Sleep allows the brain to rest and relax. It provides an opportunity for the brain to recharge itself and recuperate.</p>
        <h3>Mental Health</h3>
        <p>Obviously, this would definitely affect the brain. Emotional factors like stress and social isolation play a very important role in brain health. They can lead to mental conditions like depression or anxiety disorders. They also increase the risk factors for physical conditions like hypertension and even stroke.</p>
        <h3>Lifestyle Habits</h3>
        <p>You cannot imagine that someone who drinks to stupor regularly, abuses drugs frequently, and smokes like a chimney will have a healthy brain. The harmful materials get into the blood supply and damage the brain. To attain proper neurological health, there is a need to avoid or at least reduce the intake of these substances for proper brain well-being.</p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">⚠️</div>
          <div>Alcohol, drugs, and cigarettes do not just affect your body — they cross the blood-brain barrier and alter how your brain functions, sometimes permanently.</div>
        </div>
      </section>
      <section id="s-signs">
        <h2>What Are the Signs That the Brain Is Not Healthy?</h2>
        <p>The signs of poor brain health include memory loss, frequent and unexplained headaches, sleeping problems, sudden confusion and dizziness, and in some cases, behavioural changes, especially increased aggression.</p>
      </section>
      <section id="s-care">
        <h2>How Do I Take Care of My Brain?</h2>
        <p>This is a question you should have been asking, but better late than never. Or don't you want to know what improves brain health?</p>
        <h3>Healthy Nutrition</h3>
        <p>The brain burns a lot of calories in carrying out its duties, so there is a need to eat properly. I did not say you should be eating like a thief. Moderation is very important. It is not just enough to eat; some nutrients are very helpful for the brain. Foods that are good for the brain include green vegetables, foods rich in Omega-3 fatty acids, such as freshwater fish, such as Salmon and sardines. For those allergic to seafood or vegans, chia seeds, walnuts, and flax seeds are very good plant sources of Omega-3 fatty acids. Ensure your diet contains food rich in Vitamins B, C, and D, antioxidants, and Vitamin K. Avoid processed food and very fatty or salted food.</p>
        <h3>Regular Exercise</h3>
        <p>Exercise is very good for cognitive health. Physical exercise helps to reduce the risks of illnesses that are detrimental to brain health e.g Diabetes and obesity. It also helps to combat mental conditions such as anxiety and depression.</p>
        <p>Exercise is not only physical, but there are also mental exercises as well. If you can build your muscles in the gym, you can also sharpen your brain. Mental activities like solving puzzles, reading about something new, and learning new skills really go a long way in sharpening the brain. They engage the brain and help to sharpen it to make it more effective.</p>
        <h3>Sleep, Rest, and Stress Management</h3>
        <p>These are crucial for proper neurological wellness. When you get enough sleep and rest, the brain is able to recharge and recuperate itself. Sleep also provides the brain enough time to repair damage. Inadequate sleep and rest lead to an overworked brain. While this may be manageable in the short run, like during exam periods, in the long run, it leads to mental issues like burnout and exhaustion.</p>
        <p>In addition to these, find ways of managing stress. It could be as simple as curling up on the couch with a novel or listening to soothing music (I recommend Pachelbel's Canon in D) or going for a walk. If you are the outgoing type, you could find a place to hang out with your friends and gossip about the latest things in your lives. Find an activity to help you unwind or loosen up. This gives your brain some space to breathe and prevents the stress from building up.</p>
        <h3>Regular Check-ups</h3>
        <p>Find ways to go for regular check-ups. Check your blood pressure and blood sugar regularly. When you can, visit the hospital and run tests on yourself. It is always better to be safe than sorry.</p>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">💡</div>
          <div>If you are unsure of where you can get proper advice on issues relating to brain health or you need the services of a trained professional, kindly visit our website or reach out to us, and we will be very happy to guide you.</div>
        </div>
        <p>The brain is the most important part of the body, and it should be treated with care. Ensuring that the brain is healthy should be a priority for everyone. The brain is too important to treat with levity, so taking care of it is unavoidable. To take care of your brain, eat right, exercise, and deal with stress and anxiety, so my question to you, my dear reader, is this: Will you take care of your brain or not?</p>
      </section>
      <section id="s-faq">
        <h2>Frequently Asked Questions</h2>
        <div class="art-faq">
          <div class="art-faq-item">
            <div class="art-faq-q">What is brain health?</div>
            <div class="art-faq-a">Brain health is the overall ability of the brain to function properly, including thinking, memory, learning, emotions, and behaviour. A healthy brain allows you to perform daily tasks, make decisions, and interact effectively with others.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">How do I know if my brain is healthy?</div>
            <div class="art-faq-a">A healthy brain is reflected in good memory, clear thinking, stable mood, good concentration, and the ability to learn and solve problems. Frequent confusion, memory loss, or major mood changes may be signs that something is wrong.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">What foods improve brain health?</div>
            <div class="art-faq-a">Foods that support brain health include leafy green vegetables, fatty fish (like salmon and sardines), nuts (such as walnuts), seeds (chia and flax seeds), fruits, and foods rich in vitamins B, C, D, and antioxidants.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Can sleep affect brain health?</div>
            <div class="art-faq-a">Yes. Sleep is very important for brain health because it allows the brain to rest, repair itself, and store memories. Poor sleep can lead to poor concentration, mood problems, and reduced mental performance.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">What damages the brain?</div>
            <div class="art-faq-a">The brain can be damaged by excessive alcohol intake, drug abuse, poor nutrition, lack of sleep, high stress, head injuries, and untreated health conditions like high blood pressure and diabetes.</div>
          </div>
        </div>
      </section>
      <div class="art-references">
        <div class="art-ref-title">References</div>
        <ol class="art-ref-list">
          <li>National Academies of Sciences, Engineering, and Medicine. <em>Brain Health Across the Life Span.</em> 2020. https://www.ncbi.nlm.nih.gov/books/NBK551718/</li>
          <li>World Health Organization (WHO). <em>Brain Health.</em> https://www.who.int/health-topics/brain-health#tab=tab_1</li>
          <li>National University of Health Sciences. <em>The Importance of Hydration: Fuel for Your Body and Brain.</em> https://www.nuhs.edu/the-importance-of-hydration-fuel-for-your-body-and-brain/</li>
          <li>National Institutes of Health (NIH), Office of Dietary Supplements. <em>Omega-3 Fatty Acids Fact Sheet for Consumers.</em> https://ods.od.nih.gov/factsheets/Omega3FattyAcids-Consumer/</li>
          <li>Harvard Health Publishing. <em>Foods linked to better brainpower.</em> https://www.health.harvard.edu/healthbeat/foods-linked-to-better-brainpower</li>
        </ol>
      </div>`,
  },
  {
    num: 2,
    id: "cortex-article-2",
    category: "Physical Brain Health",
    gradFrom: "#3A1A70",
    gradTo: "#5B3FA0",
    badgeBg: "rgba(91,63,160,0.25)",
    badgeColor: "#C4B5FD",
    cardColor: "#5B3FA0",
    title: "What Are Migraines and Why Do You Keep Getting Them?",
    deck: "Many of us call every bad headache a migraine. But migraines are something else entirely — a neurological condition with stages, triggers, and patterns that are worth understanding.",
    bylineDate: "Published by EOS · Youth Brain Health Culture Organisation",
    cardTitle: "What are Migraines and Why Do You Keep Getting Them?",
    cardExcerpt:
      "Migraines are more than headaches. Understand the stages, the triggers, and how to manage them effectively.",
    toc: [
      { href: "#m-intro", text: "Introduction" },
      { href: "#m-what", text: "What Is a Migraine?" },
      { href: "#m-diff", text: "Migraine vs Headache" },
      { href: "#m-stages", text: "Stages of a Migraine" },
      { href: "#m-triggers", text: "What Triggers Migraines?" },
      { href: "#m-types", text: "Types of Migraines" },
      { href: "#m-cure", text: "Are Migraines Curable?" },
      { href: "#m-doctor", text: "When to See a Doctor" },
      { href: "#m-faq", text: "FAQs" },
    ],
    keyTakeaways: [
      "Migraines are neurological conditions, not just bad headaches. They can cause severe pain, nausea, and sensitivity to light and sound.",
      "Migraines often occur in four stages: prodrome, aura, headache, and postdrome — each with distinct symptoms.",
      "Poor sleep, stress, dehydration, skipping meals, alcohol, and bright lights can all trigger migraines.",
      "Migraines cannot always be permanently cured, but they can be managed through medication and lifestyle changes.",
      "Frequent or severe migraines should never be ignored. Early medical attention prevents complications.",
    ],
    bodyHtml: `<section id="m-intro">
        <p class="art-lede">When many of us hear the word migraine, we automatically assume headache. While headaches are a part of migraines, migraines are more than just headaches. Many of us erroneously say we are having a migraine when we are having a simple headache. So, for our proper education — what exactly is a migraine?</p>
      </section>
      <section id="m-what">
        <h2>What Is a Migraine?</h2>
        <p>A migraine is a neurological condition that usually causes severe, throbbing headaches, often along with symptoms such as nausea, sensitivity to light, and sensitivity to sound. The headache gets worse with bright lights, physical activity, and loud noises.<sup>[1]</sup> Migraines can last anywhere from 2–3 hours to 2–3 days.<sup>[2]</sup></p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">🧠</div>
          <div>Migraines are one of the world's most disabling conditions. The WHO lists migraine among the top 10 causes of disability worldwide.</div>
        </div>
      </section>
      <section id="m-diff">
        <h2>What Is the Difference Between a Migraine and a Headache?</h2>
        <p>A regular headache may feel like pressure or pain in different parts of the head, while migraines are often more intense and commonly involve throbbing pain. A headache is usually short and over in a couple of hours, while a migraine can last as long as two days.<sup>[3]</sup></p>
        <p>Here is the important thing to note: a headache generally refers to pain in the head, but a migraine is a specific type of headache. <strong>All migraines are headaches, but not all headaches are migraines.</strong> Migraines come with a throbbing, pulsing pain usually felt on one side of the head.</p>
      </section>
      <section id="m-stages">
        <h2>What Are the Stages of a Migraine?</h2>
        <p>A migraine has four stages.</p>
        <h3>1. Prodrome</h3>
        <p>This stage occurs about 24 hours before the headache. It displays symptoms like mood changes, trouble sleeping, loss of concentration, neck stiffness, intense food cravings, and frequent thirst as well as urination.<sup>[1]</sup></p>
        <h3>2. Aura</h3>
        <p>This stage refers to the warning signs of the impending headache. These signs can affect the senses, movement, or speech. Symptoms include sensitivity to touch, ringing in the ears, muscle weakness, vision changes, numbness, and tingling. This stage can be as short as five minutes or as long as an hour.</p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">💡</div>
          <div><strong>Silent Migraine:</strong> A condition where aura presents itself without any headache at all. No pain, but all the sensory warning signs are present.</div>
        </div>
        <h3>3. Headache</h3>
        <p>As the name suggests, this involves a headache that can be mild or severe. The pain is often described as throbbing or pulsing and is usually felt on one side of the head — though it can be felt on both sides and even all over the head. It comes with nausea, vomiting, and sensitivity to light and sound. It is best to take your prescribed pain relievers as soon as the headache starts.<sup>[3]</sup></p>
        <h3>4. Postdrome</h3>
        <p>This occurs after the headache has come and gone. It is similar to a hangover — sometimes called the "migraine hangover." Symptoms are similar to the prodrome stage and may take hours or even days to disappear.<sup>[3]</sup></p>
      </section>
      <section id="m-triggers">
        <h2>What Are the Habits That Make Migraines More Likely?</h2>
        <p>While the exact cause of migraines is not fully known, several factors can make them occur more frequently.</p>
        <h3>Lifestyle Factors</h3>
        <p>Poor sleeping habits, dehydration, skipping meals, and fatigue make a person significantly more likely to experience migraines frequently.</p>
        <h3>Dietary Factors</h3>
        <p>Consumption of alcohol, drugs, and excessive caffeine — especially when combined with bad sleeping habits — can make migraines more recurrent.</p>
        <h3>Environmental Factors</h3>
        <p>Frequent and repeated exposure to loud music, bright lights, and strong smells are factors that can increase the occurrence of migraines.</p>
        <div class="art-callout art-callout-blue">
          <div class="art-callout-icon">⚠️</div>
          <div>Keeping a migraine diary — noting what you ate, how you slept, and what you were doing before each attack — is one of the most effective ways to identify your personal triggers.</div>
        </div>
      </section>
      <section id="m-types">
        <h2>What Are the Types of Migraines?</h2>
        <p>There are two main types of migraines, plus several less common variants.</p>
        <h3>Migraine With Aura (Classic Migraine)</h3>
        <p>This is a recurring headache that happens with or immediately after the aura stage. Symptoms include visual disturbances such as seeing blind spots, shimmering spots, flashes of light, or vision loss. Other symptoms include tingling in one arm or one side of the face, difficulty speaking, hearing loss, and in some cases, partial paralysis.<sup>[4]</sup></p>
        <h3>Migraine Without Aura</h3>
        <p>This is the more common type. It occurs without the aura stage and can last for hours or even days without effective treatment. Symptoms include throbbing pain on one side of the head, nausea and vomiting, and sensitivity to light and sound.<sup>[5]</sup></p>
        <h3>Other Types</h3>
        <p>Other recognised types include: migraines in children; chronic migraine (headache on at least 15 days per month)<sup>[6]</sup>; silent migraine (migraine without headache)<sup>[7]</sup>; and menstrual migraine, caused by the drop in oestrogen levels during the menstrual period.<sup>[8]</sup></p>
      </section>
      <section id="m-cure">
        <h2>Are Migraines Curable?</h2>
        <p>Unfortunately, migraines are not 100% curable, but they are usually managed effectively with medication. Doctors typically prescribe pain relievers and anti-nausea medications. However, it is equally important to address the lifestyle stressors that increase the likelihood of recurrence — eating properly, getting enough rest and sleep, reducing alcohol and caffeine intake, and staying away from environments with bright lights or loud noises.</p>
      </section>
      <section id="m-doctor">
        <h2>When to See a Doctor</h2>
        <p>If the pain is getting unbearable or is sudden and head-splitting, see a doctor immediately. If migraines are becoming more frequent, also seek medical attention as soon as possible. Migraines can sometimes be a sign of a more serious underlying condition. Resist the urge to self-medicate with pain relievers and get properly diagnosed.</p>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">🏥</div>
          <div>If you need guidance on where to access proper neurological care, reach out to EOS and we will help point you in the right direction.</div>
        </div>
        <p>Migraines are a serious condition, and it is important to treat them as such. Always pay attention to your head. If something feels off, don't hesitate to see a doctor.</p>
      </section>
      <section id="m-faq">
        <h2>Frequently Asked Questions</h2>
        <div class="art-faq">
          <div class="art-faq-item">
            <div class="art-faq-q">What is the main cause of migraines?</div>
            <div class="art-faq-a">The exact cause of migraines is not fully understood. Researchers believe they are linked to abnormal brain activity involving nerves, blood vessels, and brain chemicals. Factors like stress, poor sleep, dehydration, hormonal changes, and genetics can all increase the likelihood.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">How do I know if I have a migraine or just a headache?</div>
            <div class="art-faq-a">A regular headache usually causes mild to moderate pain and may go away quickly. A migraine is often more severe and may come with nausea, vomiting, sensitivity to light, sensitivity to sound, dizziness, or visual disturbances.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">How long can a migraine last?</div>
            <div class="art-faq-a">Migraines can last anywhere from a few hours to several days. Some people recover quickly, while others may experience lingering fatigue or difficulty concentrating even after the headache itself is gone.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Can stress trigger migraines?</div>
            <div class="art-faq-a">Yes. Stress is one of the most common migraine triggers. Emotional pressure, anxiety, mental exhaustion, and lack of rest can all increase the risk of migraine attacks.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Are migraines hereditary?</div>
            <div class="art-faq-a">Yes. Migraines can run in families. People with a family history of migraines are more likely to experience them themselves.</div>
          </div>
        </div>
      </section>
      <div class="art-references">
        <div class="art-ref-title">References</div>
        <ol class="art-ref-list">
          <li>Cleveland Clinic. <em>Migraine Headaches.</em> 2024. https://my.clevelandclinic.org/health/diseases/5005-migraine-headaches</li>
          <li>World Health Organization (WHO). <em>Headache Disorders.</em> 2024. https://www.who.int/news-room/fact-sheets/detail/headache-disorders</li>
          <li>The Migraine Trust. <em>Stages of a Migraine Attack.</em> 2023. https://migrainetrust.org/understand-migraine/stages-of-a-migraine-attack/</li>
          <li>Mayo Clinic. <em>Migraine with Aura: Symptoms and Causes.</em> 2024. https://www.mayoclinic.org/diseases-conditions/migraine-with-aura/symptoms-causes/syc-20352072</li>
          <li>The Migraine Trust. <em>Migraine Without Aura.</em> 2023. https://migrainetrust.org/understand-migraine/types-of-migraine/migraine-without-aura/</li>
          <li>Cleveland Clinic. <em>Chronic Migraine.</em> 2024. https://my.clevelandclinic.org/health/diseases/9638-chronic-migraine</li>
          <li>Cleveland Clinic. <em>Silent Migraine.</em> 2024. https://my.clevelandclinic.org/health/diseases/silent-migraine</li>
          <li>Cleveland Clinic. <em>Menstrual Migraines (Hormone Headaches).</em> 2024. https://my.clevelandclinic.org/health/diseases/8260-menstrual-migraines-hormone-headaches</li>
        </ol>
      </div>`,
  },
  {
    num: 3,
    id: "cortex-article-3",
    category: "Physical Brain Health",
    gradFrom: "#006A58",
    gradTo: "#00BFA5",
    badgeBg: "rgba(0,191,165,0.2)",
    badgeColor: "#5EEAD4",
    cardColor: "#00BFA5",
    title:
      "What Are Seizures and Epilepsy? Causes, Types, and Treatment Explained",
    deck: "For centuries, seizures were mistaken for spiritual attacks. Today we know the truth. Here is what epilepsy actually is, what causes it, and what to do when someone has a seizure near you.",
    bylineDate: "Published by EOS · Youth Brain Health Culture Organisation",
    cardTitle:
      "What Are Seizures and Epilepsy? Causes, Types, and Treatment Explained",
    cardExcerpt:
      "Separating myth from medicine — what seizures really are, what causes epilepsy, and how to respond when it happens.",
    toc: [
      { href: "#e-intro", text: "Introduction" },
      { href: "#e-seizure", text: "What Is a Seizure?" },
      { href: "#e-epilepsy", text: "What Is Epilepsy?" },
      { href: "#e-causes", text: "Causes and Risk Factors" },
      { href: "#e-types", text: "Types of Seizures" },
      { href: "#e-diagnosis", text: "Diagnosis" },
      { href: "#e-treatment", text: "Treatment" },
      { href: "#e-firstaid", text: "Seizure First Aid" },
      { href: "#e-faq", text: "FAQs" },
    ],
    keyTakeaways: [
      "A seizure is a sudden burst of abnormal electrical activity in the brain. Epilepsy is the disorder characterised by recurrent, unprovoked seizures.",
      "Not all seizures involve convulsions. Not everyone who has a seizure has epilepsy.",
      "Causes include head injuries, infections, stroke, genetic factors, and developmental conditions.",
      "Epilepsy can often be effectively managed through medications, dietary changes, devices, or surgery.",
      "Knowing proper seizure first aid and challenging harmful myths can save lives and reduce stigma.",
    ],
    bodyHtml: `<section id="e-intro">
        <p class="art-lede">The brain and nervous system communicate with electrical and chemical signals. When these signals originate from the right places and reach the right destinations, everything runs smoothly. But just like with all electrical systems, there are misfires. These abnormal electrical disturbances can lead to episodes known as seizures — and depending on the area of the brain involved, they may affect movement, awareness, emotions, behaviour, or sensation.</p>
        <p>Many of us have seen people suffer from seizures. In Africa, these episodes are often associated with spiritual attacks. Victims have been kept in spiritual houses, starved, chained, and beaten in attempts to "exorcise" what is, in fact, a medical condition. Proper education changes that.</p>
      </section>
      <section id="e-seizure">
        <h2>What Are Seizures?</h2>
        <p>A seizure is the uncontrolled, abnormal electrical activity of the brain that may cause changes in the level of consciousness, behaviour, memory, or feelings.<sup>[1]</sup> While the involuntary, jerking movements are the most recognisable type, there are many other types of seizures — not all of which look dramatic from the outside.</p>
      </section>
      <section id="e-epilepsy">
        <h2>What Is Epilepsy?</h2>
        <p>Epilepsy is a chronic noncommunicable disease of the brain that affects around 50 million people worldwide.<sup>[2]</sup> A major symptom of epilepsy is recurrent seizures. However, not everyone who has a seizure is epileptic. Epilepsy is diagnosed when there are two or more unprovoked seizures. While there is a relationship between seizures and epilepsy, the presence of seizures alone does not confirm epilepsy.</p>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">📌</div>
          <div>Epilepsy is a medical condition — not a spiritual attack, curse, or punishment. This distinction matters enormously for how patients are treated and whether they seek care.</div>
        </div>
      </section>
      <section id="e-causes">
        <h2>What Causes Seizures and Epilepsy?</h2>
        <p>Seizures occur when there is a sudden burst of abnormal electrical activity in the brain. The exact cause remains unknown in many cases. Several factors can increase risk:</p>
        <h3>Head Injuries</h3>
        <p>Traumatic brain injuries from road accidents, falls, sports injuries, or violence can damage brain tissue and disrupt normal electrical activity. Seizures may occur immediately after the injury or develop months or even years later.</p>
        <h3>Brain Infections</h3>
        <p>Infections such as meningitis, encephalitis, cerebral malaria, and neurocysticercosis can trigger seizures by causing inflammation or scarring in the brain.</p>
        <h3>Stroke and Blood Vessel Disorders</h3>
        <p>Stroke is one of the leading causes of seizures in older adults. When blood flow to part of the brain is interrupted, brain cells may become damaged in ways that lead to seizure activity.</p>
        <h3>Genetic Factors</h3>
        <p>Some forms of epilepsy are linked to inherited genetic changes that affect how brain cells communicate. Having a family history of epilepsy may increase a person's risk, although not everyone with a genetic predisposition will develop the condition.</p>
        <h3>Brain Tumours and Structural Abnormalities</h3>
        <p>Brain tumours, developmental abnormalities present at birth, and other structural changes in the brain can interfere with normal nerve signalling.</p>
        <h3>Birth and Developmental Conditions</h3>
        <p>Complications during pregnancy, labour, or delivery that deprive the brain of oxygen may increase the risk of epilepsy later in life. Certain developmental disorders, including cerebral palsy and autism spectrum disorder, are also associated with a higher incidence of seizures.</p>
        <h3>Metabolic and Medical Conditions</h3>
        <p>Medical problems that affect the body's chemical balance — including low blood sugar, electrolyte imbalances, kidney failure, liver disease, and severe dehydration — can sometimes result in seizures.</p>
        <div class="art-callout art-callout-blue">
          <div class="art-callout-icon">⚠️</div>
          <div><strong>Common seizure triggers</strong> for people who already have epilepsy include: lack of sleep, emotional stress, excessive alcohol, flashing lights, illness, fever, and missing prescribed medication doses. These do not cause epilepsy itself — they can provoke episodes in those already affected.</div>
        </div>
      </section>
      <section id="e-types">
        <h2>What Are the Types of Seizures?</h2>
        <p>There are two major categories of seizures.</p>
        <h3>Focal Seizures</h3>
        <p>These originate from only one part of the brain and are more common. They are described by the region they originate from — frontal lobe seizures, occipital lobe seizures, etc. They can cause changes in movement, sensation, or consciousness on one side of the body. Focal seizures can spread to the other side of the brain, at which point symptoms are seen on both sides.<sup>[3]</sup></p>
        <h3>Generalised Seizures</h3>
        <p>These originate from both hemispheres of the brain and often impair consciousness. They are less common than focal seizures.<sup>[4]</sup> Subtypes include:</p>
        <ul style="margin:12px 0 12px 20px;line-height:1.8">
          <li><strong>Absent seizures</strong> — a loss of consciousness causing the person to blank out and stare into space for a brief period.<sup>[5]</sup></li>
          <li><strong>Atonic seizures</strong> — causes the patient to lose muscle tone and drop suddenly to the floor.<sup>[6]</sup></li>
          <li><strong>Tonic seizures</strong> — causes stiffness in the muscles of the arms, legs, and trunk. Mostly occurs during sleep but can cause falls if it happens while the person is awake.<sup>[7]</sup></li>
        </ul>
      </section>
      <section id="e-diagnosis">
        <h2>How Are Seizures and Epilepsy Diagnosed?</h2>
        <p>Diagnosis involves a combination of brain imaging tests such as MRIs or CT scans, blood tests to rule out infections, and in some cases, spinal fluid analysis. The doctor will examine results alongside a detailed account of the seizure episodes.<sup>[8]</sup></p>
      </section>
      <section id="e-treatment">
        <h2>How Are Seizures and Epilepsy Treated?</h2>
        <p>Treatment involves a combination of anti-seizure medication, dietary changes, anti-seizure devices, and in some cases, surgery.</p>
        <h3>Anti-Seizure Medication</h3>
        <p>Medication aims to reduce the frequency of seizures and is effective in 2 out of 3 patients. The main challenge is identifying which combination works best for each individual. Common medications include lamotrigine, levetiracetam, carbamazepine, phenytoin, and valproate.<sup>[9]</sup></p>
        <h3>Anti-Seizure Devices</h3>
        <p>These fall into two types: seizure detectors that identify when a seizure is about to happen, and neuromodulation devices that use nerve stimulation to prevent seizures from occurring.<sup>[10][11]</sup></p>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">💡</div>
          <div>With proper diagnosis, treatment, and community support, many people living with epilepsy lead full, healthy, and productive lives. The key is early intervention.</div>
        </div>
      </section>
      <section id="e-firstaid">
        <h2>What Should I Do If Someone Is Having a Seizure Near Me?</h2>
        <ul class="art-firstaid-list">
          <li>If they appear to be falling, ease their fall gently and prevent injury.</li>
          <li>If the person is lying down, turn them gently on their side with their mouth pointing to the ground to keep their airway clear.</li>
          <li>Remove any objects nearby that could cause injury.</li>
          <li>Check if they are wearing a medical bracelet or carrying any information about their condition.</li>
          <li>If the seizure lasts more than 5 minutes, call for emergency medical attention.</li>
          <li>When the seizure is over, get them to a comfortable position and calmly explain what happened.</li>
          <li>If they are outside, help them get home safely or call someone who can.</li>
        </ul>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">🚫</div>
          <div><strong>DO NOT put any object in their mouth during a seizure.</strong> This is a dangerous myth that can cause serious injury to their jaw, teeth, and your own hand.</div>
        </div>
      </section>
      <section id="e-faq">
        <h2>Frequently Asked Questions</h2>
        <div class="art-faq">
          <div class="art-faq-item">
            <div class="art-faq-q">Are seizures and epilepsy the same thing?</div>
            <div class="art-faq-a">No. A seizure is a sudden burst of abnormal electrical activity in the brain. Epilepsy is a neurological disorder characterised by recurrent, unprovoked seizures. All people with epilepsy experience seizures, but not everyone who has a seizure has epilepsy.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">What should I do if someone is having a seizure?</div>
            <div class="art-faq-a">Stay calm and protect the person from injury. Move dangerous objects away, gently turn them onto their side if possible, and time the seizure. Do not restrain their movements or put anything in their mouth. Seek emergency care if the seizure lasts longer than five minutes.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">What are common seizure triggers?</div>
            <div class="art-faq-a">Common triggers include lack of sleep, emotional stress, alcohol use, flashing lights, illness, fever, and missing prescribed anti-seizure medications. Triggers vary from person to person.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Can epilepsy be cured?</div>
            <div class="art-faq-a">Some people, particularly children with certain types of epilepsy, may eventually become seizure-free and no longer require treatment. For others, epilepsy is a long-term condition that can be effectively managed with the right treatment plan.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">When should I see a doctor about a seizure?</div>
            <div class="art-faq-a">Seek immediate medical evaluation after a first seizure. Also seek attention if seizures become more frequent, last longer than usual, occur repeatedly without recovery between episodes, or result in injury.</div>
          </div>
        </div>
      </section>
      <div class="art-references">
        <div class="art-ref-title">References</div>
        <ol class="art-ref-list">
          <li>StatPearls Publishing. <em>Seizure (NBK430765).</em> https://www.ncbi.nlm.nih.gov/books/NBK430765/</li>
          <li>World Health Organization (WHO). <em>Epilepsy – Fact Sheet.</em> https://www.who.int/news-room/fact-sheets/detail/epilepsy</li>
          <li>Cleveland Clinic. <em>Seizure: Symptoms, Causes, Treatment &amp; More.</em> https://my.clevelandclinic.org/health/diseases/22789-seizure</li>
          <li>NCBI / PMC. <em>Article on Epilepsy/Seizure Mechanisms.</em> https://pmc.ncbi.nlm.nih.gov/articles/PMC1071497/</li>
          <li>StatPearls Publishing. <em>Epilepsy (NBK499867).</em> https://www.ncbi.nlm.nih.gov/books/NBK499867/</li>
          <li>ScienceDirect. <em>Atonic Seizure – Topic Overview.</em> https://www.sciencedirect.com/topics/pharmacology-toxicology-and-pharmaceutical-science/atonic-seizure</li>
          <li>Johns Hopkins Medicine. <em>Tonic and Clonic Seizures.</em> https://www.hopkinsmedicine.org/health/conditions-and-diseases/epilepsy/tonic-and-clonic-seizures</li>
          <li>Mayo Clinic. <em>Seizure: Diagnosis &amp; Treatment.</em> https://www.mayoclinic.org/diseases-conditions/seizure/diagnosis-treatment/drc-20365730</li>
          <li>NCBI / PMC. <em>Antiseizure Medications and Management Review.</em> https://pmc.ncbi.nlm.nih.gov/articles/PMC11046222/</li>
          <li>Journal of Clinical Medicine (PMC). <em>Neuromodulation and Seizure Detection Devices.</em> https://pmc.ncbi.nlm.nih.gov/articles/PMC11818620/#sec12-jcm-14-00863</li>
          <li>Epilepsy Foundation. <em>Seizure Treatment Devices.</em> https://www.epilepsy.com/treatment/devices</li>
        </ol>
      </div>`,
  },
  {
    num: 4,
    id: "cortex-article-4",
    category: "Mental Health &amp; Performance",
    gradFrom: "#1A3A1A",
    gradTo: "#2D6A2D",
    badgeBg: "rgba(76,175,80,0.2)",
    badgeColor: "#A5D6A7",
    cardColor: "#4CAF50",
    title: "You're not a Burden,<br/>Speak Up",
    deck: "Men account for roughly 73% of suicide deaths. We keep telling men to reach out — but we rarely fix the culture that stops them from doing so.",
    bylineDate:
      "Published by EOS · Youth Brain Health Culture Organisation · June 2026",
    cardTitle: "You're not a Burden, Speak Up",
    cardExcerpt:
      "Men account for roughly 73% of suicide deaths. This June, we are talking about why men don't reach out — and what we all need to change.",
    toc: [
      { href: "#b-intro", text: "Introduction" },
      { href: "#b-silence", text: "The Culture of Silence" },
      { href: "#b-june", text: "Men's Mental Health Month" },
      { href: "#b-message", text: "A Message to Men" },
      { href: "#b-help", text: "Seek Help" },
    ],
    keyTakeaways: [
      "Men account for roughly 73% of suicide deaths worldwide, yet the culture around men's vulnerability rarely changes.",
      "Teaching boys to suppress emotion creates men who suffer in silence — and sometimes don't survive it.",
      "Telling men to reach out means nothing if the people around them aren't prepared to listen without judgement.",
      "Seeking therapy or counselling does not make a man weak. It makes him strategic about his own survival.",
      "You are not a burden. You are worth the conversation.",
    ],
    bodyHtml: `<section id="b-intro">
        <p class="art-lede">Whenever we hear the sad news that a man has taken his life, we often exclaim and ask why he didn't reach out. We ask ourselves why he didn't talk to someone or call for help. We post and tell men to reach out and talk to someone if they are having suicidal thoughts. But you know what we don't do? We don't correct the mindset that a man should bear his problems by himself.</p>
        <p>We tell young boys to be men when life hits them and knocks them down. We tell boys to suck up their struggles and keep their problems to themselves. The impact of these expectations can be devastating. Men account for roughly 73% of suicide deaths, highlighting the urgent need to create spaces where they can seek support without fear of judgement.</p>
      </section>
      <section id="b-silence">
        <h2>The Culture of Silence</h2>
        <p>When the girl child is abused, there is a roaring outrage to get justice for her, but when the victim is a boy, the outrage is much quieter. We assume he will be fine and leave him to deal with his demons on his own. When some of these boys try to open up, we see them as soft and less manly.</p>
        <p>When they grow up to be men, they continue these patterns, and then we are surprised when some of them end up taking their own lives. We act surprised and wonder why they didn't reach out for help.</p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">💬</div>
          <div>"I would rather carry the weight of your tears than carry the weight of your coffin."</div>
        </div>
      </section>
      <section id="b-june">
        <h2>Men's Mental Health Month</h2>
        <p>June is Men's Mental Health Month, and as usual, there is a lot of content telling men to open up and seek help. While this is noble and admirable, it would be better backed up with action. Let us also strive to be people they can open up to.</p>
        <p>Let us banish the thought that men are weak for opening up. Let us teach our boys that it is okay to seek help when they need to.</p>
        <p>Let men ask themselves which call they would rather receive — a call from their friend stating he needs help, or a call informing them that he has taken his own life.</p>
        <div class="art-callout art-callout-blue">
          <div class="art-callout-icon">📞</div>
          <div>If someone around you is struggling, be the kind of person they feel safe calling. That simple shift saves lives.</div>
        </div>
      </section>
      <section id="b-message">
        <h2>A Message to Men</h2>
        <p>To all men, please remember that you are not weak for opening up, and if the people around you truly care for you, they will be happy to listen to your struggles and help you through all you are going through.</p>
        <p>I understand that you may be carrying a lot on your mind, and sometimes it feels like no one understands you. I understand some days feel so dark that it is difficult to see the light. I understand that sometimes ending it all seems like your only escape. But it isn't.</p>
        <p>There is no shame in seeking help. Going for therapy and counselling does not make you any less of a man. Think of it this way: when soldiers are out on a mission and they get stuck or trapped, they request backup, and no one mocks them for it. No one calls them weak or cowardly for doing so — instead, they rush to their aid. So, see yourself as a soldier who just needs some support.</p>
      </section>
      <section id="b-help">
        <h2>Seek Help. Get Better.</h2>
        <p>Don't be a statistic to be quoted every June. If you need help, seek it. It may not look like it now, but things can get better. Please don't consider suicide as an option. If you are having suicidal thoughts, open up to people around you and get help. If you need professional counselling, several options are available to you.</p>
        <p>Seek help and get better. You're worth it.</p>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">🧠</div>
          <div>You don't have to carry the weight alone. If you are ready to prioritise your brain health or just need a safe space to start, join our community and explore our resources at <strong>theeosfoundation.org</strong>.</div>
        </div>
      </section>`,
  },
  {
    num: 5,
    id: "cortex-article-5",
    category: "Physical Brain Health",
    gradFrom: "#6E0A14",
    gradTo: "#C81E3A",
    badgeBg: "rgba(200,30,58,0.2)",
    badgeColor: "#FCA5A5",
    cardColor: "#C81E3A",
    title:
      "What Do You Know About Sickle Cell?<br/>Understanding Sickle Cell: What Every Nigerian Family Should Know",
    deck: "Sickle cell disease shapes the daily lives of millions of Nigerian families — yet much of it is preventable. Here is what every family should know, from the genetics to the brain health risks involved.",
    bylineDate:
      "Published by EOS · Youth Brain Health Culture Organisation · June 2026",
    cardTitle: "What Do You Know About Sickle Cell?",
    cardExcerpt:
      "Nigeria carries one of the highest burdens of sickle cell disease globally. Here is what every family should know — and why genotype testing matters.",
    toc: [
      { href: "#sc-intro", text: "Introduction" },
      { href: "#sc-what", text: "What Is Sickle Cell?" },
      { href: "#sc-symptoms", text: "Symptoms of Sickle Cell" },
      { href: "#sc-neuro", text: "Sickle Cell and Brain Health" },
      { href: "#sc-causes", text: "What Causes Sickle Cell?" },
      {
        href: "#sc-prevalence",
        text: "Why Sickle Cell Is So Common in Nigeria",
      },
      { href: "#sc-management", text: "How Is Sickle Cell Managed?" },
      { href: "#sc-wrapup", text: "Wrap Up" },
      { href: "#sc-faq", text: "FAQs" },
    ],
    keyTakeaways: [
      "Sickle cell disease is an inherited blood disorder caused when a child inherits abnormal haemoglobin genes (SS) from both parents, leading to misshapen red blood cells that obstruct blood flow.",
      "Nigeria carries one of the highest burdens of sickle cell disease globally, driven largely by limited awareness, late genotype testing, and continued AS–AS marriages without informed genetic counselling.",
      "The condition causes lifelong physical and emotional challenges, including chronic pain, frequent hospitalisations, increased infection risk, and significant psychological and social stigma.",
      "Many cases of sickle cell disease are preventable through early genotype screening, informed partner selection, and genetic counselling before marriage or childbearing.",
      "While prevention is critical, people already living with sickle cell disease require empathy, improved healthcare access, and support to manage the condition and maintain quality of life.",
    ],
    bodyHtml: `<section id="sc-intro">
        <p class="art-lede">As we celebrate World Sickle Cell Day, we remember the people born with sickle cell disease, and we raise awareness about the condition. This genetic condition is caused by a child inheriting the S gene from both parents.</p>
        <p>In Nigeria, we have a large number of sickle cell patients due to various factors. In times past, there was very little information about genotypes and blood groups, so most people were not tested, and as such, many AS people got married to each other and, unfortunately, produced children with sickle cell. While much information has been spread about genotypes and blood groups, many people refuse to get tested, and even when tested, many forget to ask potential partners for their genotype. Unfortunately, even among those who know, some still insist they love each other and cannot be separated, and so they get married despite knowing the likelihood of having children with the SS gene.</p>
        <p>But for the sake of information, let us answer the question:</p>
      </section>
      <section id="sc-what">
        <h2>What Is Sickle Cell?</h2>
        <p>This is an inherited disease that attacks the red blood cells. It is a genetic mutation that causes red blood cells to become sickle-shaped instead of their flexible disc shape.<sup>[1]</sup> These abnormally shaped cells can block blood flow in small vessels.</p>
      </section>
      <section id="sc-symptoms">
        <h2>What Are the Symptoms of Sickle Cell?</h2>
        <p>Symptoms of sickle cell include anaemia (a shortage of healthy red blood cells), pain in various regions of the body caused by the obstructed blood flow, frequent weakness, swollen hands and feet, as well as a higher susceptibility to infections.</p>
        <p>The day-to-day life of a sickle cell patient is not exactly sunshine and roses. In Nigeria, the life expectancy of SCD patients is estimated to be about 21 years.<sup>[4]</sup></p>
        <p>In cases where access to expert medical care is available, the life expectancy is much longer because the complications are easier to manage. In low-income situations, the life expectancy can be much lower because of the lack of access to medical attention.</p>
        <p>Sickle cell disease takes a toll on the physical and emotional health of the patient. Many children with SCD often experience long periods of hospitalisation, the need for frequent blood transfusions, and longer periods dealing with infections. Many miss long periods of school and activities because of health concerns. In addition, they have to deal with a lot of chronic pain due to their condition.</p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">💬</div>
          <div>Physical health is not the only part that suffers — there is the emotional aspect as well. As many as 24% of SCD patients experience depression, with some studies reporting figures as high as 85%.<sup>[3]</sup></div>
        </div>
        <p>In children, seeing their friends run around fit as a fiddle while they frequent hospitals can be depressing. In Nigeria and African countries, there is also the stigma involved, as SCD patients are often called "sicklers."</p>
      </section>
      <section id="sc-neuro">
        <h2>Is There Any Correlation Between Sickle Cell and Neurological Function?</h2>
        <p>Sickle cell disease has neurological implications for patients. A study of SCD patients revealed their brains looked much older and smaller in scans, with some appearing 14 years older than the real age of the patient. Brain shrinking occurs naturally as age advances, and premature shrinking is usually caused by neurodegenerative diseases such as dementia. In sickle cell patients, the condition is present from birth, and so it is necessary to run tests to estimate cognitive decline.<sup>[6]</sup></p>
        <div class="art-callout art-callout-blue">
          <div class="art-callout-icon">🧠</div>
          <div>Sickle cell disease also affects brain health in other ways. Children with SCD score lower than those without it in cognitive function tests, and are more likely to suffer from neurological conditions such as stroke.</div>
        </div>
        <p>This is because the abnormal shape of the red blood cells in their blood can lead to obstruction of the blood vessels, and this raises the likelihood of a stroke occurring. Furthermore, there are silent strokes that may also occur, which may not display the full symptoms of a normal stroke. These are called Silent Cerebral Infarctions.<sup>[7]</sup></p>
        <p>In addition, other conditions affect neurological health. Because sickle cell disease often causes chronic anaemia, less oxygen may be delivered to the brain and other organs, increasing the risk of hypoxia and related complications.<sup>[8]</sup></p>
      </section>
      <section id="sc-causes">
        <h2>What Causes Sickle Cell?</h2>
        <p>Sickle cell is caused by the transmission of the S gene from both parents. In this case, both parents could be carriers (AS), or they could be affected themselves (SS). If an AS man and an AS woman meet and have children, each pregnancy has a 25% chance of producing a child with the SS gene. This is why it is very important for intending couples to undergo genetic testing before getting married.</p>
      </section>
      <section id="sc-prevalence">
        <h2>How Common Is Sickle Cell in Nigeria?</h2>
        <p>Nigeria is the global epicentre for sickle cell, with about 2–3% of the population suffering from the condition. This means that about 4 million Nigerians carry the condition, with about 50 million people carrying the trait. About 150,000 babies are born with sickle cell each year.<sup>[2]</sup> Sources disagree over the exact numbers.</p>
        <p>Sickle cell is very common in Nigeria. There are several factors that have led to this.</p>
        <h3>Inadequate Information and Sensitisation</h3>
        <p>While there has been a marked improvement in this, there are many people who do not have the proper information about the condition. This is caused by the high levels of illiteracy and difficulty in accessing remote areas for sensitisation. Many people still don't know what sickle cell is or why they should get tested before marriage.</p>
        <h3>Poor Planning of Some Couples</h3>
        <p>It is one thing for people who don't know their genotype to get married; it is concerning when people who know their genotype get married and have children. But in Nigeria, several couples only discover the genotype of their partner when they are about to get married, and yet still insist on getting married. They claim they love each other and cannot do without each other. One would assume the subject of genotype would be a first-date question, but many don't discover it until it is too late. Some end the relationship, but others choose to proceed despite knowing the chances of birthing children with the SS gene.</p>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">💡</div>
          <div>Many sickle cell cases could have been prevented if testing and counselling had been done early. Millions of children would be spared the day-to-day pain and frustration of dealing with the condition if people with the AS genotype were more careful and intentional about their partners.</div>
        </div>
      </section>
      <section id="sc-management">
        <h2>How Is Sickle Cell Managed?</h2>
        <p>Sickle cell is managed by a combination of medication — some for pain and some to boost the immune system to better fight infections — and blood transfusions for the anaemia. There is also ongoing research into bone marrow transplants and gene therapies as treatment options.<sup>[5]</sup></p>
        <p>If you or anyone you know is affected by sickle cell, you must see a doctor to discuss treatment options, and they will help you determine the best one for you.</p>
      </section>
      <section id="sc-wrapup">
        <h2>Wrap Up</h2>
        <p>As we celebrate World Sickle Cell Day, there are very important lessons for us to remember. If you don't know your genotype, do so today. Go and get tested and ensure you know your genotype. If you are AS or AC, before getting into a relationship with anyone, ask their genotype first. Don't just eat shawarma and ice cream on the dates — ask the important questions first. Spare the children a lifetime of pain and suffering by making wise and responsible decisions now.</p>
        <p>We should also avoid stigmatising SCD patients. Let us not call them "sicklers" or other derogatory names. We should show compassion and empathy to those dealing with the disease.</p>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">🩸</div>
          <div>For more information about your health, subscribe to The Cortex Printout on Substack or visit our website at <strong>theeosfoundation.org</strong>.</div>
        </div>
      </section>
      <section id="sc-faq">
        <h2>Frequently Asked Questions</h2>
        <div class="art-faq">
          <div class="art-faq-item">
            <div class="art-faq-q">What is sickle cell disease?</div>
            <div class="art-faq-a">Sickle cell disease is an inherited blood disorder caused by a genetic mutation that affects haemoglobin. It causes red blood cells to become sickle-shaped, which can block blood flow and lead to pain, anaemia, and other complications.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">How does someone get sickle cell disease?</div>
            <div class="art-faq-a">A person develops sickle cell disease when they inherit two abnormal haemoglobin genes (SS), one from each parent. If both parents carry the AS genotype, there is a 25% chance with each pregnancy that the child will have sickle cell disease.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Can sickle cell disease be prevented?</div>
            <div class="art-faq-a">Yes. Many cases can be prevented through early genotype testing, genetic counselling, and informed decision-making before marriage or having children. This helps couples understand the risk of passing the SS gene to their children.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">What are the common symptoms of sickle cell disease?</div>
            <div class="art-faq-a">Common symptoms include chronic pain episodes, anaemia, fatigue, swollen hands and feet, frequent infections, and complications that may affect the organs over time.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Why is sickle cell disease so common in Nigeria?</div>
            <div class="art-faq-a">Nigeria has a high prevalence due to a large number of carriers (AS individuals), limited awareness in some communities, and delayed or absent genotype screening before marriage in many cases.</div>
          </div>
        </div>
      </section>
      <div class="art-references">
        <div class="art-ref-title">References</div>
        <ol class="art-ref-list">
          <li>National Heart, Lung, and Blood Institute (NHLBI). <em>Sickle Cell Disease.</em> 2024. https://www.nhlbi.nih.gov/health/sickle-cell-disease</li>
          <li>Center for Policy Impact. <em>Sickle Cell Disease in Nigeria: Why We Must Focus on Advocacy.</em> 2024. https://centerforpolicyimpact.org/2024/09/17/sickle-cell-disease-in-nigeria-why-we-must-focus-on-advocacy/</li>
          <li>National Library of Medicine (PubMed Central). <em>Psychological and Psychiatric Aspects of Sickle Cell Disease: A Systematic Review.</em> 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8025551/</li>
          <li>National Library of Medicine (PubMed Central). <em>Life Expectancy and Survival in Sickle Cell Disease: A Review of Global Evidence.</em> 2014. https://pmc.ncbi.nlm.nih.gov/articles/PMC4215364/</li>
          <li>National Heart, Lung, and Blood Institute (NHLBI). <em>Sickle Cell Disease: Treatments and Therapies.</em> 2024. https://www.nhlbi.nih.gov/health/sickle-cell-disease/treatment</li>
          <li>Washington University School of Medicine in St. Louis. <em>Brains of People with Sickle Cell Disease Appear Older.</em> 2025. https://medicine.washu.edu/news/brains-of-people-with-sickle-cell-disease-appear-older/</li>
          <li>National Library of Medicine (PubMed Central). <em>Neurological Complications of Sickle Cell Disease: Current Understanding and Future Directions.</em> 2023. https://pmc.ncbi.nlm.nih.gov/articles/PMC10101159/</li>
          <li>National Library of Medicine (PubMed Central). <em>Hypoxia, Cerebral Oxygenation, and Neurological Outcomes in Sickle Cell Disease.</em> 2024. https://pmc.ncbi.nlm.nih.gov/articles/PMC11466366/</li>
        </ol>
      </div>`,
  },
  {
    num: 6,
    id: "cortex-article-6",
    category: "Physical Brain Health",
    gradFrom: "#1A3A2A",
    gradTo: "#2D6A4A",
    badgeBg: "rgba(45,106,74,0.25)",
    badgeColor: "#6EE7B7",
    cardColor: "#2D8A5A",
    title: "Is Alzheimer's Disease Preventable?",
    deck: "Exploring the truth about Alzheimer's and looking at ways to prevent it — because the decisions you make now shape the brain you'll have later.",
    bylineDate: "Published by EOS · Youth Brain Health Culture Organisation",
    cardTitle: "Is Alzheimer's Disease Preventable?",
    cardExcerpt:
      "Exploring the truth about Alzheimer's — what it is, who it affects, and what young people can do now to lower their risk later.",
    toc: [
      { href: "#a-intro", text: "Introduction" },
      { href: "#a-what", text: "What Is Alzheimer's Disease?" },
      { href: "#a-symptoms", text: "Symptoms" },
      { href: "#a-dementia", text: "Alzheimer's vs Dementia" },
      { href: "#a-risk", text: "Risk Factors" },
      { href: "#a-lower", text: "How to Lower Your Risk" },
      { href: "#a-signs", text: "Signs to Watch Out For" },
      { href: "#a-wrapup", text: "Wrap Up" },
      { href: "#a-faq", text: "FAQs" },
    ],
    keyTakeaways: [
      "Alzheimer's is a specific neurodegenerative disease, but it is the most common form of dementia, not a synonym for it.",
      "It mostly affects people in their mid-60s and beyond, but the brain changes behind it can begin decades earlier.",
      "Risk factors include age, family history, head injuries, and conditions like heart disease. Some you can't control, but many you can.",
      "A healthy diet, regular exercise, quality sleep, and limiting alcohol, smoking, and drugs all lower your risk significantly.",
      "Watch for excessive memory loss, difficulty with familiar tasks, problem-solving struggles, and confusion — and see a doctor immediately if they appear.",
    ],
    bodyHtml: `<section id="a-intro">
        <p class="art-lede">Having a great memory is a great thing. Especially those who have a photographic memory or, even better, an eidetic memory — people who never forget anything, even the tiniest details. Now imagine slowly losing that memory, becoming increasingly forgetful. Not being able to remember your friends or family, not being able to even remember your own name, or where you are. Sounds terrifying, right? That is the reality of people with Alzheimer's disease.</p>
        <p>So, for those wondering:</p>
      </section>
      <section id="a-what">
        <h2>What Is Alzheimer's Disease?</h2>
        <p>Alzheimer's Disease is a type of dementia. It is a neurodegenerative disease that affects thinking, memory, and eventually renders the person incapable of performing simple, day-to-day tasks. It is the most common form of dementia.<sup>[1]</sup></p>
        <p>Alzheimer's Disease is mostly seen in people in their mid-60s. It affects cognitive function, thinking, memory, and behaviour. It is often dismissed as normal ageing at the beginning, but it isn't.<sup>[2]</sup></p>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">🧠</div>
          <div>Alzheimer's is not a normal part of ageing. The brain changes that lead to it can begin decades before any symptoms appear — which is why what you do now matters.</div>
        </div>
      </section>
      <section id="a-symptoms">
        <h2>What Are the Symptoms of Alzheimer's Disease?</h2>
        <p>The symptoms of Alzheimer's Disease may vary from person to person, but the most common symptom is memory loss. Many patients experience cognitive decline, which is seen through memory loss or difficulty performing simple tasks. They could be asking the same questions over and over, having trouble remembering where they are or what they are doing.<sup>[4]</sup></p>
      </section>
      <section id="a-dementia">
        <h2>Is Alzheimer's the Same as Dementia?</h2>
        <p>Dementia refers to the general term for a large number of neurodegenerative diseases, while Alzheimer's is a very specific disease. Think of it this way: pasta refers to a very wide range of foods, while spaghetti is a specific type of pasta. Dementia could be likened to pasta, while Alzheimer's could be likened to spaghetti.<sup>[3]</sup></p>
        <div class="art-callout art-callout-blue">
          <div class="art-callout-icon">📌</div>
          <div><strong>All Alzheimer's is dementia, but not all dementia is Alzheimer's.</strong> Other forms of dementia include vascular dementia, Lewy body dementia, and frontotemporal dementia.</div>
        </div>
      </section>
      <section id="a-risk">
        <h2>What Are the Risk Factors for Alzheimer's?</h2>
        <p>There are several risk factors for Alzheimer's disease.</p>
        <h3>Age</h3>
        <p>The biggest risk factor for Alzheimer's is age. Most patients of Alzheimer's are in their mid-60s or above, and the risk doubles after every five years.<sup>[7]</sup></p>
        <h3>Family History</h3>
        <p>Those with a history of Alzheimer's in their family are more likely to develop it later on in their advanced ages.</p>
        <h3>Head Injuries</h3>
        <p>Head injuries have been linked to Alzheimer's and other forms of dementia, so it is important to protect yourself — whether on the road, in sport, or in everyday life.</p>
        <h3>Other Medical Conditions</h3>
        <p>Other medical conditions, especially heart disease, can raise the risk for dementia.<sup>[5]</sup></p>
        <h3>Lifestyle Factors</h3>
        <p>Dementia is less common among people who generally take care of their health. It is less prevalent among people who eat right, exercise, and prioritise their brain health.<sup>[6]</sup></p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">⚠️</div>
          <div>Some risk factors — like age and genetics — cannot be controlled. But many others, including diet, exercise, sleep, stress, and substance use, are within your hands.</div>
        </div>
      </section>
      <section id="a-lower">
        <h2>How Do I Lower My Risk for Alzheimer's?</h2>
        <p>While Alzheimer's is more common in older people, younger people should not lose their guard. There is an urgent need for young people to protect themselves and reduce their risks.</p>
        <h3>Eat Healthy</h3>
        <p>Eating healthily is the most important thing you can do for your health. Eating healthy food promotes overall health, and the brain is not exempt. Specialised diets such as the Mediterranean Diet are very beneficial for brain health because they contain polyphenols that combat oxidative stress, reduce neuroinflammation, and provide Omega-3 fatty acids — essential building blocks for brain health that also reduce harmful proteins associated with Alzheimer's.<sup>[8]</sup></p>
        <h3>Exercise Regularly</h3>
        <p>Exercise promotes blood flow around the body. Aerobic exercise also helps develop the hippocampus, which consolidates long-term memory. Furthermore, it helps reduce stress and anxiety, which are harmful to the brain.<sup>[9]</sup> Mental exercises are also helpful — just as the biceps get stronger when you lift weights, your brain gets sharper when you do mental exercises such as puzzles, chess, or learning new skills.</p>
        <h3>Avoid Harmful Substances</h3>
        <p>Alcohol abuse, smoking, and drug use are extremely harmful to the brain and raise the risk of neurodegenerative diseases such as Alzheimer's and Parkinson's. To lower your risk, keep drinking and smoking to a minimum.</p>
        <h3>Sleep Well and Manage Stress</h3>
        <p>Sleep gives the brain the time it needs to carry out repairs. It also helps to manage stress and reduce anxiety. The world we live in can be stressful sometimes, but it is up to you to find healthy ways to deal with the stress — whether that is a short walk, a good book, soothing music, or time with friends. The important thing is to find a healthy outlet and use it consistently.</p>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">💡</div>
          <div>Working hard while you are young would be meaningless if you are tied down with illness in your old age. The habits you build now are the best investment in the brain you will need later.</div>
        </div>
      </section>
      <section id="a-signs">
        <h2>What Are the Signs to Watch Out For?</h2>
        <p>If you see these signs in yourself or someone else, see a doctor immediately.</p>
        <h3>Excessive Memory Loss</h3>
        <p>While some memory loss is understandable with advanced age, when it becomes excessive, there is a need to see a doctor. The patient could forget their names, important events, names of family members they have known for years, where they live or work. When memory loss becomes abnormal, especially in a person who is not usually forgetful, seeing a doctor is crucial.</p>
        <h3>Difficulty Completing Familiar Tasks</h3>
        <p>Tasks that the person could handle in their sleep now become very difficult — house chores, going to the market, or even work-related tasks. It is important to see a doctor once this is observed.</p>
        <h3>Challenges in Problem Solving</h3>
        <p>People with Alzheimer's find it difficult to solve problems. They find it difficult to hold a train of thought and follow through with their plans.</p>
        <h3>Confusion</h3>
        <p>People with Alzheimer's may find themselves confused about where they are, what they are doing, dates, times, and even people they have known all their lives.<sup>[10]</sup></p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">🏥</div>
          <div>Once these signs are observed, seeing a doctor is not optional — it is crucial. Early diagnosis gives the best chance of managing the condition effectively.</div>
        </div>
      </section>
      <section id="a-wrapup">
        <h2>Wrap Up</h2>
        <p>Taking steps to prevent Alzheimer's and other forms of dementia is not just for old people alone. Many people increase their risks of Alzheimer's in old age by the decisions they make in their youth. It is important to take care of your health to enjoy your old age.</p>
        <p>While you may not be able to control all the risk factors for Alzheimer's, ensure you try your best with the ones you can. Further reading: if you want to understand another condition that affects brain function, read our piece on <a href="#" data-route="cortex-article-3" style="color:var(--teal);text-decoration:underline">seizures and epilepsy</a>.</p>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">📖</div>
          <div>To get more information about your brain and how to better take care of it, subscribe to The Cortex Printout on Substack or visit <strong>theeosfoundation.org</strong>.</div>
        </div>
      </section>
      <section id="a-faq">
        <h2>Frequently Asked Questions</h2>
        <div class="art-faq">
          <div class="art-faq-item">
            <div class="art-faq-q">Is Alzheimer's the same as dementia?</div>
            <div class="art-faq-a">No. Dementia is the broad term for a range of conditions that cause cognitive decline. Alzheimer's is one specific disease under that umbrella — the most common one.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Can young people get Alzheimer's?</div>
            <div class="art-faq-a">Alzheimer's is rare in young people, but the lifestyle habits that increase or lower your risk begin building up decades before symptoms ever appear. The choices you make now matter later.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Is Alzheimer's hereditary?</div>
            <div class="art-faq-a">Family history can increase your risk, but having a relative with Alzheimer's does not guarantee you will develop it. Genetics is one risk factor among several, not a verdict.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Can Alzheimer's be prevented?</div>
            <div class="art-faq-a">There is no guaranteed way to prevent it, since factors like age and genetics cannot be controlled. However, eating well, exercising regularly, sleeping enough, and avoiding excessive alcohol, smoking, and drugs can meaningfully lower your risk.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">What are the early signs of Alzheimer's?</div>
            <div class="art-faq-a">Early signs include excessive memory loss, difficulty completing familiar tasks, trouble solving problems, and confusion about time, place, or people. If these appear, see a doctor as soon as possible.</div>
          </div>
        </div>
      </section>
      <div class="art-references">
        <div class="art-ref-title">References</div>
        <ol class="art-ref-list">
          <li>National Institute on Aging (NIA). <em>What Is Alzheimer's Disease?</em> 2024. https://www.nia.nih.gov/health/alzheimers-and-dementia/what-alzheimers-disease</li>
          <li>GreenShoot Media. <em>Alzheimer's Awareness.</em> 2020. https://greenshootmedia.com/images/September2020Sections/AlzheimersAwarenessPreview.pdf</li>
          <li>Alzheimer's Association. <em>Difference Between Dementia and Alzheimer's.</em> 2024. https://www.alz.org/alzheimers-dementia/difference-between-dementia-and-alzheimer-s</li>
          <li>Alzheimer's Association. <em>Causes and Risk Factors for Alzheimer's Disease.</em> 2024. https://www.alz.org/alzheimers-dementia/what-is-alzheimers/causes-and-risk-factors</li>
          <li>Alzheimer's Association. <em>Causes and Risk Factors for Alzheimer's Disease.</em> 2024. https://www.alz.org/alzheimers-dementia/what-is-alzheimers/causes-and-risk-factors</li>
          <li>Centers for Disease Control and Prevention (CDC). <em>Morbidity and Mortality Weekly Report (MMWR), Vol. 71.</em> 2022. https://www.cdc.gov/mmwr/volumes/71/wr/mm7120a2.htm</li>
          <li>Alzheimer's Research UK. <em>Dementia Risk.</em> 2024. https://www.alzheimersresearchuk.org/dementia-information/dementia-risk/</li>
          <li>National Library of Medicine (PubMed Central). <em>Mediterranean Diet and Brain Health: A Review.</em> 2024. https://pmc.ncbi.nlm.nih.gov/articles/PMC11631615/</li>
          <li>Centers for Disease Control and Prevention (CDC). <em>Boost Your Brain Health with Physical Activity.</em> 2024. https://www.cdc.gov/physical-activity/features/boost-brain-health.html</li>
          <li>Alzheimer's Association. <em>10 Early Signs and Symptoms of Alzheimer's.</em> 2024. https://www.alz.org/alzheimers-dementia/10_signs</li>
        </ol>
      </div>`,
  },
  {
    num: 7,
    id: "cortex-article-7",
    category: "Mental Health &amp; Performance",
    gradFrom: "#1A1A3A",
    gradTo: "#3A2D6A",
    badgeBg: "rgba(124,111,205,0.25)",
    badgeColor: "#C4B5FD",
    cardColor: "#7C6FCD",
    title: "The Skill Nobody Taught You in School: Emotional Intelligence",
    deck: "How understanding your emotions can help you build better relationships, make wiser decisions, and thrive in life.",
    bylineDate: "Published by EOS · Youth Brain Health Culture Organisation",
    cardTitle: "The Skill Nobody Taught You in School: Emotional Intelligence",
    cardExcerpt:
      "How understanding your emotions can help you build better relationships, make wiser decisions, and thrive in life.",
    toc: [
      { href: "#ei-intro", text: "Introduction" },
      { href: "#ei-what", text: "What Is Emotional Intelligence?" },
      { href: "#ei-why", text: "Why Is It Important?" },
      { href: "#ei-how", text: "How to Develop It" },
      { href: "#ei-wrapup", text: "Wrap Up" },
      { href: "#ei-faq", text: "FAQs" },
    ],
    keyTakeaways: [
      "Emotional intelligence has five core components: self-awareness, self-regulation, social awareness, relationship management, and self-motivation.",
      "Being academically smart doesn't guarantee being emotionally smart — the two are independent skills.",
      "Healthy relationships are symbiotic, not parasitic, and recognising the difference is a sign of emotional intelligence.",
      "Emotionally intelligent people turn conflicts into discussions instead of arguments.",
      "Emotional intelligence isn't fixed — it can be developed through self-assessment, observation, reading, and better communication.",
    ],
    bodyHtml: `<section id="ei-intro">
        <p class="art-lede">Hey you — yes, you, the one who changes partners like clothes every three months. Before you start feeling like you are unlovable, or that some unseen force is attacking your relationships, have you stopped to consider that you might need to develop emotional intelligence? If you don't know what that is, don't worry — we will get into it.</p>
      </section>
      <section id="ei-what">
        <h2>What Is Emotional Intelligence?</h2>
        <p>Emotional intelligence refers to the ability to integrate logical reasoning and emotions to make sound decisions.<sup>[1]</sup> It simply means being smarter with handling emotions or feelings. Have you ever seen someone who is academically brilliant but seems to make poor decisions in their relationships or among friends? That person is logically intelligent but emotionally deficient.</p>
        <p>Emotional intelligence incorporates several attributes: self-awareness, self-regulation, social awareness, relationship management, and self-motivation.<sup>[2]</sup></p>

        <h3>Self-Awareness</h3>
        <p>Self-awareness refers to the ability to recognise your own emotions and understand how they affect you and those around you.<sup>[3]</sup> Some people are naturally cheerful and brighten up every room they enter — they know this about themselves. Self-awareness is simply understanding yourself.</p>

        <h3>Self-Regulation</h3>
        <p>Self-regulation is the ability to control your emotions, desires, and impulses — stopping yourself from lashing out when you are upset or angry.<sup>[4]</sup> This is a huge component of healthy relationships. It means keeping your emotions in check so negative feelings don't wreak havoc on your friendships or partnerships.</p>

        <h3>Social Awareness</h3>
        <p>Social awareness refers to the ability to understand and empathise with the feelings, behaviours, and opinions of others in different contexts.<sup>[5]</sup> People are different — what one person appreciates, another might find offensive. Social awareness is knowing how to read that difference.</p>

        <h3>Relationship Management</h3>
        <p>Relationship management is the ability to use your understanding of emotions — yours and others' — to interact effectively, build healthy ties, and manage conflicts.<sup>[6]</sup></p>

        <h3>Self-Motivation</h3>
        <p>Self-motivation is the inner drive to accomplish tasks and pursue self-improvement for personal development, not for external reward or recognition.<sup>[7]</sup> It is choosing to eat healthily even when you are craving junk. It is getting up to go to the gym on the days you don't feel like it.</p>

        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">🧠</div>
          <div>Emotional intelligence and academic intelligence are separate skills. A person can excel in school or at work while still struggling to manage their emotions or relationships well.</div>
        </div>
      </section>
      <section id="ei-why">
        <h2>Why Is Emotional Intelligence Important?</h2>

        <h3>It Improves Communication</h3>
        <p>An emotionally intelligent person treats others with the consideration they would want for themselves. In a relationship, when one partner has had a bad day, they want reassurance. Emotional intelligence means knowing to offer that same comfort in return. Many people who call themselves "blunt" are simply rude — but you can tell people the truth without making them feel worse. A friend once told me after I made a mistake: "I won't say what you did is stupid, because I know you are already telling yourself that." That is emotional intelligence in practice.</p>

        <h3>It Helps You Make Better Decisions</h3>
        <p>While empathy teaches us to see things from others' perspectives, emotional intelligence also means knowing when to walk away. Many friendships are parasitic — designed to benefit one person at the expense of the other. A healthy relationship is symbiotic, where all parties benefit. Emotional intelligence helps you recognise the difference and act accordingly.</p>

        <h3>It Helps You Resolve Conflicts</h3>
        <p>Disagreements are a normal part of any relationship. The difference between a discussion and an argument is this: a discussion means "here is my point and here is yours — let me hear you out." An argument means "I am right and you are wrong, full stop." Emotional intelligence keeps conflicts from escalating into something that damages the relationship permanently.</p>

        <h3>It Helps You Develop Yourself</h3>
        <p>Self-awareness helps you know yourself better. Self-motivation gives you the drive to pursue your goals. Self-regulation keeps your emotions in check. Social awareness helps you adapt to different situations. Together, they make you a more complete and effective person.</p>

        <div class="art-callout art-callout-blue">
          <div class="art-callout-icon">💬</div>
          <div>Emotionally intelligent people don't avoid difficult conversations — they approach them with clarity, empathy, and the goal of understanding rather than winning.</div>
        </div>
      </section>
      <section id="ei-how">
        <h2>How Do I Develop Emotional Intelligence?</h2>

        <h3>Perform an Honest Self-Assessment</h3>
        <p>Take a deep and honest look at yourself. Examine your emotions — what makes you happy, what upsets you, how you react in difficult situations. If you are unsure, ask people close to you. Sometimes others see patterns in us that we cannot see in ourselves.</p>

        <h3>Observe Emotionally Intelligent People</h3>
        <p>Watch people you consider emotionally intelligent. Pay attention to how they handle disagreements, how they act among strangers versus close friends, and how they communicate under pressure. If you are close enough, ask them directly. Learn from them.</p>

        <h3>Read</h3>
        <p>There are excellent books on emotional intelligence and relationships. If you are entering or currently in a relationship, <em>The Five Love Languages</em> by Gary Chapman is a strong starting point. Many other books on relationships and emotional intelligence can genuinely shift how you relate to people.</p>

        <h3>Work on Your Communication</h3>
        <p>Speak to others with the politeness and courtesy you would like to receive. Pay attention to non-verbal cues as well — facial expressions and body language carry as much meaning as words, sometimes more. Many people miss this entirely.</p>

        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">💡</div>
          <div>Emotional intelligence also includes speaking up when you need help. If you are struggling, reach out. Seeking support is not weakness — it is self-awareness in action. Visit <strong>theeosfoundation.org</strong> for resources.</div>
        </div>
      </section>
      <section id="ei-wrapup">
        <h2>Wrap Up</h2>
        <p>For your relationships to be healthy — romantic, platonic, or professional — emotional intelligence is not optional. Aim to develop it deliberately, and you will see real improvements in how you relate to the people around you.</p>
        <p>The question is this: will you learn and develop your emotional intelligence, or will you continue the way you are?</p>
        <p>Further reading: emotional intelligence also includes speaking up when you need help. June is Men's Mental Health Month. Read <a href="#" data-route="cortex-article-4" style="color:var(--purple);text-decoration:underline">You're not a Burden, Speak Up</a>.</p>
      </section>
      <section id="ei-faq">
        <h2>Frequently Asked Questions</h2>
        <div class="art-faq">
          <div class="art-faq-item">
            <div class="art-faq-q">Is emotional intelligence the same thing as being nice?</div>
            <div class="art-faq-a">Not quite. Being nice can sometimes mean avoiding conflict or people-pleasing, while emotional intelligence means understanding emotions — yours and others' — well enough to respond appropriately, even when that means having a hard conversation or walking away from a toxic relationship.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Can someone be intelligent but have low emotional intelligence?</div>
            <div class="art-faq-a">Yes. Academic or logical intelligence and emotional intelligence are separate skills. Someone can excel in school or at work while still struggling to manage their emotions or relationships well.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Is emotional intelligence something you're born with, or can it be learned?</div>
            <div class="art-faq-a">It can be learned. Like any skill, it improves with self-awareness, practice, and intentional effort — through honest self-assessment, observing emotionally intelligent people, reading, and working on communication.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">How do I know if I have low emotional intelligence?</div>
            <div class="art-faq-a">Common signs include frequently reacting instead of responding, struggling to see things from other people's perspectives, finding that conflicts often turn into arguments, or staying in relationships and friendships that consistently leave you feeling drained.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Does emotional intelligence only apply to romantic relationships?</div>
            <div class="art-faq-a">No. Emotional intelligence also shapes how you handle friendships, family dynamics, and professional relationships.</div>
          </div>
        </div>
      </section>
      <div class="art-references">
        <div class="art-ref-title">References</div>
        <ol class="art-ref-list">
          <li>Six Seconds. <em>What Is Emotional Intelligence?</em> https://www.6seconds.org/emotional-intelligence/</li>
          <li>Daniel Goleman Emotional Intelligence Courses. <em>EI Overview: The Four Domains and Twelve Competencies.</em> https://danielgolemanemotionalintelligence.com/ei-overview-the-four-domains-and-twelve-competencies/</li>
          <li>Sean Jackson (MentalHealth.com). <em>Emotional Intelligence and Self-Awareness.</em> 2025. https://www.mentalhealth.com/library/emotional-intelligence-self-awareness</li>
          <li>Harvard Health Publishing. <em>Self-Regulation for Adults.</em> https://www.health.harvard.edu/mind-and-mood/self-regulation-for-adults-strategies-for-getting-a-handle-on-emotions-and-behavior</li>
          <li>Groundbreaker Therapy. <em>Social Awareness: Definition, Importance, and Ways to Improve It.</em> https://groundbreakertherapy.com/blog/social-awareness/</li>
          <li>Workplace Strategies for Mental Health. <em>Relationship Management for Emotional Intelligence.</em> https://www.workplacestrategiesformentalhealth.com/resources/relationship-management-for-emotional-intelligence</li>
          <li>John Scott Keane. <em>Self-Motivation: A Critical Component of Emotional Intelligence.</em> https://medium.com/@johnscottkeane11/self-motivation-a-critical-component-of-emotional-intelligence-c06d1927d1d5</li>
        </ol>
      </div>`,
  },
  {
    num: 8,
    id: "cortex-article-8",
    category: "Physical Brain Health",
    gradFrom: "#2A0A0A",
    gradTo: "#6A1A1A",
    badgeBg: "rgba(229,115,115,0.2)",
    badgeColor: "#FFCDD2",
    cardColor: "#E57373",
    title: "The Brain on Drugs:<br/>What Addiction Actually Does to Your Mind",
    deck: "Drugs don't just feel dangerous — they restructure the brain itself. Here is what actually happens, and what recovery looks like.",
    bylineDate:
      "Published by EOS · Youth Brain Health Culture Organisation · June 2026",
    cardTitle: "The Brain on Drugs: What Addiction Actually Does to Your Mind",
    cardExcerpt:
      "How drugs hijack the brain's reward system, damage key brain regions, and what recovery actually looks like.",
    toc: [
      { href: "#d-intro", text: "Introduction" },
      { href: "#d-what", text: "What Are Drugs?" },
      { href: "#d-abuse", text: "What Is Drug Abuse?" },
      { href: "#d-brain", text: "How Drugs Affect the Brain" },
      { href: "#d-consequences", text: "Consequences of Drug Abuse" },
      { href: "#d-out", text: "The Way Out" },
      { href: "#d-wrapup", text: "Wrap Up" },
      { href: "#d-faq", text: "FAQs" },
    ],
    keyTakeaways: [
      "Drug abuse is a major public health issue in Nigeria, with 1 in 7 people aged 15–64 having used a drug in the past year.",
      "Drugs hijack the brain's natural reward system, flooding it with far more dopamine than everyday pleasures ever could.",
      "Continued use damages key brain regions: the basal ganglia (reward), the amygdala (emotion and withdrawal), and the prefrontal cortex (decision-making and self-control).",
      "The teenage and young adult brain is still developing, making early drug exposure especially risky and long-lasting in its effects.",
      "Reaching out for help is a sign of strength, not failure, and addiction is best treated as a health condition rather than a moral one.",
    ],
    bodyHtml: `<section id="d-intro">
        <p class="art-lede">June 26 is the International Day against Drug Abuse and Illicit Trafficking. As we mark it, we should be honest about the harm drugs do — not just to lives and families, but to the brain itself. Drug abuse is a major problem in Nigeria: one in seven Nigerians aged 15–64 has abused a drug in the past year.<sup>[7]</sup> Some know the risks. Others don't. And some are curious precisely because of the euphoria that users describe.</p>
        <p>This article is for all three groups.</p>
      </section>
      <section id="d-what">
        <h2>What Are Drugs?</h2>
        <p>Medically, drugs are defined as any substance (other than food) used to prevent, diagnose, treat, or relieve symptoms of a disease or abnormal condition.<sup>[1]</sup> In the context of this article, drugs are substances that change a person's mental or physical state.<sup>[2]</sup> Marijuana tends to make people feel euphoric and relaxed. Cocaine makes people feel energised. The mechanism behind both is the same — interference with the brain's chemistry.</p>
      </section>
      <section id="d-abuse">
        <h2>What Is Drug Abuse?</h2>
        <p>Drug abuse is the use of illegal drugs, or the use of prescription or over-the-counter drugs for purposes other than those for which they are intended, or in excessive amounts.<sup>[3]</sup> Once a drug is taken in a larger dose than prescribed, or for reasons other than its intended purpose, it has been abused. That includes popping antibiotics for a rash, or taking paracetamol for every minor headache.</p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">⚠️</div>
          <div>Drug abuse is one of the greatest problems in Nigerian society — a menace that has ruined lives, families, and entire communities. It does not discriminate by background, age, or education level.</div>
        </div>
      </section>
      <section id="d-brain">
        <h2>How Do Drugs Affect the Brain?</h2>
        <p>Think of the brain as an advanced computer. It communicates through billions of cells called neurons, which send and receive information via chemical messengers called neurotransmitters.</p>
        <p>When certain drugs are taken, they activate neurons because their chemical structure mimics that of a neurotransmitter — attaching to neurons and activating them abnormally. Other drugs, like amphetamines, cause the brain to release abnormally large amounts of neurotransmitters, or prevent the brain from recycling them. Either way, normal communication between neurons is disrupted.</p>
        <p>The brain uses dopamine to reinforce beneficial behaviours — eating, exercise, connection. When drugs are taken, the dopamine release is far greater than anything a natural reward can produce. This overload creates the craving. The body wants to repeat the experience. The body also begins to associate dopamine overload with everything connected to the drug — the route to the dealer, the hideout, the smell of the space. These become triggers because the brain has wired them to the reward.</p>
        <div class="art-callout art-callout-blue">
          <div class="art-callout-icon">🧠</div>
          <div>The teenage and young adult brain is still developing — particularly the prefrontal cortex, which governs judgement and impulse control. This is why drug exposure during these years carries a higher risk of lasting harm.</div>
        </div>
      </section>
      <section id="d-consequences">
        <h2>What Are the Consequences of Drug Abuse?</h2>
        <p>Drug abuse damages several vital organs — kidneys, liver, spleen — but the most significant damage is to the brain. Long-term use affects three key regions:</p>
        <h3>Basal Ganglia</h3>
        <p>The basal ganglia are deep brain structures that control movement, learning, decision-making, and the feeling of reward.<sup>[5]</sup> They form a central part of the brain's reward circuit. When drugs are taken repeatedly, they overload this circuit until it can no longer register pleasure from anything else. Only the drug remains rewarding.</p>
        <h3>Amygdala</h3>
        <p>The amygdala is located near the hippocampus (the memory centre) and is part of the limbic system, which controls emotions — fear, anger, happiness, anxiety.<sup>[6]</sup> Drugs increase the sensitivity of this region. When the drug's effects wear off, the amygdala triggers discomfort — what we recognise as withdrawal symptoms.</p>
        <h3>Prefrontal Cortex</h3>
        <p>The prefrontal cortex governs thinking, planning, decision-making, self-control, and social behaviour. It is one of the last parts of the brain to fully mature. Drug use lowers its ability to regulate desire — which is why addicts will sacrifice jobs, family, finances, and health in pursuit of the next fix. The part of the brain designed to say "stop" has been compromised.</p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">💬</div>
          <div>Beyond the brain: drug abuse tears apart families, causes road fatalities through impaired driving, and destroys financial stability. It is a disease that damages everything it touches if left unaddressed.</div>
        </div>
      </section>
      <section id="d-out">
        <h2>What Is the Way Out?</h2>
        <p>The brain has a remarkable ability to heal — a property scientists call neuroplasticity. With sustained abstinence and proper support, some of the damage caused by drugs can be reversed, and affected brain regions can recover meaningful function.</p>
        <p>Recovery is not easy, and relapse is part of many people's journeys. But it is possible. Here are steps that can help:</p>
        <ul class="art-firstaid-list">
          <li><strong>Be honest with yourself.</strong> Admit that there is a problem and that you need help.</li>
          <li><strong>Reach out to the right people.</strong> Addiction counsellors and rehabilitation facilities exist to help. If your case requires admission, they will guide you.</li>
          <li><strong>Remove triggers.</strong> Distance yourself from people, places, and situations that tempt you to use again.</li>
          <li><strong>Fill the time.</strong> An idle mind creates space for cravings. Find healthy habits and activities that occupy you.</li>
          <li><strong>Address what led you there.</strong> If an underlying problem drove you to drug use, seek counselling for that issue directly. Unresolved pain has a way of pulling people back.</li>
          <li><strong>Find an accountability partner.</strong> Someone who checks in on you and whom you can call on a rough day.</li>
        </ul>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">💡</div>
          <div>Reaching out for help is not weakness. It is the first act of self-awareness in the recovery process. If you need support, reach out to us at <strong>theeosfoundation.org</strong> and we will connect you with the right resources.</div>
        </div>
      </section>
      <section id="d-wrapup">
        <h2>Wrap Up</h2>
        <p>Drug abuse is a disease — not a moral failing. It has devastating consequences if left unaddressed, but people find their way out every single day. If you or someone you know is struggling, all hope is not lost. It is okay to reach out and ask for help.</p>
        <p>Further reading: relationships are a crucial part of life, and maintaining them well requires emotional intelligence. Read <a href="#" data-route="cortex-article-7" style="color:var(--teal);text-decoration:underline">The Skill Nobody Taught You in School: Emotional Intelligence</a>.</p>
      </section>
      <section id="d-faq">
        <h2>Frequently Asked Questions</h2>
        <div class="art-faq">
          <div class="art-faq-item">
            <div class="art-faq-q">Is brain damage from drug abuse always permanent?</div>
            <div class="art-faq-a">No. Some changes, especially those involving the brain's reward and decision-making circuits, can improve significantly with sustained abstinence and treatment. The extent of recovery depends on how long and heavily a person used, and the support available to them.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Why do some people become addicted while others who use the same drug don't?</div>
            <div class="art-faq-a">Addiction risk is shaped by a mix of genetics, brain chemistry, age at first use, mental health, and environment — not just willpower or "weakness." This is part of why addiction is now widely understood as a health condition rather than a moral failing.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Does alcohol count as a drug when we talk about brain health?</div>
            <div class="art-faq-a">Yes. Alcohol affects the brain's neurotransmitter systems in ways similar to other drugs, and heavy or prolonged use can damage memory, decision-making, and other brain functions.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Is it true that the brain doesn't fully develop until your twenties, and does that affect risk?</div>
            <div class="art-faq-a">Yes. The prefrontal cortex, which governs judgement and impulse control, typically continues developing into the mid-twenties. Drug exposure during the teenage and young adult years can therefore carry a higher risk of lasting harm.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">What's the first step if I or someone I know wants help?</div>
            <div class="art-faq-a">Start by being honest about the problem, then reach out to a doctor, counsellor, or addiction treatment facility. You don't have to figure out the rest before taking that first step.</div>
          </div>
        </div>
      </section>
      <div class="art-references">
        <div class="art-ref-title">References</div>
        <ol class="art-ref-list">
          <li>National Cancer Institute. <em>Drug.</em> 2011. https://www.cancer.gov/publications/dictionaries/cancer-terms/def/drug</li>
          <li>Australian Government Department of Health. <em>What Are Drugs?</em> 2025. https://www.health.gov.au/topics/drugs/about-drugs/what-are-drugs</li>
          <li>National Cancer Institute. <em>Drug Abuse.</em> 2011. https://www.cancer.gov/publications/dictionaries/cancer-terms/def/drug-abuse</li>
          <li>American Addiction Centers. <em>How Drugs Affect the Central Nervous System.</em> 2025. https://americanaddictioncenters.org/health-complications-addiction/central-nervous-system</li>
          <li>Young, C., Reddy, V., &amp; Sonne, J. <em>Neuroanatomy, Basal Ganglia.</em> 2025. StatPearls Publishing. https://www.ncbi.nlm.nih.gov/books/NBK537141/</li>
          <li>Yang, T., et al. <em>The Role of the Amygdala in Emotional Processing.</em> 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC7904248/</li>
          <li>UNODC / Federal Government of Nigeria. <em>Drug Use in Nigeria 2018.</em> https://www.unodc.org/documents/nigeria/Drug_Use_in_Nigeria_2018_FINAL.pdf</li>
        </ol>
      </div>`,
  },
  {
    num: 9,
    id: "cortex-article-9",
    category: "Mental Health &amp; Performance",
    gradFrom: "#0A1A2A",
    gradTo: "#1A3A5A",
    badgeBg: "rgba(100,181,246,0.2)",
    badgeColor: "#BBDEFB",
    cardColor: "#64B5F6",
    title:
      "Stress and the Brain:<br/>What Happens When Pressure Becomes a Pattern",
    deck: "Stress is a normal part of life — until it isn't. Here is what chronic stress actually does to your brain, and what you can do about it.",
    bylineDate: "Published by EOS · Youth Brain Health Culture Organisation",
    cardTitle:
      "Stress and the Brain: What Happens When Pressure Becomes a Pattern",
    cardExcerpt:
      "Chronic stress doesn't just feel bad — it rewires the brain. Here is what happens and how to fight back.",
    toc: [
      { href: "#s-intro", text: "Introduction" },
      { href: "#s-what", text: "What Is Stress?" },
      { href: "#s-signs", text: "Signs of Stress" },
      { href: "#s-response", text: "How the Body Responds" },
      { href: "#s-chronic", text: "Effects of Chronic Stress" },
      { href: "#s-deal", text: "How to Deal With Stress" },
      { href: "#s-wrapup", text: "Wrap Up" },
      { href: "#s-faq", text: "FAQs" },
    ],
    keyTakeaways: [
      "Stress is a normal part of life and even helpful in short bursts, but it becomes harmful when it is constant or excessive.",
      "Chronic stress rewires the brain, strengthening survival-focused areas like the amygdala while weakening the prefrontal cortex's capacity for higher-level thinking.",
      "Persistent stress may damage the brain's insulin receptors and has been linked to the cascade of changes that contribute to Alzheimer's Disease.",
      "Chronic stress shows up through physical and emotional symptoms like poor sleep, difficulty concentrating, anxiety, and irritability.",
      "Sleep, exercise, healthy habits, meditation, and faith-based fellowship are all practical, evidence-backed ways to manage stress and protect brain health.",
    ],
    bodyHtml: `<section id="s-intro">
        <p class="art-lede">Life as an average Nigerian is stressful. If you live in Lagos, your stress is doubled. You get up early to beat the traffic, your day is an endless cycle of meetings and tasks, and then you hustle for a bus or bike home, deal with traffic, and by the time you get in it is already time to sleep — only to repeat it all the next day. Remote workers are not much better off: while they skip the commute, remote work often means working around the clock, dealing with power outages and slow networks on top of everything else.</p>
        <p>All of this takes a toll. Stress is a fixture of daily Nigerian life, and many of us underestimate what it is doing to our brains.</p>
      </section>
      <section id="s-what">
        <h2>What Is Stress?</h2>
        <p>The World Health Organisation defines stress as a state of worry or mental tension caused by a difficult situation.<sup>[1]</sup> Stress is a normal part of daily life, but it becomes harmful when it is uncontrolled or chronic.</p>
      </section>
      <section id="s-signs">
        <h2>What Are the Signs That I Am Under Stress?</h2>
        <p>If you are experiencing any of the following, you could be under stress: difficulty sleeping, difficulty concentrating, anxiety, difficulty breathing, chest pains, constipation or indigestion, unexplained weight loss or gain, excessive sweating in cool conditions, racing thoughts, panic attacks, irritability and aggression, or feeling overwhelmed most of the time.<sup>[5]</sup></p>
        <div class="art-callout art-callout-blue">
          <div class="art-callout-icon">📌</div>
          <div>One or more of these symptoms appearing consistently is worth paying attention to — not dismissing. See the section below on managing stress for practical steps you can take.</div>
        </div>
      </section>
      <section id="s-response">
        <h2>How Does the Body Respond to Stress?</h2>
        <p>Stress has some beneficial effects. It signals danger and triggers the fight-or-flight system, increasing alertness and physical readiness. When the brain senses a stressful situation, the sensory organs send information to the amygdala — the brain's emotional processing centre. The amygdala sends distress signals to the hypothalamus, which acts like a command centre.</p>
        <p>The hypothalamus activates the sympathetic nervous system, triggering the release of stress hormones like adrenaline and noradrenaline. These cause the heart to pump harder, blood pressure to spike, blood flow to increase to the muscles, the eyes to dilate, the lungs to expand, and extra glucose to be released. This entire process happens faster than conscious thought — which is why a person can react to danger before they have even finished processing what they are seeing.</p>
        <p>When the situation passes, the parasympathetic nervous system steps in to reverse the process — withdrawing adrenaline, normalising blood pressure, and allowing the body to stabilise. Think of it like a car: the sympathetic nervous system is the accelerator, the parasympathetic nervous system is the brake.<sup>[2]</sup></p>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">🧠</div>
          <div>Short-term stress is a survival tool. The problem begins when the accelerator is pressed constantly and the brake rarely gets a chance to engage.</div>
        </div>
      </section>
      <section id="s-chronic">
        <h2>Effects of Chronic Stress on the Brain</h2>
        <p>Chronic stress occurs when the brain is exposed to too many stressful situations for too long — a state called allostatic overload. The brain becomes easier to trigger, producing stress responses even in situations that don't warrant them.</p>
        <p>Studies show that chronic stress physically rewires the brain. Survival-focused areas like the amygdala grow stronger and more reactive, while regions responsible for higher-order thinking — such as the prefrontal cortex — become less developed. The brain is like a muscle: what you exercise grows, what you neglect weakens.<sup>[3]</sup></p>
        <p>Chronic stress also contributes to neurodegenerative disease. Persistent overstimulation can cause the death of brain cells and makes it harder to relax without external help such as medication or therapy. Excess cortisol and overactive excitatory signalling can damage the brain's insulin receptors — which help the brain use energy efficiently and protect against damage. Damage to these receptors can set off a chain of events that may contribute to Alzheimer's Disease.<sup>[4]</sup></p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">⚠️</div>
          <div>Chronic stress is also harmful to mental health. Persistent stress can build into anxiety, burnout, and depression — particularly when the stressor shows no sign of ending, creating the sense of a never-ending loop.</div>
        </div>
      </section>
      <section id="s-deal">
        <h2>How Do I Deal With Chronic Stress?</h2>
        <h3>Sleep</h3>
        <p>As much as possible, prioritise a good night's sleep. Sleep allows the brain to withdraw stress hormones from the bloodstream, rest, repair damaged structures, and recharge. It is one of the most powerful tools available for stress recovery.</p>
        <h3>Destress Habits</h3>
        <p>Cultivate habits that help you unwind. Listening to soothing music, spending time with friends, or watching a film are all legitimate forms of stress relief. The goal is to give your nervous system consistent opportunities to shift into recovery mode.</p>
        <h3>Exercise</h3>
        <p>Physical activity is one of the most effective stress management tools available. After exercise, the body withdraws stress hormones and releases relaxation hormones like serotonin and dopamine, which lift mood and promote rest. This is why a workout leaves you feeling better than when you started.</p>
        <h3>Meditation</h3>
        <p>Meditation helps clear mental tension and promotes the withdrawal of stress hormones. Even a few minutes of focused, deliberate quiet can shift the brain out of its stressed state and into a more regulated one.</p>
        <h3>Faith and Fellowship</h3>
        <p>For religious people, worship and community fellowship offer genuine relief. Social connection — encouraging one another, sharing experiences, singing, reading scripture — has well-documented psychological and biological benefits. Strong social bonds are one of the most consistent predictors of healthy living in the research literature. This is one area where science and faith broadly agree.</p>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">💡</div>
          <div>You don't have to let stress take away your health. Find your method before stress finds its way into your brain's wiring — and reach out to us at <strong>theeosfoundation.org</strong> if you need support or resources.</div>
        </div>
      </section>
      <section id="s-wrapup">
        <h2>Wrap Up</h2>
        <p>Stress is part of daily life, and in mild doses it is actually useful. But the doses most Nigerians are absorbing — financial pressure, insecurity, erratic power supply, the grind — are genuinely damaging. You don't have to accept that. Find the tools that work for you and use them consistently. Deal with the stress before it deals with you.</p>
        <p>Further reading: one in seven Nigerians has abused a drug in the past year. Drug abuse has devastating effects on the brain. Read <a href="#" data-route="cortex-article-8" style="color:var(--teal);text-decoration:underline">The Brain on Drugs: What Addiction Actually Does to Your Mind</a>.</p>
      </section>
      <section id="s-faq">
        <h2>Frequently Asked Questions</h2>
        <div class="art-faq">
          <div class="art-faq-item">
            <div class="art-faq-q">Is all stress bad for me?</div>
            <div class="art-faq-a">No. In small, short-term doses, stress is actually helpful — it sharpens your focus and prepares your body to respond to danger or pressure. It only becomes harmful when it is constant or excessive, a state known as chronic stress.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">How do I know if my stress has become chronic?</div>
            <div class="art-faq-a">If you notice ongoing symptoms like difficulty sleeping, trouble concentrating, anxiety, irritability, racing thoughts, or feeling overwhelmed most of the time, you could be dealing with chronic stress rather than the normal, short-lived kind.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Can stress really cause Alzheimer's Disease?</div>
            <div class="art-faq-a">Researchers haven't established stress as a direct cause, but persistent stress is believed to damage the brain's insulin receptors through excess cortisol, and this is thought to be one of the steps in the chain of events that can contribute to Alzheimer's Disease.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Can the brain recover from the effects of chronic stress?</div>
            <div class="art-faq-a">Yes, to a large extent. The brain is naturally adaptable, and habits like good sleep, regular exercise, meditation, and strong social connections can help reverse some of the effects of chronic stress over time.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Does faith actually help with stress, or is that just a personal belief?</div>
            <div class="art-faq-a">Both. Fellowship, worship, and community have genuine psychological benefits — social connection and support are well-documented stress reducers in science — so for religious people, faith-based community offers both spiritual and biological relief.</div>
          </div>
        </div>
      </section>
      <div class="art-references">
        <div class="art-ref-title">References</div>
        <ol class="art-ref-list">
          <li>World Health Organization (WHO). <em>Stress.</em> 2026. https://www.who.int/news-room/questions-and-answers/item/stress</li>
          <li>Harvard Health Publishing. <em>Understanding the Stress Response.</em> 2025. https://www.health.harvard.edu/healthy-aging-and-longevity/understanding-the-stress-response</li>
          <li>Harvard Health Publishing. <em>Protect Your Brain from Stress.</em> 2021. https://www.health.harvard.edu/mind-and-mood/protect-your-brain-from-stress</li>
          <li>Bruce S. McEwen. <em>Neurobiological and Systemic Effects of Chronic Stress.</em> 2017. https://pmc.ncbi.nlm.nih.gov/articles/PMC5573220/</li>
          <li>Mind. <em>Signs and Symptoms of Stress.</em> https://www.mind.org.uk/information-support/types-of-mental-health-problems/stress/signs-and-symptoms-of-stress/</li>
        </ol>
      </div>`,
  },
  {
    num: 10,
    id: "cortex-article-10",
    category: "Mental Health &amp; Performance",
    gradFrom: "#1A0A2A",
    gradTo: "#3A1A5A",
    badgeBg: "rgba(206,147,216,0.2)",
    badgeColor: "#E1BEE7",
    cardColor: "#CE93D8",
    title: "Anxiety and the Brain:<br/>How Anxiety Affects the Nervous System",
    deck: "How fear, stress, and survival wiring collide in your head — and why your mind won't switch off.",
    bylineDate: "Published by EOS · Youth Brain Health Culture Organisation",
    cardTitle: "Anxiety and the Brain: How Anxiety Affects the Nervous System",
    cardExcerpt:
      "How fear, stress, and survival wiring collide in your head — and what you can do about it.",
    toc: [
      { href: "#ax-intro", text: "Introduction" },
      { href: "#ax-what", text: "What Is Anxiety?" },
      { href: "#ax-normal", text: "Normal vs Maladaptive" },
      { href: "#ax-brain", text: "What Happens in Your Brain" },
      { href: "#ax-responses", text: "The Four Responses" },
      { href: "#ax-harm", text: "How Anxiety Harms the Brain" },
      { href: "#ax-deal", text: "How to Deal With Anxiety" },
      { href: "#ax-wrapup", text: "Wrap Up" },
      { href: "#ax-faq", text: "FAQs" },
    ],
    keyTakeaways: [
      "Anxiety is a normal response to a real stressor; maladaptive anxiety persists without a trigger or long after the situation has passed.",
      "The amygdala, hippocampus, and hypothalamus work together to produce the body's anxiety response.",
      "Frequent anxiety weakens the prefrontal cortex's ability to regulate the amygdala, making reactions harder to control over time.",
      "Unmanaged anxiety can disrupt sleep and concentration, and may lead to depression if left unaddressed.",
      "Talking to someone, staying active, and practical problem-solving are simple but effective ways to manage anxiety.",
    ],
    bodyHtml: `<section id="ax-intro">
        <p class="art-lede">When you were a kid, was there ever a time your parents gave you something to do before they got back, and you forgot about it? Do you remember the feeling when you heard the horn of their car pulling in — the almost-panic when you remembered the forgotten task and the consequences coming your way? That feeling is anxiety. Most of us know it well. Fewer of us know what it is actually doing to our brains.</p>
      </section>
      <section id="ax-what">
        <h2>What Is Anxiety?</h2>
        <p>Anxiety is the feeling you get when you are stressed or worried about something.<sup>[1]</sup> It can range from mild concern about a situation to a full anxiety attack. The experience is common — but not all anxiety is the same.</p>
      </section>
      <section id="ax-normal">
        <h2>Normal vs Maladaptive Anxiety</h2>
        <p>Normal anxiety is the body's natural response to a genuinely stressful situation. Remember the tension before JAMB — the stories of people failing, the worry that you could be among them? Once the results came out, the anxiety went away. In normal anxiety, there is something real to be concerned about, and when it resolves, so does the feeling.</p>
        <p>Maladaptive anxiety, by contrast, has no clear trigger, or it persists long after the situation has passed. Imagine still worrying about JAMB results months after they were released — that would not be normal. Maladaptive anxiety can interfere with work, daily activities, and family life.<sup>[2]</sup></p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">📌</div>
          <div>The key distinction: normal anxiety has a cause and an end. Maladaptive anxiety lingers without reason — and that persistence is what makes it harmful to the brain.</div>
        </div>
      </section>
      <section id="ax-brain">
        <h2>What Happens in Your Brain During Anxiety?</h2>
        <p>Several brain regions work together when anxiety strikes. The amygdala — the brain's emotional processing centre — sends signals directly to the hypothalamus (the command centre), which activates the sympathetic nervous system, or fight-or-flight system. At the same time, the amygdala signals the hippocampus, which stores long-term memories and attaches context to them.<sup>[3]</sup> This is why certain places, sounds, or situations can trigger anxiety even when the danger itself is long gone — the brain has filed them as associated threats.</p>
      </section>
      <section id="ax-responses">
        <h2>The Four Responses to Anxiety</h2>
        <h3>Fight</h3>
        <p>The body prepares for confrontation. Adrenaline is released, blood pressure rises, blood flow increases to the extremities, breathing quickens, and pupils dilate. Aggression increases and pain sensitivity drops. The person feels intense anger and a strong urge to confront.</p>
        <h3>Flight</h3>
        <p>The body prepares to run. The physical mechanisms are similar to fight, but the emotional tone is fear rather than anger. The person feels trapped and urgently needs to escape the situation or environment.</p>
        <h3>Freeze</h3>
        <p>The amygdala overrides the prefrontal cortex — the seat of rational thought — and the person becomes temporarily unable to make any decisions at all.<sup>[4]</sup> This is experienced as panic: thoughts scrambling, no clear action available. It is a real brain-based response, not a personal weakness.</p>
        <h3>Fawn</h3>
        <p>Some researchers add a fourth response: fawn. This is a submissive reaction — the brain attempts to avoid punishment by complying with others.<sup>[4]</sup> People pleasers, those who can't say no, or employees who stay silent when their boss is wrong are all exhibiting versions of this response. It is driven by fear of consequence, not genuine agreement.</p>
        <div class="art-callout art-callout-blue">
          <div class="art-callout-icon">🧠</div>
          <div>All four responses — fight, flight, freeze, fawn — are the brain doing what it was designed to do. The problem is when they get triggered in situations that don't actually require them.</div>
        </div>
      </section>
      <section id="ax-harm">
        <h2>How Is Anxiety Harmful to Your Brain?</h2>
        <p>During anxious situations, the prefrontal cortex takes a backseat to the amygdala — which is why people sometimes act irrationally when anxious.<sup>[6]</sup> When anxiety is frequent, the prefrontal cortex's ability to regulate the amygdala weakens over time, making emotional reactions harder to control.<sup>[7]</sup> Someone naturally prone to aggression becomes more likely to react badly to minor provocations. The hippocampus learns to associate certain situations with certain responses, reinforcing the cycle.</p>
        <p>Beyond the brain, anxiety disrupts sleep, concentration, and work performance. If it is not addressed and the stressor continues without relief, it can develop into depression — particularly when the situation feels endless and without resolution.</p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">⚠️</div>
          <div>Anxiety that goes unmanaged long-term doesn't just feel bad — it structurally changes the brain's ability to respond calmly to future situations. Addressing it early matters.</div>
        </div>
      </section>
      <section id="ax-deal">
        <h2>How to Deal With Anxiety</h2>
        <h3>Acknowledge What You Are Feeling</h3>
        <p>Name the emotion. If you are fired up, scared, or overwhelmed, acknowledge it. This alone helps engage the prefrontal cortex and gives you a moment of rational distance from the feeling rather than being swallowed by it.</p>
        <h3>Talk to Someone</h3>
        <p>If anxiety is building day by day, talking to someone you trust is important. A family member, friend, or professional. A problem shared is, at minimum, a problem no longer carried alone — and sometimes that shift in perspective is exactly what breaks the cycle.</p>
        <h3>Find a Relaxing Activity</h3>
        <p>Have something that reliably helps you unwind — friends, a film, music, a game. The goal is to give your nervous system consistent recovery time. One warning: do not turn to alcohol or drugs. They may offer temporary relief, but long-term they worsen anxiety significantly.<sup>[5]</sup></p>
        <h3>Exercise</h3>
        <p>Physical exercise is one of the most effective anxiety interventions available. After exercise, the body clears stress hormones and releases dopamine and serotonin. People who exercise regularly report feeling calmer, more in control, and better able to handle pressure. You don't need a gym — 20 push-ups morning and evening, a run, a walk.</p>
        <h3>Meditation and Breathing</h3>
        <p>Breathing exercises and meditation slow the heart rate and breathing, engaging the parasympathetic nervous system — the brake. Even a few minutes of deliberate calm creates space to think clearly rather than react.</p>
        <h3>Faith and Fellowship</h3>
        <p>For religious people, worship and community offer genuine relief. Singing, scripture, prayer, and shared conversation with fellow believers are all forms of social connection with well-documented psychological benefits. Faith and science agree here: strong community reduces anxiety.</p>
        <h3>Look for Practical Solutions</h3>
        <p>Where you can act, act. Read your books before the exam. Clear tasks before deadlines pile up. Take the steps available to you. Practical action on controllable problems reduces the feeling of helplessness that feeds anxiety.</p>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">💡</div>
          <div>If anxiety is affecting your sleep, work, or relationships consistently, speak to a professional rather than managing it alone. Reach out to us at <strong>theeosfoundation.org</strong> and we will help point you in the right direction.</div>
        </div>
      </section>
      <section id="ax-wrapup">
        <h2>Wrap Up</h2>
        <p>Anxiety is part of life — especially Nigerian life. But it does not have to take over your brain or your day. The tools exist. Use them before the anxiety becomes a pattern your brain starts treating as normal.</p>
        <p>Further reading: anxiety and stress share the same nervous system wiring. Read <a href="#" data-route="cortex-article-9" style="color:var(--teal);text-decoration:underline">Stress and the Brain: What Happens When Pressure Becomes a Pattern</a>.</p>
      </section>
      <section id="ax-faq">
        <h2>Frequently Asked Questions</h2>
        <div class="art-faq">
          <div class="art-faq-item">
            <div class="art-faq-q">What's the difference between normal anxiety and an anxiety disorder?</div>
            <div class="art-faq-a">Normal anxiety has a clear trigger and fades once the situation passes. An anxiety disorder involves worry that persists without a real trigger, or long after the stressful event is over, and it interferes with daily life.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Why do I sometimes freeze instead of fighting or running when I'm anxious?</div>
            <div class="art-faq-a">Freezing happens when the amygdala overrides the prefrontal cortex, temporarily shutting down your ability to make rational or emotional decisions. It is a real, brain-based response — not a personal failing.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Can anxiety actually change my brain over time?</div>
            <div class="art-faq-a">Yes. Frequent anxiety can weaken the prefrontal cortex's ability to regulate the amygdala, making emotional reactions harder to control and increasing the risk of depression if it continues long-term.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Is it bad to distract myself from anxiety with hobbies or games?</div>
            <div class="art-faq-a">Not at all. Healthy distractions like exercise, hobbies, or time with people you trust can genuinely help calm the body's stress response. The concern is only with turning to alcohol or drugs, which worsen anxiety long-term.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">When should I talk to a professional about my anxiety?</div>
            <div class="art-faq-a">If anxiety is frequent, hard to control, or affecting your sleep, work, or relationships, it is worth speaking to a trusted person or a mental health professional rather than managing it alone.</div>
          </div>
        </div>
      </section>
      <div class="art-references">
        <div class="art-ref-title">References</div>
        <ol class="art-ref-list">
          <li>UNICEF. <em>What Is Anxiety?</em> 2024. https://www.unicef.org/parenting/mental-health/what-is-anxiety</li>
          <li>Shin, L. M., &amp; Liberzon, I. <em>The Neurocircuitry of Fear, Stress, and Anxiety Disorders.</em> 2010. https://pmc.ncbi.nlm.nih.gov/articles/PMC5490257/</li>
          <li>Martin, E. I., et al. <em>The Neurobiology of Anxiety Disorders.</em> 2009. https://pmc.ncbi.nlm.nih.gov/articles/PMC3684250/</li>
          <li>Verywell Mind (Kendra Cherry). <em>This Is Your Brain on Anxiety.</em> 2024. https://www.verywellmind.com/this-is-your-brain-on-anxiety-8733665</li>
          <li>World Health Organization (WHO). <em>Anxiety Disorders.</em> 2023. https://www.who.int/news-room/fact-sheets/detail/anxiety-disorders</li>
          <li>Calhoon, G. G., &amp; Tye, K. M. <em>Resolving the Neural Circuits of Anxiety.</em> 2015. https://pmc.ncbi.nlm.nih.gov/articles/PMC4349396/</li>
          <li>Fiocco, A. J., &amp; Faraji, J. <em>Can Anxiety Damage the Brain?</em> 2016. https://pubmed.ncbi.nlm.nih.gov/26651008/</li>
        </ol>
      </div>`,
  },
  {
    num: 11,
    id: "cortex-article-11",
    category: "Mental Health &amp; Performance",
    gradFrom: "#2A1A0A",
    gradTo: "#5A3A1A",
    badgeBg: "rgba(255,204,128,0.2)",
    badgeColor: "#FFE0B2",
    cardColor: "#FFCC80",
    title: "Your Brain Called.<br/>It Wants the Weekend Off",
    deck: "Before you plan another \"productive\" weekend, here's what burnout is actually doing to your brain — and why rest isn't optional.",
    bylineDate: "Published by EOS · Youth Brain Health Culture Organisation",
    cardTitle: "Your Brain Called. It Wants the Weekend Off",
    cardExcerpt:
      "Before you plan another \"productive\" weekend — here's what burnout is actually doing to your brain, and why rest isn't optional.",
    toc: [
      { href: "#b-intro", text: "Introduction" },
      { href: "#b-what", text: "What Is Burnout?" },
      { href: "#b-signs", text: "Signs of Burnout" },
      { href: "#b-brain", text: "How Burnout Affects the Brain" },
      { href: "#b-resilience", text: "Mental Resilience" },
      { href: "#b-protect", text: "How to Protect Yourself" },
      { href: "#b-wrapup", text: "Wrap Up" },
      { href: "#b-faq", text: "FAQs" },
    ],
    keyTakeaways: [
      "Burnout isn't just tiredness — it's chronic exhaustion that builds when work stress goes unmanaged for too long.",
      "Burnout physically changes your brain, enlarging the amygdala and weakening its connection to your prefrontal cortex, making it harder to keep your emotions in check.",
      "The dysregulation burnout causes in your stress-response system disrupts sleep length and quality, keeping your body stuck in overdrive.",
      "Your mental resilience — how quickly you bounce back from stress — plays a big role in whether burnout catches up with you.",
      "Protecting yourself means setting limits, talking to someone, and actually resting — because rest isn't optional, it's maintenance.",
    ],
    bodyHtml: `<section id="b-intro">
        <p class="art-lede">Hey you — yes, you. Is it until your brain literally gives out that you will remember you need some time off? Your brain is screaming for rest, and you are not listening. Thank God it's Friday. Cheers to the weekend — a time to kick back and relax from the stress of the week. Whether you have an outing planned or you are staying in to catch up on your favourite series, what matters is that you actually rest. This week we examined stress and anxiety and their effects on the brain. Today's topic is closely related: burnout.</p>
      </section>
      <section id="b-what">
        <h2>What Is Burnout?</h2>
        <p>The World Health Organisation defines burnout as "a syndrome conceptualised as resulting from chronic workplace stress that has not been successfully managed."<sup>[1]</sup></p>
        <p>Many of us know this feeling well. The physical and mental exhaustion of waking up every morning to go to work, being physically present but wishing you were anywhere else, giving just enough and not a drop more. The joy of the job has been replaced by exhaustion. There is always something to do — the work never stops. When stress at work is not well managed, burnout is the result.</p>
        <div class="art-callout art-callout-blue">
          <div class="art-callout-icon">📌</div>
          <div>Burnout is different from ordinary tiredness. Everyone gets tired sometimes. But when it is every time — and it is not just physical but also mental and emotional — something is wrong.</div>
        </div>
      </section>
      <section id="b-signs">
        <h2>What Are the Signs of Burnout?</h2>
        <ul class="art-firstaid-list">
          <li>Frequent exhaustion no matter how much you rest</li>
          <li>Feeling unmotivated at work</li>
          <li>Dreading responsibilities you used to enjoy</li>
          <li>Difficulty focusing or making more mistakes than usual</li>
          <li>Headaches, tension, and indigestion</li>
          <li>Feeling irritable or overwhelmed<sup>[2]</sup></li>
        </ul>
        <p>If several of these are showing up consistently, pay attention. Burnout does not resolve on its own — it needs to be addressed.</p>
      </section>
      <section id="b-brain">
        <h2>How Does Burnout Affect the Brain?</h2>
        <p>Like stress and anxiety, burnout primarily impacts the amygdala. Studies show that people suffering from burnout have an enlarged amygdala — the brain's emotional processing centre, responsible for fear and aggression. These same studies found that the connections between the amygdala and the prefrontal cortex were significantly weaker in people with burnout.<sup>[3]</sup></p>
        <p>This means burnout makes it harder to keep negative emotions in check. People who are normally calm become more likely to lash out. The prefrontal cortex — which handles decision-making and emotional regulation — loses its ability to manage what the amygdala is sending through.</p>
        <p>In addition, burnout causes dysregulation in both the hypothalamic-pituitary-adrenal axis and the sympathetic nervous system — the systems that help the body handle stress and return to calm.<sup>[4]</sup> Think of it like a car that accelerates well but struggles to brake. The body stays overactive and imbalanced, which leads to a significant reduction in both sleep length and quality.</p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">⚠️</div>
          <div>Burnout physically changes the brain. An enlarged amygdala with weakened prefrontal connections is not a metaphor — it is a measurable structural change that affects how you think, feel, and react every day.</div>
        </div>
      </section>
      <section id="b-resilience">
        <h2>What Is Mental Resilience and How Does It Affect Burnout?</h2>
        <p>Mental resilience is the ability to remain functional or recover quickly despite stressful and exhausting situations. It varies widely between people. In any office, some people still have energy at closing time while others are drained by noon. Some people are simply better adapted to stress than others.</p>
        <p>People with high mental resilience are less likely to suffer from burnout because their systems recover more efficiently from daily pressure. This resilience can be built — through sleep, exercise, community, and how you manage your time and energy.</p>
      </section>
      <section id="b-protect">
        <h2>How Do I Protect Myself From Burnout?</h2>
        <h3>Don't Take On More Than You Can Handle</h3>
        <p>Burning the candle at both ends burns it out faster. At work and in your personal life, do not take on more than you can carry. Even Superman has limits. Learn to decline when you are already stretched thin — your health is not a resource you can borrow against indefinitely. If you are being given too many tasks at work, let your supervisor know your plate is full. If something happened to you, the company would not stop for even half a day. Your work is important, but so is your ability to see the fruits of it.</p>
        <h3>Have Someone to Talk To</h3>
        <p>Having someone to pour your mind out to is genuinely therapeutic — a spouse, a close friend, or a licensed counsellor. Even if the person cannot solve your problem, they can help carry the weight of it. You are not alone in what you are dealing with.</p>
        <h3>Schedule Real Rest</h3>
        <p>It's the weekend — use it. Go out with friends, stay in with a good film, listen to music, sleep in during the rains. What matters is that you genuinely let go of the week. Find what relaxes you and protect that time.</p>
        <h3>Take Care of Your Body</h3>
        <p>Eat well, exercise, and sleep enough. Exercise clears stress hormones and releases dopamine and serotonin. Good food gives you the energy to function. And watching TikTok until 3 AM when you have an 8 AM start is a bad trade. Sleep is not a luxury — it is recovery.</p>
        <h3>Take Breaks During the Day</h3>
        <p>Rather than pushing through from start to finish without stopping, take short breaks to let your brain regroup. Even a brief walk clears the head. You will return to the work sharper than if you had never stopped.</p>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">💡</div>
          <div>This weekend: what do you actually enjoy outside work? Plan for it deliberately. Rest is not wasted time — it is the maintenance that keeps everything else running. If you need support, visit <strong>theeosfoundation.org</strong>.</div>
        </div>
      </section>
      <section id="b-wrapup">
        <h2>Wrap Up</h2>
        <p>Rest is not optional. Burnout is a serious condition — left unchecked, it can develop into depression. Check yourself for the signs, and if they are there, take care of yourself. Don't spend your days building a future you are too exhausted to enjoy.</p>
        <p>Further reading: anxiety is closely related to burnout and shares many of the same brain mechanisms. Read <a href="#" data-route="cortex-article-10" style="color:var(--teal);text-decoration:underline">Anxiety and the Brain: How Anxiety Affects the Nervous System</a>.</p>
      </section>
      <section id="b-faq">
        <h2>Frequently Asked Questions</h2>
        <div class="art-faq">
          <div class="art-faq-item">
            <div class="art-faq-q">Is burnout the same as depression?</div>
            <div class="art-faq-a">Not quite, but they are related. Burnout is tied specifically to chronic, unmanaged work stress, while depression is a broader mental health condition that can appear regardless of job situation. That said, unchecked burnout can develop into depression, so it's worth taking seriously.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">How long does it take to recover from burnout?</div>
            <div class="art-faq-a">There is no fixed timeline. It depends on how long the burnout has gone unaddressed and what changes you are able to make. For some, a few weeks of proper rest helps. For others — especially where burnout has persisted for months — recovery takes longer and may need professional support.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Can burnout happen outside of work?</div>
            <div class="art-faq-a">Yes. While this article focuses on workplace burnout, the same chronic stress-and-exhaustion pattern can emerge from school, caregiving, ministry, or any responsibility that never lets up. If it feels relentless and you are not recovering between demands, it counts.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Is burnout a sign of weakness?</div>
            <div class="art-faq-a">No. It is actually more common in people who care deeply and push themselves hard. Burnout is your brain and body signalling that the pace is not sustainable — not a character flaw.</div>
          </div>
        </div>
      </section>
      <div class="art-references">
        <div class="art-ref-title">References</div>
        <ol class="art-ref-list">
          <li>World Health Organization (WHO). <em>Burn-out an "Occupational Phenomenon": International Classification of Diseases.</em> 2019. https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases</li>
          <li>Mental Health America (MHA). <em>Burnout: Signs, Causes, and Recovery.</em> 2024. https://mhanational.org/resources/burnout-signs-causes-recover/</li>
          <li>Association for Psychological Science (APS). <em>Burnout and the Brain.</em> 2022. https://www.psychologicalscience.org/observer/burnout-and-the-brain</li>
          <li>SAGE Journals. <em>Burnout and the Brain: A Review of Structural and Functional Neurobiological Correlates of Burnout.</em> 2022. https://pmc.ncbi.nlm.nih.gov/articles/PMC9478693/</li>
        </ol>
      </div>`,
  },
  {
    num: 12,
    id: "cortex-article-12",
    category: "Mental Health &amp; Performance",
    gradFrom: "#3A0A1A",
    gradTo: "#6A1A3A",
    badgeBg: "rgba(244,143,177,0.2)",
    badgeColor: "#F8BBD0",
    cardColor: "#F48FB1",
    title:
      "What Is Depression?<br/>Causes, Myths, and Facts Every Nigerian Should Know",
    deck: "Depression is not just \"being sad.\" Here's what's actually going on — and why smiling doesn't rule it out.",
    bylineDate: "Published by EOS · Youth Brain Health Culture Organisation",
    cardTitle:
      "What Is Depression? Causes, Myths, and Facts Every Nigerian Should Know",
    cardExcerpt:
      "Depression is not just \"being sad.\" Here's what's actually going on — and why smiling doesn't rule it out.",
    toc: [
      { href: "#dep-intro", text: "Introduction" },
      { href: "#dep-what", text: "What Is Depression?" },
      { href: "#dep-types", text: "Types of Depression" },
      { href: "#dep-myths", text: "Myths About Depression" },
      { href: "#dep-common", text: "How Common Is Depression?" },
      { href: "#dep-matter", text: "Why Does It Matter?" },
      { href: "#dep-wrapup", text: "Wrap Up" },
      { href: "#dep-faq", text: "FAQs" },
    ],
    keyTakeaways: [
      "Depression is a persistent mental disorder, not ordinary sadness that passes on its own.",
      "Someone can look happy in public and still be depressed. Smiling doesn't rule it out.",
      "Financial pressure, insecurity, and the general hardship of daily life in Nigeria are real, documented contributors to depression and anxiety.",
      "Nigeria's official depression numbers (around 4-6%) are likely far lower than reality, since hospital-based studies show rates as high as 45-90% among people who actually seek care.",
      "Untreated depression is a leading contributor to suicide. Getting help early saves lives.",
    ],
    bodyHtml: `<section id="dep-intro">
        <p class="art-lede">Hey bro, hi sis, are you okay, or are you just putting on a brave face? I know the situation in the country is not good, and there would be a million and one thoughts running through your head. Things will get better. This week, we will be talking about something most of us know a bit about: depression. It is a serious condition that requires swift action. Without further ado, let's get into it.</p>
      </section>
      <section id="dep-what">
        <h2>What Is Depression?</h2>
        <p>Depression refers to a mental disorder in which the person experiences a depressed mood or a loss of pleasure in activities for a long period of time.<sup>[1]</sup> It is not just being sad; everyone experiences sadness or feeling down sometimes, but when it goes on for extended periods of time and involves an inability to enjoy activities you once did, then there is a need to get checked out.</p>
      </section>
      <section id="dep-types">
        <h2>What Are the Types of Depression?</h2>
        <p>There are different types of depression. Some of them are seasonal, and they come and go with their associated seasons, while others are more lasting and occur all year round.</p>
        <h3>Major Depressive Disorder</h3>
        <p>This is the most common type of depression. It involves feeling sad or gloomy, loss of appetite, insomnia, and exhaustion. It could be mild, moderate, or severe depending on the extent of the condition. It could also be a one-time occurrence or a repeated one.<sup>[2]</sup></p>
        <h3>Persistent Depressive Disorder</h3>
        <p>In this case, the person might still be able to function normally, but their joy or happiness is significantly reduced. In addition, it is more long-lasting, as the person could experience the symptoms for up to two years. It could also occur concurrently with Major Depressive Disorder, leading to a situation known as Double Depression.<sup>[3]</sup></p>
        <h3>Seasonal Depression</h3>
        <p>This is tied to the seasons, specifically autumn and winter. It is often associated with a lack of sunlight, and it passes after that season concludes. The person experiences exhaustion and sleepiness, low energy levels, withdrawal from social activities, and cravings for sugar or carbohydrates.<sup>[4]</sup></p>
        <h3>Postnatal or Postpartum Depression</h3>
        <p>This is a condition that affects women after childbirth. It usually occurs between two and eight weeks after birth, but it can last up to a year. The symptoms are the same as clinical depression. This condition is different from baby blues, which usually resolve themselves in about two weeks. Postpartum depression can hinder the mother from caring for her child. The usual joy and happiness that come with childbirth are absent, and this often leads to the mother feeling guilty or feeling like she doesn't love her child.<sup>[5]</sup></p>
        <h3>Bipolar Disorder</h3>
        <p>This is a disorder in which the person swings from one extreme range of emotions to another. While everyone has mood swings occasionally, someone with bipolar disorder can swing from one extreme to the other very rapidly. In the manic swing, the person could be hyperactive, excited, euphoric, or even irritable, and in some cases, aggressive. On the other hand, during the depressive episodes, the person could experience guilt or loss of self-worth, trouble concentrating, tiredness or low energy levels, difficulty sleeping, or even thoughts of death or suicide.<sup>[6]</sup></p>
        <h3>Premenstrual Dysphoric Disorder (PMDD)</h3>
        <p>This is an extreme form of Premenstrual Syndrome (PMS). It occurs in the second half of the menstrual cycle, but it improves as the period starts. Symptoms include extreme mood swings (from being irritable and angry to feeling sad and down), sensitivity to rejection, self-deprecating thoughts, anxiety, hopelessness, and difficulty concentrating.<sup>[7]</sup></p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">🧠</div>
          <div>Depression isn't one single experience — it takes several distinct forms, each with its own pattern and timeline. Knowing which one you're looking at matters for getting the right help.</div>
        </div>
      </section>
      <section id="dep-myths">
        <h2>What Are Myths People Believe About Depression?</h2>
        <p>Many of us have heard people say things that are untrue about depression. We have been told that it is just sadness, that a depressed person is weak, or that he/she should just snap out of it. Let us explore these myths.</p>
        <h3>Depression Is Just Sadness</h3>
        <p>Many of us have heard people say they are depressed whenever they are sad. Depression is more than just sadness or feeling down. It is more persistent and involves these feelings lasting for a long while. Depression can keep the person from enjoying activities they used to. A depressed person may start to question the meaning of life or entertain suicidal thoughts.</p>
        <h3>Depression Is Something You Can Just Snap Out Of</h3>
        <p>If it were so easy to snap out of it, suicide numbers yearly would be reduced drastically. A depressed person probably does not want to feel the way they do, but getting out of it is easier said than done. It requires treatment and help to recover from.</p>
        <h3>Depression Only Shows as Sadness</h3>
        <p>Many people can display a form of happiness outside even while they are depressed. In fact, in most friend groups, the one who goes out of his/her way to cheer everybody up is usually the one to check up on. Some people can hide their depression in public — they can smile, laugh, and seem to have fun with others. It is important to always check up on your friends and family, no matter how happy they may seem.</p>
        <h3>Depression Only Affects Those Who Are Not Successful</h3>
        <p>Many successful people go through depression. It does not just affect those who are struggling with life or making headway — it can affect anyone. This is why it is important not to dismiss people whenever they are opening up to us.</p>
        <h3>You Can Just Pray Away Depression</h3>
        <p>Prayer and fellowshipping with other believers help with depression. But it takes more than just prayer. Let's remember the Bible says faith without works is dead. While it is good to pray, the Bible is not against seeking help. As we pray, let us also open up to people who can help with the situation.</p>
        <div class="art-callout art-callout-blue">
          <div class="art-callout-icon">⚠️</div>
          <div>The most dangerous myth is the one that keeps people quiet — the idea that a smiling face means someone is fine. It doesn't. Check on your strong friends too.</div>
        </div>
      </section>
      <section id="dep-common">
        <h2>How Common Is Depression?</h2>
        <p>Depression is more common than we think. Globally, about 3.8% of the world's population is affected by depression, with about 280 million people living with it worldwide.</p>
        <p>In Nigeria, a large Lagos household survey of over 11,000 adults found current depression symptom prevalence of 6.3% in women and 4.4% in men, and women showed significantly higher rates of anhedonia, hypersomnia, fatigue, guilt and worthlessness, poor concentration, and suicidal ideation.<sup>[9]</sup></p>
        <p>Hospital-based studies — people who actually show up seeking care — tell a very different story: rates of 59.6% in Ilesa, 44.5% in Ilorin, 47.8% in Ado Ekiti, and 45.7% in Port Harcourt.<sup>[8]</sup></p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">📌</div>
          <div>The gap between household-survey numbers (4-6%) and hospital-based numbers (45-90%) suggests a lot of depression in Nigeria goes undiagnosed until it becomes severe enough to force someone into a clinic.</div>
        </div>
        <p>Nigerians are one of the most resilient people on earth, but the situation in the country can cause a lot of stress and anxiety. Most times, one source of income can't pay the bills or sort out expenses, so there is a need to have multiple side hustles, which can of course lead to burnout.</p>
        <p>Even when salary comes in, there are too many bills waiting for the salary, and after bills are sorted out, not much is left. Things are getting more expensive, and there is the pressure of needing to make more money to settle the never-ending bills.</p>
        <p>To add to all this, there is insecurity. Travelling by road has become a very risky endeavour due to the increased risk of kidnappings. Even in the towns and cities, there is an increased risk of attacks by bandits, with reports of their sightings spreading every day.</p>
      </section>
      <section id="dep-matter">
        <h2>Why Does It Matter?</h2>
        <p>Depression is a major contributor to suicide, as thousands of people take their lives every year. If some of these people had gotten help, they might still be alive today. Their friends and families could have been spared the pain of mourning them if they had gotten help.</p>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">💡</div>
          <div>Getting help early doesn't just ease suffering — it saves lives. If you or someone you know is struggling, reach out to us at <strong>theeosfoundation.org</strong> for support and resources.</div>
        </div>
      </section>
      <section id="dep-wrapup">
        <h2>Wrap Up</h2>
        <p>If you are struggling with depression or experiencing some of the symptoms seen in this article, please get help. You are not weak for feeling the way you do; neither are you weak for asking for help. Depression is a serious condition, and it can have devastating effects on lives and families. If you are already considering drugs or alcohol to help, they will only make your condition much worse. Drug addiction will only worsen things and wreak havoc on your physical health.</p>
        <p>Your life is more precious than you think it is. Don't entertain thoughts about taking your life. Open up to people you trust and seek professional help. You are not a burden. Speak up.</p>
        <p>In our next article, we will examine the various symptoms of depression and how to recognise them in yourself and others around you. Stay tuned.</p>
        <p>Further reading: burnout can have devastating effects on the brain and the body. Everyone needs to rest and relax from time to time. Read <a href="#" data-route="cortex-article-11" style="color:var(--teal);text-decoration:underline">Your Brain Called. It Wants the Weekend Off</a>.</p>
      </section>
      <section id="dep-faq">
        <h2>Frequently Asked Questions</h2>
        <div class="art-faq">
          <div class="art-faq-item">
            <div class="art-faq-q">What's the difference between depression and just feeling sad?</div>
            <div class="art-faq-a">Sadness passes. Depression lingers for weeks or longer, and it takes away your ability to enjoy things you normally would.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Can someone be depressed and still seem happy?</div>
            <div class="art-faq-a">Yes. Many people mask depression well, especially the ones who seem like the "life of the party." That's often the person you should check on.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Is depression only for people who are struggling financially or in life generally?</div>
            <div class="art-faq-a">No. Depression can affect anyone — successful people, students, parents, pastors, anyone. It doesn't discriminate.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Can prayer alone cure depression?</div>
            <div class="art-faq-a">Prayer and community support genuinely help, but depression usually also needs professional treatment. Faith and treatment work together, not against each other.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">How do I know if what I'm feeling is depression?</div>
            <div class="art-faq-a">If low mood or loss of interest in things you enjoy has lasted for weeks and is affecting your daily life, it's worth speaking to a professional to get properly assessed.</div>
          </div>
        </div>
      </section>
      <div class="art-references">
        <div class="art-ref-title">References</div>
        <ol class="art-ref-list">
          <li>World Health Organization (WHO). <em>Depression.</em> 2025. https://www.who.int/news-room/fact-sheets/detail/depression</li>
          <li>National Center for Biotechnology Information (NCBI Bookshelf). <em>Depression.</em> 2012 (updated periodically). https://www.ncbi.nlm.nih.gov/books/NBK279288/</li>
          <li>University of Utah Health. <em>Depression (Major Depressive Disorder).</em> 2024. https://healthcare.utah.edu/hmhi/conditions/mood-disorders/depression</li>
          <li>Malhi, G. S., &amp; Mann, J. J. <em>Depression.</em> 2018. https://pmc.ncbi.nlm.nih.gov/articles/PMC4673349/</li>
          <li>UNICEF. <em>What Is Postpartum Depression?</em> 2023. https://www.unicef.org/parenting/mental-health/what-postpartum-depression#postpartum-depression</li>
          <li>World Health Organization (WHO). <em>Bipolar Disorder.</em> 2025. https://www.who.int/news-room/fact-sheets/detail/bipolar-disorder</li>
          <li>Otte, C., Gold, S. M., Penninx, B. W., et al. <em>Major Depressive Disorder.</em> 2016. https://pmc.ncbi.nlm.nih.gov/articles/PMC4890701/</li>
          <li>Ogungbemi, A. O., Afolabi, B. A., Falade, J., et al. <em>Assessment of Depressive Symptoms and Sociodemographic Correlates of Adult Patients Attending a National Health Insurance Clinic at a Tertiary Hospital, Southwest Nigeria.</em> 2024. https://pmc.ncbi.nlm.nih.gov/articles/PMC11238166/</li>
          <li>Adewuya, A. O., Coker, O. A., Atilola, O., et al. <em>Gender Difference in the Point Prevalence, Symptoms, Comorbidity, and Correlates of Depression: Findings from the Lagos State Mental Health Survey (LSMHS), Nigeria.</em> 2018. https://link.springer.com/article/10.1007/s00737-018-0839-9</li>
        </ol>
      </div>`,
  },
  {
    num: 13,
    id: "cortex-article-13",
    category: "Mental Health &amp; Performance",
    gradFrom: "#1A1A2A",
    gradTo: "#3A3A5A",
    badgeBg: "rgba(176,190,197,0.2)",
    badgeColor: "#CFD8DC",
    cardColor: "#B0BEC5",
    title:
      "Am I Depressed or am I just Stressed?<br/>The Depression Symptoms Nigerians Keep Mistaking for Stress",
    deck: "Depression's emotional and physical signs often get waved off as \"just stress.\" Here's how to actually tell them apart — in yourself and in the people around you.",
    bylineDate: "Published by EOS · Youth Brain Health Culture Organisation",
    cardTitle:
      "Am I Depressed or am I just Stressed? The Depression Symptoms Nigerians Keep Mistaking for Stress",
    cardExcerpt:
      "The depression symptoms Nigerians keep mistaking for stress — and how to tell the difference before it's too late.",
    toc: [
      { href: "#sym-intro", text: "Introduction" },
      { href: "#sym-signs", text: "Signs and Symptoms" },
      { href: "#sym-different", text: "Does It Show Up Differently?" },
      { href: "#sym-vs-stress", text: "Stress vs Depression" },
      { href: "#sym-help", text: "When to Get Help" },
      { href: "#sym-wrapup", text: "Wrap Up" },
      { href: "#sym-faq", text: "FAQs" },
    ],
    keyTakeaways: [
      'Depression\'s emotional signs include persistent sadness, guilt, poor concentration, and thoughts of death — not just "feeling low."',
      "Physical symptoms matter too — fatigue, sleep and appetite changes, and unexplained body pain or heat are common, especially in Nigerian settings.",
      "Someone can be high-functioning and still be depressed — the smiling, cheerful friend may be struggling the most.",
      "Depression often shows up as anger and risk-taking in men, and as sadness and fatigue in women — which is part of why it's missed in men.",
      "If low mood or loss of interest has lasted two weeks or more, it's time to see a professional — don't wait it out.",
    ],
    bodyHtml: `<section id="sym-intro">
        <p class="art-lede">Okay, I know Nigeria is a country that will stress you. Many times it looks like the country is after your life, and to be honest, it just might be. One salary or means of income is too small to make ends meet, so you have to add side hustles to it. When the income comes in, one bill or the other is waiting for it. By the time you are done settling the bills, "alawee ti ku waso". You go to market, and things have doubled in price; you get home after work after navigating endless traffic, and there is no light. Oya, let us buy petrol to put on the generator, and gbam, fuel has become 1,200 per liter. Just when you thought it couldn't get worse, there are reports of bandits being everywhere, and safety in Nigeria is no longer guaranteed. All these take a toll on your mental health, and they can lead to serious consequences along the line.</p>
        <p>In our last article, we explained what depression is, the types of depression, and how common it is. In this article, we examine the signs and symptoms of depression and how to spot it in yourself and others. So, without further ado, let's dive into it.</p>
      </section>
      <section id="sym-signs">
        <h2>What Are the Signs or Symptoms of Depression?</h2>
        <p>There are several signs and symptoms of depression, and they manifest in various ways.</p>
        <h3>Emotional and Mental Signs</h3>
        <p>Emotional signs of depression include a loss of pleasure in activities, a sad or gloomy mood, excessive guilt, low self-worth, difficulty concentrating, and thinking about death or suicide. Other signs include low libido, substance use, and increased irritability and aggression as well as isolating from friends and family.</p>
        <p>If you or someone you know is exhibiting these signs or symptoms, you or the person should consult a mental health professional, especially if the person is entertaining thoughts of death or suicide.<sup>[1]</sup></p>
        <h3>Physical Signs</h3>
        <p>Physical signs of depression include fatigue or tiredness that does not improve with rest, insomnia or hypersomnia (inability to sleep or sleeping too much), poor appetite, and sudden weight gain or weight loss. Physical pain or inflammation and loss of libido have also been linked to depression.<sup>[2]</sup></p>
        <div class="art-callout art-callout-blue">
          <div class="art-callout-icon">📌</div>
          <div>In a Lagos hospital study, 88% of patients presented mainly with somatization symptoms, with internal heat being the most common one — closely resembling what Nigerians describe as heat or heaviness in the body.<sup>[7]</sup></div>
        </div>
      </section>
      <section id="sym-different">
        <h2>Does Depression Show Up Differently in People?</h2>
        <p>Yes, it does. While there are typical signs, depression also manifests in different ways. There are cases of people with what some people refer to as High Functioning Depression.<sup>[3]</sup> These people can mask their symptoms and appear fine. Such people put on a mask of wellness and internalise their issues. In some cases, the person will smile and even appear happy. This is why you should pay attention to your friends and family. Many times, the person who seems happiest in the room might be the saddest of all. In fact, some of these people will go out of their way to cheer up others when they are sad.</p>
        <h3>In the Workplace</h3>
        <p>People who are efficient and deliver consistently start missing deadlines or become error-prone. These people would have trouble concentrating during meetings; they don't devote their attention to work as they should, and isolate themselves from co-workers.</p>
        <h3>In Men</h3>
        <p>At home, depression manifests differently in men and women. In men, signs tend to be less sadness and gloom. Signs of depression in men include increased irritability, anger and aggression, more impulsiveness, and an increased likelihood of putting himself in dangerous situations. There is also an increased risk of substance abuse. The point of all these is to hide the internal troubles they are having.<sup>[4]</sup></p>
        <p>One major reason for this is that men are raised differently from women. Societal expectations of men often require them not to show pain or sadness, which would be seen as weakness. This is one reason why men tend to have issues opening up even to their partners — and part of why suicide rates are much higher in men. Men don't typically show the typical symptoms of depression, but if you observe these signs in yourself or someone close to you, please get help.</p>
        <h3>In Women</h3>
        <p>In women, the more typical signs of depression are seen: fatigue, depressive moods, feelings of hopelessness, loss of self-worth, difficulty concentrating, insomnia, and loss of pleasure in activities. In women, opening up is more common, and many of them are quicker to seek treatment.<sup>[5]</sup></p>
        <p>Furthermore, some types of depression are specific to women, namely Postpartum Depression and Premenstrual Dysphoric Disorder. There is a strong link between the postpartum period and depression, as well as the depression associated with the menstrual period.</p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">🧠</div>
          <div>Depression doesn't always look like sadness. Anger, recklessness, and "being fine" can all be masks for the same underlying condition.</div>
        </div>
      </section>
      <section id="sym-vs-stress">
        <h2>What Is the Difference Between Stress and Depression?</h2>
        <p>The primary difference between stress and depression is that stress is temporary while depression is more permanent. However, if untreated, stress may lead to depression, especially after the person starts feeling burnout. Many people wave off depression as just stress, but there are a couple of important differences between them.</p>
        <p>The effects of stress don't last forever, and they leave once the stressor has been resolved, but depression tends to stay for a long while and can last for years. For example, a stressed person can still enjoy activities they normally do, but one sign of depression is difficulty enjoying activities the person normally does. Stress may feel overwhelming and involve feelings of anxiety, but it is easier to adjust and manage. Depression needs more help and treatment to resolve.<sup>[6]</sup></p>
        <p>While there are overlaps between the signs and symptoms of stress and depression, there are also differences between them. It is crucial to identify which condition you're dealing with and get help for it. One important thing is to observe the duration: stress often passes after some time, but depression is more long-lasting. If you have been feeling the effects for two weeks or more, it's time to get yourself checked out. It's better to be safe than sorry.</p>
      </section>
      <section id="sym-help">
        <h2>When Should You Get Help?</h2>
        <p>Immediately. The moment you see you are not okay or you need help, reach out to someone you trust. It could be friends or family. Make sure you don't suffer in silence. Every year, lives are lost to suicide. I'm certain the people around you will prefer listening to you rather than getting the news that you have taken your life.</p>
        <p>To all men, opening up is not weakness, nor is seeking help. Which call would you rather get? Your friend telling you he is not fine and he needs help, or the news that he has taken his life? I'm certain that you would rather get the first one. Your family and friends would also prefer to get the first call about you as well. That belief that men who open up are weak or less than couldn't be farther from the truth.</p>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">💡</div>
          <div>If you or someone around you is having thoughts of suicide, reach out to someone you trust or a mental health professional immediately. You can also find resources at <strong>theeosfoundation.org</strong>.</div>
        </div>
      </section>
      <section id="sym-wrapup">
        <h2>Wrap Up</h2>
        <p>Depression may not show up in the typical fashion it normally does. If you observe something is off or wrong with you or someone close to you, please check up on them, especially those friends who are always smiling and cheerful. You never know what demons they may be fighting inside. Various families have suffered the devastating effects of what depression can cause. Don't let yours be one of them.</p>
        <p>Asking for help is not weakness. Think of it this way: soldiers call for backup when they get stuck on the battlefield, and no one calls them weak for doing so. You are not weak for getting help.</p>
        <p>In our next article, we discuss practical steps to take if you or someone around you is going through depression. Stay tuned and don't miss it.</p>
        <p>Further reading: did you miss the first article in this series? Read <a href="#" data-route="cortex-article-12" style="color:var(--teal);text-decoration:underline">What Is Depression? Causes, Myths, and Facts Every Nigerian Should Know</a>.</p>
      </section>
      <section id="sym-faq">
        <h2>Frequently Asked Questions</h2>
        <div class="art-faq">
          <div class="art-faq-item">
            <div class="art-faq-q">Can depression lead to madness?</div>
            <div class="art-faq-a">No. Depression is not the same as losing your mind or "madness." That said, in severe cases, depression can include psychotic features like hallucinations or delusions, which is a recognized clinical condition, not a sign of someone "going mad." It's treatable, and it's different from what that word usually implies in everyday conversation.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">What can depression cause?</div>
            <div class="art-faq-a">Left untreated, depression can affect your physical health, relationships, work, and ability to function day to day. It's linked to increased risk of substance abuse, other mental health conditions like anxiety, and in severe cases, thoughts of self-harm or suicide. The good news is that all of these risks drop significantly with proper treatment.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Can depression kill?</div>
            <div class="art-faq-a">Yes, primarily through suicide, which is why we keep stressing that this isn't something to manage alone. Depression is also linked to a higher risk of other health complications over time. If you or someone around you is having thoughts of suicide, please reach out to someone you trust or a mental health professional immediately.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Can depression cause high blood pressure?</div>
            <div class="art-faq-a">The science here is genuinely mixed. Some research points to chronic stress and depression raising cortisol levels over time, which can contribute to developing hypertension. Other studies have found the opposite pattern in certain contexts. What's clear is that depression and heart health are connected — just not through one simple, direct cause-and-effect.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">When should I actually seek help?</div>
            <div class="art-faq-a">As soon as you notice these signs lasting two weeks or more — and immediately if there are any thoughts of self-harm or suicide. Don't wait for things to get worse.</div>
          </div>
        </div>
      </section>
      <div class="art-references">
        <div class="art-ref-title">References</div>
        <ol class="art-ref-list">
          <li>World Health Organization (WHO). <em>Depression.</em> 2025. https://www.who.int/news-room/fact-sheets/detail/depression</li>
          <li>Harvard Health Publishing. <em>Depression Symptoms: Recognizing Common and Lesser-Known Symptoms.</em> 2024. https://www.health.harvard.edu/mind-and-mood/depression-symptoms-recognizing-common-and-lesser-known-symptoms</li>
          <li>Malhi, G. S., &amp; Mann, J. J. <em>Major Depressive Disorder: Advances in Diagnosis and Treatment.</em> 2025. https://pubmed.ncbi.nlm.nih.gov/39963293/</li>
          <li>National Institute of Mental Health (NIMH). <em>The Neurobiology of Depression.</em> 2011. https://pmc.ncbi.nlm.nih.gov/articles/PMC3038800/</li>
          <li>National Institute of Mental Health (NIMH). <em>Depression in Women: 5 Things You Should Know.</em> 2023. https://www.nimh.nih.gov/health/publications/depression-in-women</li>
          <li>Mental Health America (MHA). <em>Stressed or Depressed? Know the Difference.</em> 2024. https://mhanational.org/resources/stressed-or-depressed-know-the-difference/</li>
          <li>Shittu, R. O., Odeigah, L. O., Issa, B. A., Olanrewaju, G. T., Mahmoud, A. O., &amp; Sanni, M. A. <em>Association between Depression and Social Demographic Factors in a Nigerian Family Practice Setting.</em> 2014. https://www.researchgate.net/publication/264045989_Association_between_Depression_and_Social_Demographic_Factors_in_a_Nigerian_Family_Practice_Setting</li>
        </ol>
      </div>`,
  },
  {
    num: 14,
    id: "cortex-article-14",
    category: "Mental Health &amp; Performance",
    gradFrom: "#2A2A0A",
    gradTo: "#5A5A1A",
    badgeBg: "rgba(220,231,117,0.2)",
    badgeColor: "#DCE775",
    cardColor: "#DCE775",
    title:
      "Can I be free from Depression?<br/>How People Actually Get Their Lives Back From Depression.",
    deck: "Depression can feel like drowning. But treatment works, recovery is real, and you don't have to face it alone.",
    bylineDate: "Published by EOS · Youth Brain Health Culture Organisation",
    cardTitle:
      "Can I Be Free From Depression? How People Actually Get Their Lives Back",
    cardExcerpt:
      "Depression can be beaten. Here's how treatment actually works, what recovery really looks like, and how to support someone going through it.",
    toc: [
      { href: "#rec-intro", text: "Introduction" },
      { href: "#rec-treatment", text: "How Depression Is Treated" },
      { href: "#rec-faith", text: "Does Faith Play a Part?" },
      { href: "#rec-looks-like", text: "What Recovery Looks Like" },
      { href: "#rec-support", text: "Supporting Someone Recovering" },
      { href: "#rec-talk", text: "If You Need Someone to Talk To" },
      { href: "#rec-wrapup", text: "Wrap Up" },
      { href: "#rec-faq", text: "FAQs" },
    ],
    keyTakeaways: [
      "Depression is treatable — through therapy (like CBT), medication, or a combination of both, depending on severity.",
      "Antidepressants take time to work, sometimes weeks to months, and should only be used under a certified professional's guidance.",
      "Faith and spiritual community can offer real support in recovery, but they look different for everyone and work best alongside professional treatment.",
      "Recovery isn't a straight line — dark days can still happen even as you're getting better, and that doesn't mean you've failed.",
      "The best way to support someone recovering is to listen without judgment, avoid blame, and gently encourage them toward professional help.",
    ],
    bodyHtml: `<section id="rec-intro">
        <p class="art-lede">When we hear of people going through depression, what is our first thought? Do we feel they are in a pit they will never get out of? Depression could be like someone who is drowning and looking for someone to pull them out.</p>
        <p>As mentioned in the earlier articles, some people can mask their symptoms and appear fine. Such people could be smiling in public and even laughing with friends and family but secretly battling demons when they are alone.</p>
        <p>Those battling depression might feel like they may never get out of it. It might look like they are stuck forever and there is no way out. But that's not true. Millions of people have fought the battle against depression and won. It may not seem possible today, but eventually, you will overcome. In this article, we explore ways to get out of depression and even share stories of people who have overcome.</p>
      </section>
      <section id="rec-treatment">
        <h2>How Is Depression Treated?</h2>
        <p>Treatment is a combination of different options. Milder cases may only require therapy or counselling, while more acute or advanced cases may require the use of antidepressants.</p>
        <h3>Cognitive Behavioural Therapy</h3>
        <p>This combines two forms of therapy: cognitive therapy and behavioural therapy. This therapy aims to correct wrong thinking and behaviour. In the case of depression, it targets patterns of self-doubt and guilt and helps the person feel better about themselves.<sup>[1]</sup> Cognitive Behavioural Therapy examines three aspects of cognition: automatic thoughts, cognitive distortions, and underlying beliefs.</p>
        <h3>Automatic Thoughts</h3>
        <p>Automatic thoughts refer to what immediately comes to mind when something happens. For example, if a stranger talks to you rudely, do you think you must have said something to offend the person, or maybe the person is just having a bad day? One blames you while the other realises that the issue may have had nothing to do with you. CBT aims to ensure that these thoughts are more self-helping and less self-harming.<sup>[2]</sup></p>
        <h3>Cognitive Distortions</h3>
        <p>Cognitive distortions are negatively biased errors in thinking that are purported to increase vulnerability to depression.<sup>[3]</sup> These distortions promote self-defeat, and they are very harmful to the person. They include: black-and-white thinking (seeing everything in black and white), personalisation (assuming you are at fault for everything), jumping to conclusions, always focusing on the negative, comparison, false labelling, fortune-telling, and others. CBT aims to correct these beliefs and help the person see themselves in a more positive light.<sup>[4]</sup></p>
        <h3>Underlying Beliefs</h3>
        <p>These refer to how the person perceives and interprets life and experiences. They are divided into two: core beliefs and intermediate beliefs. Core beliefs refer to the central ideas the person has about themself and the world, while intermediate beliefs are the assumptions and attitudes shaped by the core beliefs.<sup>[5]</sup></p>
        <p>In all, CBT aims to correct all these and root out harmful thought patterns to promote healing and better well-being.</p>
        <h3>Antidepressants</h3>
        <p>In cases of acute or prolonged depression, antidepressants are used to make the situation better. Antidepressants are drugs that increase the release of neurotransmitters associated with mood and emotions, such as serotonin.</p>
        <p>Antidepressants can take time to take effect — about two weeks for mild cases, and up to about eight weeks for acute cases. It can take up to six months for the person to start feeling better.<sup>[6]</sup></p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">⚠️</div>
          <div>Before antidepressants are used, they must be prescribed by a certified professional. Antidepressants have varying side effects, and they should not be used if they were not prescribed.</div>
        </div>
      </section>
      <section id="rec-faith">
        <h2>Does Faith Play a Part in Recovery?</h2>
        <p>For religious people, having a community around them can be very instrumental for recovery. When they meet each other, they can open up to trusted people, encourage each other in their interactions, and even proffer solutions to each other's problems. In addition, the events in the service can also be helpful. The singing, reading of scriptures, and the sermons can offer encouragement and lift the person's spirits.</p>
      </section>
      <section id="rec-looks-like">
        <h2>What Does Recovery from Depression Look Like?</h2>
        <p>Recovery may represent different things in different people. It may be the ability to breathe or feel like a weight has been lifted off their shoulders. For others, it may be seeing the light. One thing is for certain: recovery is not something that happens suddenly. It takes time and intentional effort. You may not feel all better after one therapy session, and life will certainly not be all sunshine and rainbows immediately, but as you put in the effort to get better, you will start seeing some progress. It may be simply being able to step back from the ledge you wanted to throw yourself off of.</p>
        <p>The important thing is to take your treatment one day at a time. Try to get better each day. Let go of harmful habits and pick up self-healing habits.</p>
        <p>Recovery does not mean you may not still have your dark days. There might still be days that the world will feel like it is ending or that the darkness is too strong for you to see the light.</p>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">💬</div>
          <div>For those who think they can't get better, as someone who has been through it, I can tell you that recovery is possible. A couple of years ago, I suffered through depression. I hated life, and I came close to ending my life a couple of times. I even had a plan. I was incredibly lucky that no matter how bad things got, my friends and family fought for me and held me back. Honestly, if not for them, I might have ended things then. Life had no meaning, and as a Christian, there were days I asked God what was so special about the day that I had to wake up. Things got so bad that I once asked myself the question: would my family be better off if I were never born? The question changed to: would they be better off if I were out of the picture? I held on to a ton of guilt, self-condemnation, anger, low self-esteem, and a lot of other issues.</div>
        </div>
        <p>One great advantage I have is my family and friends. Their words of encouragement, prayers, and refusal to give up on me really helped me. I was also encouraged by the scriptures and studying the Word of God. While I was angry at God and, honestly, I only went to church because my dad is the Pastor, it did me some good, as some sermons got to me and actually encouraged me.</p>
        <p>While I still have some dark days and I have spent a bit of time crying into my pillow, I have also learnt to still acknowledge my wins and progress no matter how small they may be.</p>
      </section>
      <section id="rec-support">
        <h2>How Do I Support Someone Who Is Recovering from Depression?</h2>
        <p>If you have someone around you in recovery, here are ways you can support them.</p>
        <h3>Be a Listening Ear</h3>
        <p>One of the best things you can do for them is to be there to listen. Even if you don't have any solutions to their issues, just being there for them to rant to can help them feel a lot better. Talking things out is much better for them than bottling things inside. Be there for them to talk to and open up to about their struggles.</p>
        <h3>Don't Tell Them to Snap Out of It or Blame Them for It</h3>
        <p>Depression is not just feeling down or having a bad day. It takes a lot of effort and treatment to get out of it. Blaming them for their condition will only reinforce feelings of guilt or self-condemnation rather than help them get better.</p>
        <p>To men, don't tell young boys or other men to simply man up or tough it out. Rather, be a safe space they can open up to. Many men have expressed an inability to open up about their struggles for fear of being seen as weak or less than.</p>
        <h3>Encourage Them to Do Things They Enjoy</h3>
        <p>Encouraging them to do things they enjoy will help them to take their minds off their issues and give them some peace. For me, going for a run worked. For those short periods, I was not regretting the past, blaming myself for the present, or worried about the future; I was just there — the wind in my hair, the deafening music blaring in my ears, and the sounds of my feet on the road. In those periods, I was truly at peace.<sup>[7]</sup></p>
        <h3>Encourage Them to Get Help</h3>
        <p>Some of them might be reluctant to get help. They could be skeptical or worried about what help will look like. Help them and encourage them to get professional help instead of facing it on their own.</p>
      </section>
      <section id="rec-talk">
        <h2>If You Need Someone to Talk To</h2>
        <p>If you're struggling right now, or you're worried about someone close to you, please reach out. In Nigeria, organizations like the Mentally Aware Nigeria Initiative (MANI) and SURPIN (Suicide Research and Prevention Initiative) offer free, confidential support. You can find them at mentallyaware.org and surpinng.com. You don't have to have it all figured out before reaching out. Just start the conversation.</p>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">💡</div>
          <div>You are not alone in this. Free, confidential support is available right now through MANI (<strong>mentallyaware.org</strong>) and SURPIN (<strong>surpinng.com</strong>).</div>
        </div>
      </section>
      <section id="rec-wrapup">
        <h2>Wrap Up</h2>
        <p>Going through depression can be difficult. But it doesn't have to be final. Depression can be beaten, and recovery is possible. Several resources can help you. Opening up can be scary and it may involve you going for professional help, but it is better to seek treatment. Don't bottle things up inside. Open up to someone today.</p>
        <p>Further reading: did you miss our article on the signs and symptoms of depression? Read <a href="#" data-route="cortex-article-13" style="color:var(--teal);text-decoration:underline">Am I Depressed or am I just Stressed?</a></p>
      </section>
      <section id="rec-faq">
        <h2>Frequently Asked Questions</h2>
        <div class="art-faq">
          <div class="art-faq-item">
            <div class="art-faq-q">Can depression be cured completely?</div>
            <div class="art-faq-a">Depression can absolutely be treated and managed, and many people go on to live full, thriving lives. "Cured" isn't always the right word, though, since some people continue to have occasional dark days even after significant recovery — but that doesn't mean treatment failed or that they're back at square one.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">How long does it take to recover from depression?</div>
            <div class="art-faq-a">There's no fixed timeline. Some people notice improvement within weeks of starting therapy or medication; for others, it takes months. Recovery is also not a straight line — progress often comes with setbacks along the way.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Do I need medication, or is therapy enough?</div>
            <div class="art-faq-a">It depends on the severity of the depression. Milder cases often respond well to therapy alone, while more severe or prolonged cases may need medication too. A mental health professional can help determine what combination is right for you.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">What's the best way to help a friend or family member who's depressed?</div>
            <div class="art-faq-a">Listen without judgment, avoid blaming them or telling them to "snap out of it," and gently encourage them toward professional help. Just being present and willing to listen matters more than having the right answers.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Is it normal to still have bad days after recovering from depression?</div>
            <div class="art-faq-a">Yes. Recovery doesn't mean the difficult days disappear entirely — it means you've built the tools and support to move through them without being consumed by them.</div>
          </div>
        </div>
      </section>
      <div class="art-references">
        <div class="art-ref-title">References</div>
        <ol class="art-ref-list">
          <li>National Center for Biotechnology Information (NCBI Bookshelf). <em>Depression.</em> 2012 (updated periodically). https://www.ncbi.nlm.nih.gov/books/NBK279297/</li>
          <li>National Center for Biotechnology Information (NCBI Bookshelf). <em>Overview of Depression.</em> 2012 (updated periodically). https://www.ncbi.nlm.nih.gov/books/NBK279282/</li>
          <li>Sabbatini, R. M., Murphy, R. J., Shalom, J. G., &amp; Bierman, A. S. <em>Cognitive Distortions, Humor Styles, and Depression.</em> 2016. https://pmc.ncbi.nlm.nih.gov/articles/PMC4991044/#sec10</li>
          <li>Harvard Health Publishing. <em>How to Recognize and Tame Your Cognitive Distortions.</em> 2022. https://www.health.harvard.edu/blog/how-to-recognize-and-tame-your-cognitive-distortions-202205042738</li>
          <li>National Center for Biotechnology Information (NCBI Bookshelf). <em>Major Depressive Disorder.</em> 2023. https://www.ncbi.nlm.nih.gov/books/NBK470241/</li>
          <li>NHS (National Health Service). <em>Antidepressants.</em> 2025. https://www.nhs.uk/medicines/antidepressants/</li>
          <li>Mental Health Foundation. <em>Supporting a Partner with Depression.</em> 2024. https://www.mentalhealth.org.uk/explore-mental-health/articles/supporting-partner-depression</li>
        </ol>
      </div>`,
  },
  {
    num: 15,
    id: "cortex-article-15",
    category: "Physical Brain Health",
    gradFrom: "#4A2A0A",
    gradTo: "#8A5A1A",
    badgeBg: "rgba(255,183,77,0.2)",
    badgeColor: "#FFCC80",
    cardColor: "#FFB74D",
    title:
      "How Does Nutrition Affect the Brain?<br/>Feed Your Brain: Understanding Nutrition's Role in Brain Health",
    deck: "The brain consumes roughly 20% of your body's energy despite being under 2% of its weight. Here's what happens when it isn't fed properly — and why that matters especially in Nigeria.",
    bylineDate: "Published by EOS · Youth Brain Health Culture Organisation",
    cardTitle:
      "How Does Nutrition Affect the Brain? Feed Your Brain: Understanding Nutrition's Role in Brain Health",
    cardExcerpt:
      "The brain eats up 20% of your body's energy despite being under 2% of its weight. Here's what happens when it isn't fed properly — and why it matters especially in Nigeria.",
    toc: [
      { href: "#nut-intro", text: "Introduction" },
      { href: "#nut-gut", text: "The Gut-Brain Connection" },
      { href: "#nut-unnourished", text: "When the Brain Isn't Nourished" },
      { href: "#nut-nigeria", text: "Why This Matters in Nigeria" },
      { href: "#nut-wrapup", text: "Wrap Up" },
    ],
    keyTakeaways: [
      "The brain makes up under 2% of body weight but consumes about 20% of the body's resting energy — quality nutrition matters, not just quantity.",
      "The gut and brain are closely connected through the Enteric Nervous System, which also drives much of the body's serotonin production.",
      "Poor nourishment causes immediate effects like brain fog, mood swings, and difficulty concentrating — and long-term effects like reduced intelligence in growing children.",
      "In Nigeria, carbohydrate-heavy diets low in fruits, vegetables, and omega-3s are common, often driven by cost and time pressure rather than choice.",
      "Feeding the brain properly isn't optional — it directly shapes how well people think, decide, and function day to day.",
    ],
    bodyHtml: `<section id="nut-intro">
        <p class="art-lede">Let's be honest: some of us don't remember to eat until we feel like we're about to faint. For some people, food is only something to consume to keep body and soul together. But food is more than that. It provides the nutrients that the body uses to produce energy, the proteins for growth and the repair of cells and tissues, fats and oils for insulation and protection of internal organs, and various vitamins and minerals. One major organ that benefits from proper nutrition is the brain. The brain consumes a large amount of energy to operate, and so it requires proper nutrition to function optimally.</p>
        <p>The brain makes up less than 2% of body weight,<sup>[1]</sup> but in terms of energy consumption, it accounts for about 20% of the body's resting metabolic energy.<sup>[2]</sup> The brain is one of the most vascularised organs, and it receives a large part of the blood supply. This is why you often feel tired or hungry after performing tasks that are intellectually demanding.</p>
        <p>For example, whenever you are preparing for an exam and you are reading, even though you are seated for hours and probably only stretching your legs a couple of times, you tend to feel tired and hungry after a long reading session. This is because the brain is using a lot of the energy produced by the body.</p>
        <div class="art-callout art-callout-blue">
          <div class="art-callout-icon">🧠</div>
          <div>Like other organs, the energy source for the brain is glucose, but the quality of food consumed matters. Think of it this way: a car runs on petrol, but there are varying qualities of petrol based on the refinement at the refinery. Just as a car performs optimally with the highest quality petrol, the brain performs optimally when you feed it properly.</div>
        </div>
      </section>
      <section id="nut-gut">
        <h2>Are the Digestive System and the Brain Related?</h2>
        <p>There is a very important relationship between the brain and the gut. As a matter of fact, there is a segment of the Autonomic Nervous System concerned with the gut alone — the Enteric Nervous System. The Enteric Nervous System refers to the neurons in the gut that enable the brain to control the activities of the digestive system. In fact, the digestive system has more neurons than the spinal cord.<sup>[3]</sup></p>
        <p>In addition, the gut also plays a pivotal role in serotonin production. The microorganisms in the gut produce serotonin — they produce small amounts themselves from certain amino acids, and they also trigger the body to produce larger amounts of it. This release of serotonin affects mood, sleep, and general wellness.</p>
      </section>
      <section id="nut-unnourished">
        <h2>What Happens When the Brain Is Not Well Nourished?</h2>
        <p>Just like a car will not function optimally when it is not fuelled with the best grade of petrol, the brain will not function optimally whenever it is not well-nourished.</p>
        <p>If the brain is not being well-supplied with glucose, there are some immediate consequences. Because the brain is running low on fuel, there will be increased demand for food, which means an increase in the intensity of hunger pangs, brain fog (difficulty focusing on tasks, feeling mentally exhausted and sluggish), mood swings, and difficulty concentrating. Let's look at it this way: how easy is it for you to focus or work on tasks when you are hungry? There are many instances where mental blocks at work or school could be solved by finding something good to eat.<sup>[4]</sup></p>
        <p>Long-term effects, especially in growing children and teenagers, include reduced intelligence, poor academic performance, and impaired cognition and decision-making. Children who are underfed or malnourished would not perform up to their full capabilities in school because the brain will not develop at the level it should have developed to.<sup>[5]</sup></p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">⚠️</div>
          <div>Malnourishment doesn't just affect how a child feels today — it can shape how their brain develops, with effects that follow them well into adulthood.</div>
        </div>
      </section>
      <section id="nut-nigeria">
        <h2>Why Is This Important to Us in Nigeria?</h2>
        <p>Brain health is very important in every society, especially in a society like Nigeria. One reason for so many outrageous statements and decisions is poor brain development. For example, the FRSC manual states that every driver should assume he/she is the only sane one on the road. I thought that was an exaggeration until I started to drive. Driving in Ibadan is not for the weak, abeg. From Micra drivers that do not understand the concept of right of way to motorcycle riders that treat traffic lights like suggestions, you will encounter varying degrees of mental instability on the road.</p>
        <p>So, we need a society where people think properly and make reasonable decisions. However, one issue we have is our emphasis on carbohydrate-heavy diets. While they supply the carbohydrates necessary for energy production, if they are not accompanied by fruits and vegetables, the brain may not get the essential vitamins and minerals for proper development and function.</p>
        <p>In addition, supplements that are helpful to brain development, such as omega-3 fatty acids, are often out of reach of the average Nigerian family. The average family cannot afford to eat three square meals or ensure that the meals are nutritious enough to provide the needed nutrients. For many of them, affording supplements would be more than they can handle.</p>
        <p>Furthermore, even in families that can afford to feed well, there is often too much to do for them to have the time to eat proper meals. Many of them are often dealing with the effects of stress and burnout, unable to properly sit down and take their meals. This often leads to them rushing meals or stockpiling junk foods. For many busy professionals, the anxiety of meeting deadlines and getting to work on time or beating traffic robs them of the opportunity to eat well.</p>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">💡</div>
          <div>Eating well in Nigeria isn't always simple — cost, time, and access all play a part. But small, consistent choices toward fruits, vegetables, and balanced meals still add up for your brain.</div>
        </div>
      </section>
      <section id="nut-wrapup">
        <h2>Wrap Up</h2>
        <p>Brain health is inseparable from proper nutrition. For the brain to function optimally, it must be well fuelled and supplied with the vitamins and minerals that aid brain development.</p>
        <p>The series continues in our next article, where we go in depth about the meals that are helpful to the brain and the meals that are harmful to the brain. You don't want to miss it.</p>
        <p>Further reading: depression is very real, and it affects more people than we think — but it is not an incurable condition. Read <a href="#" data-route="cortex-article-14" style="color:var(--teal);text-decoration:underline">Can I be free from Depression?</a></p>
      </section>
      <div class="art-references">
        <div class="art-ref-title">References</div>
        <ol class="art-ref-list">
          <li>Encyclopaedia Britannica. <em>How Much Does a Human Brain Weigh?</em> 2025. https://www.britannica.com/topic/How-Much-Does-a-Human-Brain-Weigh</li>
          <li>Balasubramanian, V. <em>Brain Power.</em> 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8364152/</li>
          <li>Purves, D., Augustine, G. J., Fitzpatrick, D., et al. <em>The Human Brain.</em> 2001. https://www.ncbi.nlm.nih.gov/books/NBK11097/</li>
          <li>Lent, R., Herculano-Houzel, S., &amp; others. <em>How Many Neurons Do You Have? Some Dogmas of Quantitative Neuroscience under Revision.</em> 1995. https://pubmed.ncbi.nlm.nih.gov/7542703/</li>
          <li>Wiersenga, L. M., et al. <em>A Key Characteristic of Sex Differences in the Developing Brain: Greater Variability in Brain Structure of Boys than Girls.</em> 2021. https://www.sciencedirect.com/science/article/pii/S1053811921001051</li>
        </ol>
      </div>`,
  },
  {
    num: 16,
    id: "cortex-article-16",
    category: "Physical Brain Health",
    gradFrom: "#2A2E0A",
    gradTo: "#5A6A1A",
    badgeBg: "rgba(197,216,109,0.2)",
    badgeColor: "#D4E29A",
    cardColor: "#C5D86D",
    title:
      "Which Foods are Good for My Brain, and Which Foods are Harming My Brain?<br/>Brain Boosters vs. Brain Drainers",
    deck: "From Titus fish to reused frying oil — here's exactly which everyday foods build your brain up, and which ones quietly wear it down.",
    bylineDate: "Published by EOS · Youth Brain Health Culture Organisation",
    cardTitle:
      "Which Foods Are Good for My Brain, and Which Are Harming It? Brain Boosters vs. Brain Drainers",
    cardExcerpt:
      "From Titus fish to reused frying oil — here's exactly which everyday foods build your brain up, and which ones quietly wear it down.",
    toc: [
      { href: "#food-intro", text: "Introduction" },
      { href: "#food-good", text: "Foods That Are Good for the Brain" },
      { href: "#food-bad", text: "Foods That Harm the Brain" },
      { href: "#food-better", text: "What We Can Do Better" },
      { href: "#food-wrapup", text: "Wrap Up" },
      { href: "#food-faq", text: "FAQs" },
    ],
    keyTakeaways: [
      "Omega-3 fatty acids, found in fish like Titus and sardines, support thinking, learning, and healthy blood flow to the brain.",
      "B-vitamins, antioxidants, and adequate hydration all play distinct, essential roles in protecting brain cells and maintaining focus.",
      "Alcohol, refined sugar, and trans fats each damage the brain in different ways, from memory impairment to reduced brain volume.",
      "Everyday Nigerian staples like rice and stew can be brain-friendly, but the type and amount of oil used matters more than most people realize.",
      "Small swaps, like choosing fish over red meat or adding more greens, do more for brain health than an all-or-nothing approach to eating.",
    ],
    bodyHtml: `<section id="food-intro">
        <p class="art-lede">When you pick up a plate of food to eat, how many of you stop to ask if what you want to eat is good for you? Or do you just shove everything you see into your mouth? Many of you know foods that are good for you and foods that are not. For example, many lactose-intolerant people still consume milk and other food items that contain lactose despite the consequences. Several obese and overweight people still consume processed sugars and very fatty meals despite the havoc it wreaks on their health.</p>
        <p>Diet plays a huge part in physical health, and brain health is a very important aspect of that. Some meals boost mental ability and performance while some drain it. In the first article, we examined the impact food has on the brain. In this one, we will show meals that boost mental performance and meals that drain it.</p>
      </section>
      <section id="food-good">
        <h2>What Foods Are Good for the Brain?</h2>
        <p>In our diet, several food items contain nutrients that are highly beneficial for the brain. We shall examine some of these brain boosters.</p>
        <h3>Omega-3 Fatty Acids</h3>
        <p>These fatty acids are found in fatty fish such as salmon or mackerel (Titus fish) and sardines. They can also be obtained from plant-based sources such as chia seeds, flaxseeds, walnuts, and soybeans. Based on the situation of the country, salmon may be too expensive for the average person to add to their meal plans, but Titus and sardines are still relatively affordable. So, instead of eating red meat all the time, you could switch to fish on a couple of days. There are three forms of Omega-3: alpha-linolenic acid (ALA), eicosapentaenoic acid (EPA), and docosahexaenoic acid (DHA).<sup>[1]</sup></p>
        <p>Omega-3 fatty acids improve thinking, learning, blood flow to the brain, and cognition.<sup>[2]</sup> Furthermore, studies show that increased consumption of Omega-3 fatty acids reduces the risk of mental health conditions such as autism and depression.<sup>[3]</sup></p>
        <h3>B-Vitamins and Folate</h3>
        <p>The B-vitamin complex is very essential to proper brain function. Increased consumption has been associated with reduced risks of dementia and other neurodegenerative diseases.<sup>[4]</sup> There are twelve vitamins under that umbrella, and getting them all in your diet can be a bit tricky, but lean meat, chicken, milk/dairy, eggs, and green leafy vegetables are excellent sources.<sup>[5]</sup></p>
        <h3>Antioxidants</h3>
        <p>Antioxidants play a huge role in brain health. They help protect the brain from oxidative stress caused by free radicals. Free radicals bond with lipids and proteins in the brain and alter their structure, increasing vulnerability to neurodegenerative diseases. Free radicals also disrupt the function of enzymes and neurotransmitters in the brain.</p>
        <p>Antioxidants protect the brain in two ways: first, they prevent the generation of free radicals and capture and block the ones that are generated; second, they repair cellular damage before it accumulates and alters cell metabolism.<sup>[6]</sup> Antioxidants are found in berries, green leafy vegetables, nuts and seeds such as walnuts, sunflower seeds, pecans, and almonds, herbs and spices such as ginger, garlic, cinnamon, and oregano, and various beverages.<sup>[7]</sup></p>
        <h3>Water</h3>
        <p>Water is very beneficial to the brain. The brain is composed of about 70% water, so drinking enough water helps to maintain fluid balance. Dehydration reduces blood flow to the brain by making the blood thicker and more difficult to pump. The brain also functions better and more optimally when the person is well hydrated — dehydration causes cognitive issues and brain fog, and drinking enough water helps prevent this.<sup>[8]</sup></p>
        <div class="art-callout art-callout-blue">
          <div class="art-callout-icon">🐟</div>
          <div>A simple swap that costs almost nothing: replace one or two red meat meals a week with Titus fish or sardines. Small, affordable changes still move the needle.</div>
        </div>
      </section>
      <section id="food-bad">
        <h2>What Foods Are Harmful to the Brain?</h2>
        <p>We have examined foods that are beneficial for the brain. Now, let's look at foods that harm it.</p>
        <h3>Alcohol</h3>
        <p>Alcohol does a lot of harm to the brain. It overrides the prefrontal cortex, lowering inhibitions and encouraging impulsive actions — this is why people act irrationally when drunk. It also affects the hippocampus, preventing it from consolidating long-term memories, which is why remembering the events of a wild night out is sometimes difficult.<sup>[9]</sup> Alcohol and drug abuse harm the brain in a lot of ways, and their frequent use should be avoided.</p>
        <h3>Refined Sugar</h3>
        <p>Refined sugar should be minimised in the diet. While the brain consumes glucose to generate energy to function, too much sugar is bad for the brain. It prevents the production of Brain-Derived Neurotrophic Factor, which reduces the brain's ability to form new memories.<sup>[11]</sup> It also causes shrinkage of blood vessels in the brain and leads to overall cognitive decline.<sup>[10]</sup></p>
        <h3>Trans Fats and Excessive Frying</h3>
        <p>Trans fats and excessively fried foods are harmful to the brain. Trans fats can cause inflammation of the brain, damage to the neurons, and memory impairment.<sup>[12]</sup> They can also lead to a decrease in brain volume and decreased cognitive function.<sup>[13]</sup></p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">🍚</div>
          <div>Let's take a look at the average Nigerian meal — rice, beans or spaghetti, with stew and meat or eggs. Most of this is fine, but the oil used to make the stew and fry the meat can be harmful, especially when eating out. Many eateries reuse oil or buy the cheapest oil possible to save costs. In soups like efo or egusi, palm oil is also often added far beyond what's needed, and that excess builds up as unhealthy fat that can damage the brain.</div>
        </div>
      </section>
      <section id="food-better">
        <h2>What We Can Do Better</h2>
        <p>The Nigerian diet is rich in very nutritious food items. Try to eat fruits and vegetables weekly. Avoid overcooking vegetables to avoid destroying the vitamins and minerals they contain, and add herbs and spices such as ginger, garlic, turmeric, and cinnamon to your meals. Many items we often turn our noses at are very rich in nutrients — examples are locust beans (iru) and crayfish (ede). Reduce the consumption of red meat and replace it with fish and lean meat, which are healthier options.</p>
      </section>
      <section id="food-wrapup">
        <h2>Wrap Up</h2>
        <p>One of the best steps you can take for your health is eating healthy. As we said in the last article, the food you eat fuels your brain, and just like a car, the quality of fuel you put in your tank significantly affects engine performance.</p>
        <p>Aim to eat right and take care of your health. Your brain will thank you for it. I will watch what I eat and avoid foods that are draining my brain power. The question I am asking is, will you do the same?</p>
        <p>Further reading: did you miss our last article on what effect food has on your brain? Read <a href="#" data-route="cortex-article-15" style="color:var(--teal);text-decoration:underline">How Does Nutrition Affect the Brain?</a></p>
      </section>
      <section id="food-faq">
        <h2>Frequently Asked Questions</h2>
        <div class="art-faq">
          <div class="art-faq-item">
            <div class="art-faq-q">What foods are good for brain function?</div>
            <div class="art-faq-a">Foods rich in omega-3 fatty acids like fish, walnuts, and flaxseed, along with antioxidant-rich foods like leafy greens and berries, and B-vitamin sources like eggs and lean meat, all support healthy brain function.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">What foods are bad for brain health?</div>
            <div class="art-faq-a">Refined sugar, trans fats, excessive fried foods, and heavy alcohol consumption all negatively affect the brain, contributing to memory impairment, inflammation, and long-term cognitive decline.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Does sugar affect memory and brain fog?</div>
            <div class="art-faq-a">Yes. High sugar intake reduces the brain's production of BDNF, a protein essential for forming new memories, and contributes to blood vessel damage that affects overall brain function.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Are Nigerian foods good for brain health?</div>
            <div class="art-faq-a">Many Nigerian staples like beans, fish, and leafy vegetables such as ugu and ewedu are brain-supportive. The main concern is the type and quantity of oil used in cooking, particularly reused oil or excess palm oil.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">How does hydration affect brain function?</div>
            <div class="art-faq-a">The brain is made up of about 70% water, and even mild dehydration can reduce blood flow to the brain, leading to brain fog and reduced concentration.</div>
          </div>
        </div>
      </section>
      <div class="art-references">
        <div class="art-ref-title">References</div>
        <ol class="art-ref-list">
          <li>Harvard Health Publishing. <em>Omega-3 Foods: Incorporating Healthy Fats into Your Diet.</em> 2024. https://www.health.harvard.edu/diet-and-nutrition/omega-3-foods-incorporating-healthy-fats-into-your-diet</li>
          <li>Godos, J., et al. <em>The Role of Nutrition in Brain Health and Cognitive Function.</em> 2022. https://pmc.ncbi.nlm.nih.gov/articles/PMC9641984/</li>
          <li>Godos, J., et al. <em>Diet and Mental Health: Review of the Emerging Evidence.</em> 2020. https://pmc.ncbi.nlm.nih.gov/articles/PMC7468918/#sec9-nutrients-12-02333</li>
          <li>Gómez-Pinilla, F. <em>Brain Foods: The Effects of Nutrients on Brain Function.</em> 2016. https://pmc.ncbi.nlm.nih.gov/articles/PMC4772032/#sec6-nutrients-08-00068</li>
          <li>Kris-Etherton, P. M., et al. <em>Nutrition and Brain Health: The Role of Dietary Patterns and Nutrients.</em> 2022. https://pmc.ncbi.nlm.nih.gov/articles/PMC9662251/</li>
          <li>Müller, P., et al. <em>Nutrition and the Brain: How Diet Influences Cognitive Function.</em> 2020. https://pmc.ncbi.nlm.nih.gov/articles/PMC7582347/#sec3-ijms-21-07152</li>
          <li>Gómez-Pinilla, F. <em>Brain Foods: The Effects of Nutrients on Brain Function.</em> 2008. https://pmc.ncbi.nlm.nih.gov/articles/PMC2841576/</li>
          <li>Ganio, M. S., Armstrong, L. E., Casa, D. J., et al. <em>Mild Dehydration Impairs Cognitive Performance and Mood of Men.</em> British Journal of Nutrition, 2011. https://www.cambridge.org/core/journals/british-journal-of-nutrition/article/mild-dehydration-impairs-cognitive-performance-and-mood-of-men/3388AB36B8DF73E844C9AD19271A75BF</li>
          <li>National Institute on Alcohol Abuse and Alcoholism (NIAAA). <em>Alcohol and the Brain: An Overview.</em> 2025. https://www.niaaa.nih.gov/publications/alcohol-and-brain-overview</li>
          <li>Aviv Clinics. <em>How Does Sugar Affect the Brain?</em> 2023. https://aviv-clinics.com/blog/nutrition/how-does-sugar-affect-the-brain/</li>
          <li>Molteni, R., Barnard, R. J., Ying, Z., Roberts, C. K., &amp; Gómez-Pinilla, F. <em>A High-Fat, Refined Sugar Diet Reduces Hippocampal Brain-Derived Neurotrophic Factor, Neuronal Plasticity, and Learning.</em> Neuroscience, 2002. https://pubmed.ncbi.nlm.nih.gov/12088740/</li>
          <li>Golomb, B. A., et al. <em>Dietary Trans Fat Consumption and Memory.</em> 2016. https://pubmed.ncbi.nlm.nih.gov/27215959/</li>
          <li>UC San Diego. <em>Dietary Trans Fat Linked to Worse Memory.</em> UC San Diego Today, 2015. https://today.ucsd.edu/story/dietary_trans_fat_linked_to_worse_memory</li>
        </ol>
      </div>`,
  },
  {
    num: 17,
    id: "cortex-article-17",
    category: "Physical Brain Health",
    gradFrom: "#3A2A0A",
    gradTo: "#8A6A1A",
    badgeBg: "rgba(255,213,79,0.2)",
    badgeColor: "#FFE082",
    cardColor: "#FFD54F",
    title:
      "Nigerian Meals that are Good for the Brain<br/>Eating for a Sharper Mind: Your Practical Brain-Food Guide",
    deck: "You don't have to give up your favourite dishes for a healthier brain. A few small, intentional swaps to what's already on your plate go a long way.",
    bylineDate: "Published by EOS · Youth Brain Health Culture Organisation",
    cardTitle: "Nigerian Meals that are Good for the Brain",
    cardExcerpt:
      "A practical, budget-friendly guide to eating for a sharper mind — without abandoning the meals you already love.",
    toc: [
      { href: "#pf-intro", text: "Introduction" },
      { href: "#pf-day", text: "A Sample Day of Brain-Healthy Eating" },
      { href: "#pf-soups", text: "Soups, Oil, and Vegetables" },
      { href: "#pf-protein", text: "Choosing Your Protein" },
      { href: "#pf-hydration", text: "Water and the Brain" },
      { href: "#pf-supplements", text: "Do I Need Supplements?" },
      { href: "#pf-wrapup", text: "Wrap Up" },
      { href: "#pf-faq", text: "FAQs" },
    ],
    keyTakeaways: [
      "Brain-healthy eating in Nigeria doesn't mean giving up local staples — it means small, intentional adjustments to what's already on the plate.",
      "Simple swaps, like Titus fish instead of red meat, or oatmeal instead of puff puff, meaningfully reduce processed sugar and unhealthy fat intake.",
      "Moderating palm oil and avoiding overcooked vegetables helps preserve the nutrients that support brain function.",
      "Water plays a bigger role in brain health than most people realise, supporting concentration, brain volume, and reducing brain fog.",
      "Whole, nutrient-dense foods can meet most of the brain's nutritional needs, making supplements unnecessary for most people.",
    ],
    bodyHtml: `<section id="pf-intro">
        <p class="art-lede">This week has been filled with discussion about food and the brain. We have said that just as fuel quality matters in a car, the quality of food we eat also matters to the brain.</p>
        <p>In this article, we examine the Nigerian diet and point out ways to eat healthier meals that are beneficial for brain health. This is not about condemning the Nigerian diet — in this part of the world, we can boast about some of the most nutritious and diverse food items anywhere. It is about pointing out which choices serve the brain best, and making small, intentional adjustments.</p>
      </section>
      <section id="pf-day">
        <h2>A Sample Day of Brain-Healthy Eating</h2>
        <p>Before you have had anything to eat, drink a glass of water. Water helps to flush the system of waste and gets your brain started on the right foot.</p>
        <h3>Breakfast</h3>
        <p>Try bread, yam, or potatoes with eggs. Eggs contain B vitamins, which are good for cognition and memory. Yam is also beneficial because it contains complex carbohydrates, which provide energy without spiking blood sugar levels. Where you would normally reach for puff puff and a soft drink, try oatmeal or cereal instead — it meaningfully reduces the processed sugar and oil you consume weekly.</p>
        <h3>Lunch</h3>
        <p>Instead of just jollof rice on its own, add lean meat and vegetables like carrots and bell peppers. The vegetables aren't just there to make the plate look fancy — they contain antioxidants that protect the brain from free radicals, and fibre, which slows the release of sugar into the bloodstream. If you are having beans, swap out bread for plantain. Beans are rich in folate, which supports cognition and memory.</p>
        <h3>Dinner</h3>
        <p>Keep dinner simple and light — pap with moin moin or akara are good options. Heavy meals just before bed affect sleep quality, and poor sleep is bad for the brain, so lighter is better in the evening.</p>
        <h3>Snacks</h3>
        <p>Instead of oily snacks and sugary drinks, reach for groundnuts, corn, coconut, or fruit between meals. Sugary snacks and drinks cause sugar crashes, which reduce concentration, cause brain fog, and hinder focus at work or school.</p>
      </section>
      <section id="pf-soups">
        <h2>Soups, Oil, and Vegetables</h2>
        <p>When eating swallow with soup, remember that while palm oil is a good source of Vitamin A, too much of it is bad for the brain. Don't add enough to have it flowing over your efo or egusi — use it in moderation. Avoid overcooking your vegetables too, since prolonged heat destroys the vitamins they contain.</p>
        <div class="art-callout art-callout-blue">
          <div class="art-callout-icon">🥘</div>
          <div>Don't overlook locust beans (iru) and crayfish (ede) because of their smell or taste. Both are highly nutritious and packed with vitamins and minerals that are genuinely beneficial for the brain.</div>
        </div>
      </section>
      <section id="pf-protein">
        <h2>Choosing Your Protein</h2>
        <p>Reduce your intake of red meat and trim the fat before cooking to cut down on the fat in your diet. In place of beef or goat meat, try fish such as salmon. Salmon may be too expensive for most people, so mackerel — Titus fish — is a great substitute. It's easily affordable and packed with Omega-3 fatty acids, which are very beneficial for brain health.</p>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">🐟</div>
          <div>A budget-friendly rule of thumb: you don't need salmon to feed your brain well. A couple of Titus fish or sardine meals a week, swapped in for red meat, gets you most of the same benefit at a fraction of the cost.</div>
        </div>
      </section>
      <section id="pf-hydration">
        <h2>Water and the Brain</h2>
        <p>Drinking water is very important for brain health. The brain is composed of roughly 70–80% water, so adequate hydration helps to maintain brain volume. Dehydration, on the other hand, reduces cognitive ability and causes brain fog. Make drinking water throughout the day a habit, not an afterthought.</p>
      </section>
      <section id="pf-supplements">
        <h2>Do I Need Supplements?</h2>
        <p>When nutrients are consumed in adequate volume through diet, there is usually no need for supplements. Supplements exist to augment what is missing from the diet — not to replace a healthy one. If you are eating a varied diet with enough fruits, vegetables, protein, and water, you are already covering most of what your brain needs.</p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">💊</div>
          <div>Supplements are a top-up, not a shortcut. Whole foods, eaten consistently, do more for your brain than a bottle of pills ever will for most people.</div>
        </div>
      </section>
      <section id="pf-wrapup">
        <h2>Wrap Up</h2>
        <p>This series has explored the relationship between food and the brain — how nutrition affects it, which foods are good for it and which harm it, and now, practical adjustments to your everyday meal plan. None of this requires abandoning the meals you grew up on. It just means paying a little more attention to what goes on the plate.</p>
        <p>It's the weekend again — time to rest and relax, and let your brain recharge for the week ahead. Why not let your brain rest to prevent the effects of burnout? Burnout is real, and it affects more people than you think. Read <a href="#" data-route="cortex-article-11" style="color:var(--teal);text-decoration:underline">Your Brain Called. It Wants the Weekend Off</a>.</p>
      </section>
      <section id="pf-faq">
        <h2>Frequently Asked Questions</h2>
        <div class="art-faq">
          <div class="art-faq-item">
            <div class="art-faq-q">What does a brain-healthy meal plan look like in Nigeria?</div>
            <div class="art-faq-a">It includes everyday staples like yam, eggs, beans, fish, and leafy vegetables, with smaller portions of red meat, processed sugar, and excess oil.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">How can I eat for better brain health on a budget?</div>
            <div class="art-faq-a">Affordable local foods like Titus fish, beans, groundnuts, crayfish, and leafy greens like ugu and ewedu offer strong brain-health benefits without the cost of imported options like salmon or supplements.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">What are good brain-healthy breakfast options?</div>
            <div class="art-faq-a">Eggs, yam, and oatmeal are strong choices, offering B-vitamins and steady-release complex carbohydrates instead of the sugar and processed oil found in options like puff puff.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Can I improve brain health without supplements?</div>
            <div class="art-faq-a">Yes. A varied diet with adequate whole foods can meet most nutritional needs, and supplements are typically only necessary to fill specific gaps rather than replace a healthy diet.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">How much water should I drink for brain health?</div>
            <div class="art-faq-a">There's no one-size-fits-all number, but drinking water consistently throughout the day, starting with a glass first thing in the morning, helps prevent the brain fog and reduced concentration linked to dehydration.</div>
          </div>
        </div>
      </section>`,
  },
  {
    num: 18,
    id: "cortex-article-18",
    category: "Mental Health &amp; Performance",
    gradFrom: "#0A0A2A",
    gradTo: "#1A1A5A",
    badgeBg: "rgba(129,140,248,0.2)",
    badgeColor: "#C7D2FE",
    cardColor: "#818CF8",
    title: 'What PTSD Actually Is (And Why It\'s More Than "Shock")',
    deck: "A single traumatic event can rewire how the brain reads danger. Here's what's actually happening in the amygdala, hippocampus, and prefrontal cortex — and what it looks like in a Nigerian context.",
    bylineDate: "Published by EOS · Youth Brain Health Culture Organisation",
    cardTitle: 'What PTSD Actually Is (And Why It\'s More Than "Shock")',
    cardExcerpt:
      "From okada accidents to the Ozoro festival, PTSD shows up in everyday Nigerian life. Here's what it does to the brain, and why toughing it out doesn't work.",
    toc: [
      { href: "#pt-intro", text: "Introduction" },
      { href: "#pt-what", text: "What Is PTSD?" },
      { href: "#pt-vs", text: "PTSD vs. Post-Traumatic Stress" },
      { href: "#pt-brain", text: "What PTSD Does to the Brain" },
      { href: "#pt-nigeria", text: "The Nigerian Situation" },
      { href: "#pt-managing", text: "Managing PTSD" },
      { href: "#pt-wrapup", text: "Wrap Up" },
      { href: "#pt-faq", text: "FAQs" },
    ],
    keyTakeaways: [
      "PTSD is a mental health condition that can develop after experiencing or witnessing a traumatic event, from road accidents to assault to combat.",
      "PTSD differs from ordinary post-traumatic stress mainly in duration — PTS tends to fade within a month, while PTSD can persist for years without treatment.",
      "PTSD changes how three brain regions work together: the amygdala becomes over-sensitive, the hippocampus struggles to flag stimuli as safe, and the prefrontal cortex loses some of its ability to calm the other two down.",
      "In Nigeria, PTSD shows up in specific everyday contexts — from okada accidents to public transport assault to events like the Ozoro festival — and stigma often keeps both women and men from seeking help.",
      "Left untreated, PTSD can escalate into panic attacks, substance use, depression, and suicide risk; treatment and trusted support networks meaningfully improve outcomes.",
    ],
    bodyHtml: `<section id="pt-intro">
        <p class="art-lede">How many of us frequently take commercial motorcycles (okada)? If you use them often for transport, chances are you've been in — or witnessed — an accident involving one. How did you feel the next time you had to board a bike again? Were you scared, or did you brush it off as if nothing happened?</p>
        <p>If you had flashbacks, sweating, or anxiety before boarding a bike, you would have been experiencing PTSD. For most people who have been in or witnessed a traumatic event, a condition can develop called Post-Traumatic Stress Disorder. So without further delay, let's get into it.</p>
      </section>
      <section id="pt-what">
        <h2>What Is PTSD?</h2>
        <p>Post-Traumatic Stress Disorder, commonly shortened to PTSD, is a mental health condition that affects people who have been in or witnessed a traumatic event or a series of traumatic events.<sup>[1]</sup> It develops after a person has been through something traumatising — soldiers returning home from war, someone who has survived a robbery, or someone who was assaulted. These events are deeply traumatising and can lead to serious, lasting consequences.</p>
      </section>
      <section id="pt-vs">
        <h2>What Is the Difference Between Post-Traumatic Stress Disorder and Post-Traumatic Stress?</h2>
        <p>Post-traumatic stress is short-lived and usually fades within a month, while post-traumatic stress disorder lasts much longer and can persist for years. The symptoms of PTS and PTSD can look similar, but PTS tends to fade sooner, even without professional treatment.<sup>[2]</sup></p>
      </section>
      <section id="pt-brain">
        <h2>What Does PTSD Do to the Brain?</h2>
        <p>As covered in our earlier articles on stress and anxiety, the amygdala is the brain's emotional centre. It handles emotions such as fear, sadness, and worry, and when it processes them, it sends impulses to the sympathetic nervous system to activate the fight-or-flight response. In an ideal system, once the situation has passed, the parasympathetic system restores calm to the body. But in someone with PTSD, the amygdala becomes more sensitive and is easily triggered.<sup>[3]</sup></p>
        <p>The next structure affected is the hippocampus, which consolidates memory — converting short-term memory into long-term memory. In PTSD, the hippocampus struggles to distinguish between safe and unsafe stimuli, and doesn't reliably send calming signals to the amygdala.<sup>[4]</sup></p>
        <p>Consider an example: when we hear a loud bang, an average person might flinch. A soldier who has served at the warfront might react very differently because of his exposure to combat — instinctively taking cover or scanning for danger.</p>
        <p>The third area affected is the prefrontal cortex, the seat of executive decision-making. In a normal situation, once a stressful moment has passed, the prefrontal cortex helps activate the parasympathetic nervous system, which calms the body down.</p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">🧠</div>
          <div>Think of it this way: the sympathetic nervous system is the body's accelerator, and the parasympathetic nervous system is the brake. In people with PTSD, the prefrontal cortex's ability to regulate the amygdala is hindered<sup>[5]</sup> — which is part of why people can feel paranoid even when there's no obvious sign of danger.</div>
        </div>
      </section>
      <section id="pt-nigeria">
        <h2>The Nigerian Situation</h2>
        <p>In all honesty, the Nigerian situation is not the easiest for people living with PTSD — especially women who have been assaulted. There are many incidents of women being touched inappropriately on buses and other public transport. Imagine a woman who has already been assaulted being touched inappropriately by a man in an enclosed space — it could easily retrigger her trauma.</p>
        <p>Another incident that comes to mind is the unfortunate Ozoro festival, in which a number of men took to the streets to assault and publicly strip women of their clothing.<sup>[6]</sup> Recovery from an experience like that can be long and arduous, especially for anyone who has to keep living in an area with a large male presence.</p>
        <p>Men don't have it much easier. Men are often mocked or put down for admitting they deal with PTSD. African societies often expect men to be tough and keep their struggles to themselves — a belief system that gets preached to boys from a young age, who are told to "man up" when they try to express what they're going through.</p>
        <p>When left untreated, PTSD can lead to more serious complications: panic or anxiety attacks, substance use, depression, and suicide — particularly among former military personnel. Many veterans have admitted that the hardest part of war was coming home. The adjustment from combat back to civilian peace can take a real toll on mental health, and many find it difficult to cope.</p>
      </section>
      <section id="pt-managing">
        <h2>Managing PTSD</h2>
        <p>Managing PTSD is more than just telling someone to deal with it or pray it away. For religious people, opening up to trusted members of a local assembly, alongside therapy, can help. If you have people you trust, open up to them about your trauma — they can offer encouragement and help you work through it. Some may even go out of their way to help you feel safe around them.</p>
      </section>
      <section id="pt-wrapup">
        <h2>Wrap Up</h2>
        <p>PTSD is nothing to be ashamed of. It's a serious condition that deserves help and treatment. If you're dealing with PTSD, please seek help and take care of yourself. If someone around you is dealing with PTSD, please don't shame them for it — encourage them to seek help, and support them where you can.</p>
        <p>Further reading: nutrition also plays an important role in how the brain copes and recovers. Read <a href="#" data-route="cortex-article-16" style="color:var(--teal);text-decoration:underline">Which Foods are Good for My Brain, and Which Foods are Harming My Brain?</a></p>
      </section>
      <section id="pt-faq">
        <h2>Frequently Asked Questions</h2>
        <div class="art-faq">
          <div class="art-faq-item">
            <div class="art-faq-q">What is PTSD?</div>
            <div class="art-faq-a">Post-Traumatic Stress Disorder is a mental health condition that can develop in people who have experienced or witnessed a traumatic event, such as an accident, assault, or combat.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">How is PTSD different from ordinary post-traumatic stress?</div>
            <div class="art-faq-a">Post-traumatic stress is usually short-lived and fades within about a month. PTSD lasts much longer, sometimes for years, and typically needs professional treatment to resolve.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">What parts of the brain does PTSD affect?</div>
            <div class="art-faq-a">PTSD primarily affects the amygdala (which becomes overly sensitive), the hippocampus (which struggles to flag stimuli as safe), and the prefrontal cortex (which loses some ability to calm the other two down).</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Why is PTSD often overlooked in Nigeria?</div>
            <div class="art-faq-a">Stigma plays a large role — women who report assault-related trauma are often not believed or supported, and men are frequently discouraged from admitting they're struggling at all.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">What happens if PTSD goes untreated?</div>
            <div class="art-faq-a">Untreated PTSD can escalate into panic or anxiety attacks, substance use, depression, and in serious cases, suicide risk — particularly among former military personnel.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">How can someone start managing PTSD?</div>
            <div class="art-faq-a">Professional therapy is central, but opening up to trusted people — whether a faith community, friends, or family — can provide meaningful support alongside treatment.</div>
          </div>
        </div>
      </section>
      <div class="art-references">
        <div class="art-ref-title">References</div>
        <ol class="art-ref-list">
          <li>American Psychiatric Association. <em>What is PTSD?</em> https://www.psychiatry.org/patients-families/ptsd/what-is-ptsd</li>
          <li>Brainline. <em>What are differences between PTS and PTSD.</em> https://www.brainline.org/article/what-are-differences-between-pts-and-ptsd</li>
          <li>PTSD UK. <em>The Science and Biology of PTSD.</em> https://www.ptsduk.org/what-is-ptsd/the-science-and-biology-of-ptsd</li>
          <li>National Center for Biotechnology Information (NCBI). <em>The Neurobiology of Post-Traumatic Stress Disorder.</em> 2011. https://pmc.ncbi.nlm.nih.gov/articles/PMC3182008/#sec21</li>
          <li>National Center for Biotechnology Information (NCBI). <em>Post-Traumatic Stress Disorder.</em> 2012. https://www.ncbi.nlm.nih.gov/books/NBK201096</li>
          <li>The Guardian Nigeria. <em>Ozoro's day of shame: How a cultural festival allegedly mutated into coordinated sexual violence.</em> 2026. https://guardian.ng/news/ozoros-day-of-shame-how-a-cultural-festival-allegedly-mutated-into-coordinated-sexual-violence/</li>
        </ol>
      </div>`,
  },
  {
    num: 19,
    id: "cortex-article-19",
    category: "Mental Health &amp; Performance",
    gradFrom: "#2A0A3A",
    gradTo: "#6A1A8A",
    badgeBg: "rgba(186,104,200,0.2)",
    badgeColor: "#E1BEE7",
    cardColor: "#BA68C8",
    title:
      "What Are the Signs of Post-Traumatic Stress Disorder?<br/>Recognizing the Signs of PTSD In Yourself and Others",
    deck: "PTSD rarely looks like the movies. Most signs are quiet and easy to miss — here's how intrusion, avoidance, mood changes, and hyperarousal actually show up.",
    bylineDate: "Published by EOS · Youth Brain Health Culture Organisation",
    cardTitle:
      "What Are the Signs of Post-Traumatic Stress Disorder? Recognizing the Signs of PTSD In Yourself and Others",
    cardExcerpt:
      "PTSD rarely looks like the movies. Most signs are quiet and easy to miss — here's how to actually recognise them, in yourself and in others.",
    toc: [
      { href: "#ps-intro", text: "Introduction" },
      { href: "#ps-intrusion", text: "Intrusion" },
      { href: "#ps-avoidance", text: "Avoidance" },
      { href: "#ps-mood", text: "Alterations in Feelings and Mood" },
      { href: "#ps-arousal", text: "Exaggerated Reactivity and Arousal" },
      { href: "#ps-different", text: "Why Symptoms Differ" },
      { href: "#ps-nigeria", text: "Why PTSD Goes Unrecognised in Nigeria" },
      { href: "#ps-help", text: "When Should You Seek Help?" },
      { href: "#ps-wrapup", text: "Wrap Up" },
      { href: "#ps-faq", text: "FAQs" },
    ],
    keyTakeaways: [
      "PTSD symptoms fall into four categories: intrusion, avoidance, negative changes in mood and thinking, and heightened arousal or reactivity.",
      "PTSD rarely looks like the movies. Most signs are quiet and easy to miss, like avoiding a place, going numb, or throwing oneself into work.",
      "Symptoms vary from person to person. The type of trauma, how often it occurred, and individual coping style all shape how PTSD shows up.",
      "Stigma keeps many Nigerians from recognizing PTSD in themselves or others, especially assault survivors who are blamed and men who are shamed for struggling.",
      "If symptoms last beyond a month and interfere with daily life, it's time to seek professional help. Recognizing the signs early opens the door to healing.",
    ],
    bodyHtml: `<section id="ps-intro">
        <p class="art-lede">Have you ever seen PTSD depicted in movies? The affected person often starts panicking or wakes up screaming from a nightmare. In action movies, it could be involuntary action such as attacking people. While these are sometimes true, movies don't often tell the full story of what PTSD looks like. I mean, you can't blame them; they have to put what looks good on the screen.</p>
        <p>In reality, signs of PTSD are not always as dramatic as shown in movies. Yes, they could be sometimes loud and obvious, but most times, they are quieter. They could be as simple as avoiding the area where the trauma occurred, flashbacks of the incident, or isolation and detachment.</p>
        <p>In our last article, we examined what PTSD is and how the brain processes it. In this article, we will be examining the signs and symptoms of PTSD. So without further ado, the signs and symptoms of PTSD can be grouped under four categories.</p>
      </section>
      <section id="ps-intrusion">
        <h2>Intrusion</h2>
        <p>In this case, the person relives the event. The person experiences flashbacks, nightmares of the event, and painful recollections of the event. These recollections are not just visual. They could show up as smells, or in cases of people who were assaulted, it could be recollecting the pain they felt or the feeling of the assailant attacking them.<sup>[1]</sup></p>
        <p>These recollections could be so vivid that the person can believe they are in that situation again, and they could act like it. These recollections are often triggered by words, sights, or smells associated with the trauma.</p>
      </section>
      <section id="ps-avoidance">
        <h2>Avoidance</h2>
        <p>This is avoiding reminders of the event. It could be a refusal to visit the area where the event occurred, avoiding talking about it, and trying to forget the event ever happened. It could also mean distancing themselves from friends and family who are trying to help or avoiding treatment and choosing to swallow the pain up.<sup>[2]</sup></p>
        <p>Avoidance also shows up as numbing the pain with drugs or alcohol, throwing themselves into work or their career to keep busy all the time, and it could even go as far as the brain blocking out some memories of the event.<sup>[2]</sup></p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">📌</div>
          <div>Avoidance is one of the quietest signs of PTSD. It rarely looks dramatic — often it just looks like someone who has become very good at staying busy, or very good at steering conversations away from a certain topic.</div>
        </div>
      </section>
      <section id="ps-mood">
        <h2>Alterations in Feelings and Mood</h2>
        <p>Some victims may have issues with guilt, regret, and self-blame.<sup>[4]</sup> This is especially true in Nigerian situations of women who were assaulted. The conversation often shifts from the actual assault and trauma to what she was wearing, what she was doing in the area, and other irrelevant issues.</p>
        <p>The person could also be experiencing anger, difficulty feeling positive emotions, fear, or horror. In some cases, the person could just be numb emotionally and non-responsive to emotional feelings.<sup>[3]</sup></p>
      </section>
      <section id="ps-arousal">
        <h2>Exaggerated Reactivity and Arousal</h2>
        <p>In this case, the person displays hyperawareness, being easily startled, always scanning for danger, sweating, trouble sleeping or concentrating, anxiety, shaking, fast heartbeat.<sup>[5]</sup></p>
        <p>The person will be looking out for signs of danger even in places where there aren't any, react more to being surprised or startled, and in some cases even react violently or aggressively to being startled.<sup>[6]</sup></p>
        <div class="art-callout art-callout-blue">
          <div class="art-callout-icon">🧠</div>
          <div>These four categories often overlap in the same person. Someone can be avoiding a place, feeling numb about it, and still be jumpy and on edge — all as part of the same underlying condition.</div>
        </div>
      </section>
      <section id="ps-different">
        <h2>Why Do People Have Different Symptoms of PTSD?</h2>
        <p>The trauma faced by one person is different from the one faced by another. Someone who lost a shop or house to fire would experience different symptoms from someone who was robbed at gunpoint.</p>
        <p>In addition, some people can shake things off more easily than others, which is why their symptoms may not be as severe as those of others. Furthermore, exposure to trauma matters. In some cases, people who have been exposed to the same trauma multiple times might shut down and be numb. Some might accept it as their fate or even start feeling like they deserve it. Others might become more paranoid and see danger at every turn.</p>
      </section>
      <section id="ps-nigeria">
        <h2>Why Does PTSD Go Unrecognised in Nigeria?</h2>
        <p>Nigeria is not the best place for people with PTSD, especially women who have been violently assaulted. In many cases, the victims are blamed and told the situation is their fault. Some even go as far as saying the victim enjoyed it. The justice system has unfortunately failed many victims, and the knowledge that their abusers are walking free keeps many of them trapped in the cycle of pain and fear.</p>
        <p>On the other hand, many boys who were abused keep it to themselves because of the stigma people associate with it. They get seen as weak because of their experience. This keeps many of them from seeking help, and unfortunately, some of them grow up and replicate this abuse to others.</p>
        <p>Many signs of PTSD are often written off as spiritual attacks, and because of this, the people don't often get the help they need. While faith helps by reassuring the person and providing a community that can keep tabs on the person to make sure they are okay, there is still the need to see a professional for treatment.</p>
        <div class="art-callout art-callout-purple">
          <div class="art-callout-icon">⚠️</div>
          <div>Stigma is often the biggest barrier to recognising PTSD — not the symptoms themselves. When blame or shame gets attached to trauma, people learn to hide the signs rather than name them.</div>
        </div>
      </section>
      <section id="ps-help">
        <h2>When Should You Seek Help?</h2>
        <p>It is important to seek help once you notice the signs listed above. This becomes crucial once they are interfering with work, relationships, and other aspects of life. It would be much easier if there were some sort of test you could use to know if you have PTSD, but if you check the signs listed in this article, you can have a better idea of your condition.</p>
        <div class="art-callout art-callout-teal">
          <div class="art-callout-icon">💬</div>
          <div>For the person dealing with PTSD: seeking help is not a sign of weakness or that you deserved what happened to you. It just means you have a lot, and you need help with it. It was not your fault. Please don't hold on to the guilt and pain, and don't let what happened to you define you. Get some help today. You are greater than what happened to you.</div>
        </div>
      </section>
      <section id="ps-wrapup">
        <h2>Wrap Up</h2>
        <p>PTSD shows up in different ways in different people. It is important to recognise the signs and symptoms of PTSD in ourselves and people around us. When we see these signs, let us get help or encourage them to get help.</p>
        <p>In our next article, we will examine practical steps to help those with PTSD. Make sure you don't miss it.</p>
        <p>Further reading: did you miss our last article on what PTSD actually is? Read <a href="#" data-route="cortex-article-18" style="color:var(--teal);text-decoration:underline">What PTSD Actually Is (And Why It's More Than "Shock")</a>.</p>
      </section>
      <section id="ps-faq">
        <h2>Frequently Asked Questions</h2>
        <div class="art-faq">
          <div class="art-faq-item">
            <div class="art-faq-q">What are the signs of PTSD?</div>
            <div class="art-faq-a">The four main signs are intrusion, avoidance, mood changes, and hyperarousal. Intrusion means flashbacks and nightmares. Avoidance means staying away from reminders. Mood changes bring guilt or numbness. Hyperarousal means being easily startled or always on edge.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">How do you know if you have PTSD?</div>
            <div class="art-faq-a">Watch for flashbacks, avoidance, guilt, or feeling constantly on edge. These signs often last more than a month. They also start interfering with work, relationships, or daily life. If this sounds familiar, it may be time to speak with a professional.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">What does PTSD look like in real life?</div>
            <div class="art-faq-a">It rarely looks like the movies. Most signs are quiet. Someone might avoid a certain street. They might go numb or throw themselves into work. Others become easily startled or struggle to sleep.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">Can PTSD symptoms be different for everyone?</div>
            <div class="art-faq-a">Yes. The type of trauma shapes the symptoms. So does how often it happened. Personal coping style also plays a role. Two people can go through similar events and react very differently.</div>
          </div>
          <div class="art-faq-item">
            <div class="art-faq-q">When should you see a doctor for PTSD?</div>
            <div class="art-faq-a">See a doctor once symptoms start affecting daily life. This includes work, relationships, or sleep. Waiting too long can make symptoms harder to manage. Early support leads to better outcomes.</div>
          </div>
        </div>
      </section>
      <div class="art-references">
        <div class="art-ref-title">References</div>
        <ol class="art-ref-list">
          <li>World Health Organization (WHO). <em>Post-Traumatic Stress Disorder (PTSD).</em> 2025. https://www.who.int/news-room/fact-sheets/detail/post-traumatic-stress-disorder</li>
          <li>PTSD UK. <em>Symptoms of PTSD.</em> 2024. https://www.ptsduk.org/what-is-ptsd/symptoms-of-ptsd/7/</li>
          <li>Mayo Clinic. <em>Post-Traumatic Stress Disorder (PTSD): Symptoms and Causes.</em> 2025. https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967</li>
          <li>Office on Women's Health (U.S. Department of Health &amp; Human Services). <em>Post-Traumatic Stress Disorder (PTSD).</em> 2025. https://womenshealth.gov/mental-health/mental-health-conditions/post-traumatic-stress-disorder</li>
          <li>NHS (National Health Service). <em>Post-Traumatic Stress Disorder (PTSD).</em> 2025. https://www.nhs.uk/mental-health/conditions/ptsd-post-traumatic-stress-disorder/</li>
          <li>Cleveland Clinic. <em>Post-Traumatic Stress Disorder (PTSD).</em> 2025. https://my.clevelandclinic.org/health/diseases/9545-post-traumatic-stress-disorder-ptsd</li>
        </ol>
      </div>`,
  },
];
