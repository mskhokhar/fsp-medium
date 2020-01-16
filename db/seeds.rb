# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
require 'faker'

ActiveRecord::Base.connection.execute("TRUNCATE TABLE users, categories, likes, posts RESTART IDENTITY")
ApplicationRecord.transaction do
User.destroy_all
Category.destroy_all
Post.destroy_all
Like.destroy_all

guest_user = User.create!({
    username: 'guest_user',
    password: '123456',
    first_name: 'Guest',
    last_name: 'User' ,
    email: 'guest_user@io.com'
})
demo_user = User.create!({
    username: 'starwars_01',
    password: '123456',
    first_name: 'Star',
    last_name: 'Wars' ,
    email: 'starwars_01@io.com'
})
user_1= User.create!({
    username: Faker::Internet.username,
    password: '123456',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name ,
    email: Faker::Internet.email
})
user_2= User.create!({
    username: Faker::Internet.username,
    password: '123456',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name ,
    email: Faker::Internet.email
})
user_3 = User.create!({
    username: Faker::Internet.username,
    password: '123456',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name ,
    email: Faker::Internet.email
})
user_4 = User.create!({
    username: Faker::Internet.username,
    password: '123456',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name ,
    email: Faker::Internet.email
})
user_5 = User.create!({
    username: Faker::Internet.username,
    password: '123456',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name ,
    email: Faker::Internet.email
})

business = Category.create!({
    name: 'Business',
    subtitle: 'all about Business'
})
education = Category.create!({
    name: 'Education',
    subtitle: 'all about Education'
})
food = Category.create!({
    name: 'Food',
    subtitle: 'all about Food'
})
health = Category.create!({
    name: 'Health',
    subtitle: 'all about Health'
})
lgbt = Category.create!({
    name: 'LGBTQIAA',
    subtitle: 'all about LGBTQIAA'
})
psychology = Category.create!({
    name: 'Psychology',
    subtitle: 'all about Psychology'
})
relationship = Category.create!({
    name: 'Relationships',
    subtitle: 'all about Relationships'
})
technology = Category.create!({
    name: 'Technology',
    subtitle: 'all about Technology'
})
work = Category.create!({
    name: 'Work',
    subtitle: 'all about Work'
})

food_1 = Post.create!({
    body: 'The scientists, who hail from several prestigious academic institutions in the United Kingdom — the Universities of Bath, Birmingham, Newcastle, and Stirling — looked into how eating a morning meal before cycling for an hour would affect the body versus the effects of fasting before cycling.

    The findings — reported in the American Journal of Physiology: Endocrinology and Metabolism — indicate that eating first actually helps the body burn more carbohydrates during exercise.

    Not just that, but having breakfast before a morning cycle can actually also help digestion after a workout, the study suggests.

    "This is the first study to examine the ways in which breakfast before exercise influences our responses to meals after exercise," says co-lead researcher Dr. Javier Gonzalez.',
    title: 'How does eating before a workout affect the body',
    author_id: guest_user.id,
    category_id: food.id

})



food_1_path = open('https://blogium-prod-seeds.s3-us-west-1.amazonaws.com/food/food_1.jpg')
food_1.picture.attach(io: food_1_path, filename: 'food_1.jpg')

food_2 = Post.create!({
    body: "Data from the Centers for Disease Control and Prevention (CDC) indicate that, between 2013 and 2016, 36.6 percent of adults in the United States ate fast food on any given day.

Moreover, according to a study conducted by University of Connecticut researchers in 2018, around 74 percent of parents purchase unhealthful foods for their children in fast-food restaurants.

This, the investigators noted, is despite the fact that, from 2013 onward, some of the most popular fast-food chains committed to offering more healthful options in their children's menus.

Now, a new study suggests that most fast-food restaurant menus have not, in fact, become more healthful overall, despite the addition of some arguably more wholesome choices.",
    title: 'Has fast food become worse for our health in the past 30 years?',
    author_id: demo_user.id,
    category_id: food.id

})

food_2_path = open('https://blogium-prod-seeds.s3-us-west-1.amazonaws.com/food/food_2.jpg')
food_2.picture.attach(io: food_2_path, filename: 'food_2.jpg')




business_2 = Post.create!({
    body: "If you’re a small business owner on the forefront of the tech industry, then the New York Times’ “The iEconomy” is one of the best compilations of business articles to read.

The articles in this Pulitzer Prize-winning series look closely at the constantly changing high-tech industry. As an entrepreneur in a tech-facing business, you might find that the iEconomy series has a unique outlook on how challenging it can be to keep up in the tech industry.",
    title: 'The iEconomy',
    author_id: user_4.id,
    category_id: business.id

})

business_2_path = open('https://blogium-prod-seeds.s3-us-west-1.amazonaws.com/business/business_2.png')
business_2.picture.attach(io: business_2_path, filename: 'business_2.png')

work_1 = Post.create!({
    body: "Being happier at work is tied to better health and well-being, more creative and effective problem solving, more productivity and innovation, and faster career advancement.
People who are happier at work are more authentic, more committed and driven to work, and more willing to contribute beyond their job descriptions; they also find more flow and meaning in their work.
In the face of adversity and setbacks, people in happier workplaces tend to see the bigger picture, making them less stressed; better at coping with and recovering from work strain; and also better at reconciling conflict.
Socially, people who are happier at work are rated by others as more likable, more trustworthy, more deserving of respect and attention, and more effective leaders; at happier workplaces, people are also more helpful to each other and more supportive of one another during difficult times.",
    title: 'What does happiness at work means',
    author_id: user_1.id,
    category_id: work.id

})
work_1_path = open('https://blogium-prod-seeds.s3-us-west-1.amazonaws.com/work/work_1.jpeg')
work_1.picture.attach(io: work_1_path, filename: 'work_1.jpeg')


work_2 = Post.create!({
    body: "Where I grew up, work sucked. My parents were always drained and exasperated, and never felt financially secure enough to relax. Overwhelmed by unreasonable demands and terrible toilets (my dad was the local school district plumber) and hardened by a sense that nobody else was pulling their weight, they felt defeated by work. To top it all off, people never seemed to acknowledge or appreciate the great lengths they would go through to do things just right.

I know they’re not alone. For somewhere between 55 to 80 percent of us, it’s normal to see work as something to be endured, not enjoyed. We toil all day, then come home to a drink or some HGTV, trying to find the right “work-life balance”—with the assumption that work is about stress (and sustenance) while the rest of our life is where we derive true meaning and happiness.",
    title: 'The Four Keys to Happiness at Work',
    author_id: user_2.id,
    category_id: work.id

})
work_2_path = open('https://blogium-prod-seeds.s3-us-west-1.amazonaws.com/work/work_2.jpeg')
work_2.picture.attach(io: work_2_path, filename: 'work_2.jpeg')


business_1 = Post.create!({
    body: "Do you have a feeling you might be an entrepreneur at heart? In “50 Signs You Might Be an Entrepreneur,” published on Entrepreneur.com, John Rampton could point out the one—or many—things that makes you the perfect small business owner deep down inside.

Entrepreneurs and business owners have a certain kind of spirit and drive that keeps pushing them forward. Use this business article to find out if you possess the qualities of an entrepreneur yourself.",
    title: '50 Signs You Might Be an Entrepreneur',
    author_id: user_3.id,
    category_id: business.id
})

business_1_path = open('https://blogium-prod-seeds.s3-us-west-1.amazonaws.com/business/business_1.jpg')
business_1.picture.attach(io: business_1_path, filename: 'business_1.jpg')





education_1 = Post.create!({
    body: "In 2002 I was invited to give a talk to 500 school teachers. The invitation puzzled me, as my research at the time had nothing to do with education; I was a psychologist studying how different parts of the brain support different types of human learning. I mentioned this to the person who invited me, and she said, “We know. We want you to tell us about cognitive psychology. We think our teachers would be interested.” I shrugged, accepted the invitation, and forgot about it. Six months later (and days before I was to give the talk) I was wondering what had possessed me to say yes. Surely teachers would already know anything I could tell them about human memory, or attention, or motivation that would be relevant to teaching. I felt anxious and was sure the presentation would be a disaster.

But it wasn’t. Teachers thought it was interesting and relevant to their practice. Most surprising to me, they were unfamiliar with the content, even though it came from the very first class in human cognition a college student would take. I wondered: how could teachers not know the ABCs of cognition?

Yet the following 15 years have shown that experience was not a fluke. I’ve written four books and dozens of articles and have delivered scores of talks for teachers on the basics of cognition. In so doing, I’ve addressed what teachers saw as a need; what I haven’t done is think about why the need exists. Shouldn’t teachers learn how children think during their training? In this essay I consider why they don’t, and what we might do about it.",
    title: 'Unlocking the Science of How Kids Think',
    author_id: demo_user.id,
    category_id: education.id

})
education_1_path = open('https://blogium-prod-seeds.s3-us-west-1.amazonaws.com/education/education_1.jpg')
education_1.picture.attach(io: education_1_path, filename: 'education_1.jpg')


education_2 = Post.create!({
    body: "The model of special education known as inclusion, or mainstreaming, has become more prevalent over the past 10 years, and today, more than 60 percent of all students with disabilities (SWDs) spend 80 percent or more of their school day in regular classrooms, alongside their non-disabled peers (see Figure 1). This is not the full inclusion favored by some disability advocates, wherein all SWDs would be educated in inclusive classrooms all day; however, many supporters celebrate the increasing acceptance of differently abled students in general education as an opportunity to improve the academic and long-term trajectories of these traditionally underserved learners. In theory, inclusion provides SWDs with access to the grade-level curriculum and the same educational opportunities as their peers.

Unfortunately, research has yielded only weak evidence that inclusion confers benefits on SWDs. Studies that report better academic and behavioral outcomes for SWDs who are taught in a general-education setting suffer from methodological flaws. Even less evidence suggests that general-education teachers are adequately prepared to meet the unique academic and behavioral needs of SWDs. Further, studies of inclusion seem to assume that SWDs are educated in a vacuum; that is, they fail to examine the experiences of non-disabled classmates.

In this article, I explore policies and existing research on inclusion to describe what we know, what we don’t, and how current knowledge should inform decisions about where to educate SWDs. An underlying theme of this discussion is that inclusion influences not only SWDs but also their peers and teachers. The interplay between and among these three groups suggests areas of research that can inform future discussion about inclusion and how it can work well for all stakeholders.",
    title: 'Has Inclusion Gone Too Far?',
    author_id: demo_user.id,
    category_id: education.id

})
education_2_path = open('https://blogium-prod-seeds.s3-us-west-1.amazonaws.com/education/education_2.jpg')
education_2.picture.attach(io: education_2_path, filename: 'education_2.jpg')


health_1 = Post.create!({
    body: "Whether you’re bothered by a little too much padding on your hips, thighs, belly or any other place else on your body, you probably know that spot-reducing isn’t possible. “When you gain weight it’s circular, meaning that you store fat all over your body,” says Obi Obadike, fitness expert and celebrity trainer whose washboard abs have graced many a fitness magazine cover.

“But certain parts of your body are prone to store more fat than others.” For some it’s the hips or butt. For others, it’s right smack in the middle of the body.

What’s the secret to losing the tubby tummy? 

Eat a clean/lean healthy diet: “Abs are not made in the gym, they are made in the kitchen.” Obadike says this is something he and many fitness experts tell their clients. “Flat abs are not indicative of 1,000 sit ups a day, they’re indicative of how low your body fat is. And reducing your body fat comes from a clean, healthy diet.” ",
    title: "Why Your Belly Fat Won't Budge",
    author_id: demo_user.id,
    category_id: health.id

})
health_1_path = open('https://blogium-prod-seeds.s3-us-west-1.amazonaws.com/health/health_1.jpeg')
health_1.picture.attach(io: health_1_path, filename: 'health_1.jpeg')


health_2 = Post.create!({
    body: "You might think of daydreaming as a slacker habit, but it turns out that it's good for your brain. So let your mind wander a little bit today.

Zoning out doesn't mean your mind is on vacation. Just the opposite. Research involving brain scans showed that when people daydream, the brain actually works harder, and in different ways.

Stop paying attention
A study compared brain activity during two different conditions -- when people played an easy game and when their minds simply wandered freely. And daydreaming lit up the brain areas that researchers expected it to, such as those areas that handle routine daily activities. But, surprisingly, the activity of daydreaming also activated the lateral prefrontal cortex and the dorsal anterior cingulate cortex -- the so-called executive network of the brain, where complex problem-solving happens. Which led researchers to conclude that giving your brain a break allows these higher-function areas to work on the weighty questions humming in the background of your thoughts. You know, those big things, like how to solve a problem at work, resolve an argument with your spouse, or start a new business venture",
    title: 'Let Your Mind Wander for a Healthier Brain',
    author_id: demo_user.id,
    category_id: health.id

})
health_2_path = open('https://blogium-prod-seeds.s3-us-west-1.amazonaws.com/health/health_2.jpeg')
health_2.picture.attach(io: health_2_path, filename: 'health_2.jpeg')


lgbt_1 = Post.create!({
    body: "rank kameny, the last century’s greatest gay-rights activist, filed the first-ever Supreme Court petition challenging discrimination against homosexuals. He led some of the first gay-rights demonstrations. He was the first openly gay congressional candidate. He spearheaded the challenge to the psychiatric establishment’s categorization of homosexuality as a mental illness. He fought tirelessly against sodomy laws. He did a lot more than that. But there is one thing he never did—at least to my own recollection and that of associates of his whom I consulted. He did not use the term LGBTQ, or any of its variations.
    
    This is partly because he was a creature of his era, born in the 1920s and active in an age when the whole argot was different. But he lived until 2011, well into the age of LGBTQ. He had plenty of time to make peace with the term, but his friends say he abjured it. “My recollection is LGBT or its derivatives were expressly disliked by Frank,” one of them told me. “He would use gay to cover the full range; or gay and lesbian.” Another said: “Frank was quite indignant about the alphabet soup. When it started in the ’80s with gay and lesbian, he correctly predicted that there would be no end of it.”
    
    Kameny especially prized, among his many accomplishments, his slogan “Gay is good!”—a proud claim that homosexuals are heterosexuals’ moral as well as legal equals. He wasn’t excluding anyone by using the word gay. He didn’t mean that gay is good but lesbian, bisexual, and transgender are not. He believed he was fighting for the values that define all Americans—the values he had fought for in combat during World War II. Gay rights, to him, meant American rights. Human rights.",
    title: "It’s Time to Drop the ‘LGBT’ From ‘LGBTQ’",
    author_id: demo_user.id,
    category_id: lgbt.id

})
lgbt_1_path = open('https://blogium-prod-seeds.s3-us-west-1.amazonaws.com/lgbtqiaa/lgbt_1.png')
lgbt_1.picture.attach(io: lgbt_1_path, filename: 'lgbt_1.png')


lgbt_2 = Post.create!({
    body: "The term 'gay' has traditionally been used to represent a diverse group or people who are attracted to people of the same gender or are in a relationship with someone of the same gender. It is important to recognize, however, that different groups within the gay community exist, and that the term 'gay' is not all-inclusive. For example, transsexuals and some people who are bisexual do not consider themselves to be gay. Also, research has found that men who have had relationships with other men do not always identify themselves as gay. There is also a tremendous ethnic diversity among our lesbian, gay, and bisexual communities, and this contributes to the different perceptions of the term 'gay'

The first five definitions listed below are from the Parents, Friends, and Families of Lesbians and Gays (PFLAG) (http://www.pflag.org/). Barbara Warren, Director of Mental Health and Social Services Programs, contributed the last four definitions for the Lesbian and Gay Community Services Center of New York City (http://www.gaycenter.org/)

Heterosexual, or straight, refers to people whose sexual and romantic feelings are mostly for the opposite gender: Men who are attracted to women, and women who are attracted to men.
Homosexual, or gay, refers to people whose sexual and romantic feelings are mostly for the same gender: Men who are attracted to men, and women who are attracted to women.
Lesbian refers to women who are homosexual.
Bisexual or 'bi' refers to people whose sexual and romantic feelings are for both genders.
Transgender is an umbrella term that encompasses a diversity of gender expression including drag queens and kings, bi-genders, crossdressers, transgenderists, and transsexuals.
Transvestites are people who like to dress like members of the opposite sex.
Transsexuals are people who feel that their anatomical sex does not match the gender with which they identify.
Bigender refers to people who define themselves as having the behavioral, cultural or psychological characteristics associated with both the male and female genders.
Transgenderist describes someone who is gender variant or transgresses gender norms as part of their lifestyle or identity.",
    title: 'What is the Meaning of LGBT?',
    author_id: demo_user.id,
    category_id: lgbt.id

})
lgbt_2_path = open('https://blogium-prod-seeds.s3-us-west-1.amazonaws.com/lgbtqiaa/lgbt_2.jpeg')
lgbt_2.picture.attach(io: lgbt_2_path, filename: 'lgbt_2.jpeg')


psychology_1 = Post.create!({
    body: "With the pace of modern life seeming to increase every day, it is easy to suddenly find yourself feeling fatigued, drained and just plain run down. From working adults to young students, it is common to think that staying up later for just an hour or so is harmless. However, those extra hours of television watching, game playing or even working can add up and take their toll on our wellbeing. This forms what is referred to as a sleep deficit, and can be as difficult to recover from as having a deficit in your bank account balance. Needless to say, getting adequate sleep is vital to a person's health. In order to appreciate the value of a good night's sleep, it is best to first have an understanding of why we designed to need sleep in the first place. Here are a few ways that sleep - or lack thereof - can have an effect on the quality of your life.

Brain and Memory Function
We all have those days when we forget things - where we put our car keys, the due date for a homework assignment, or - on particularly hectic days - what we ate for breakfast. If you can rule out medical causes or medication side effects, you may be experiencing these episodes of forgetfulness because of poor sleep habits. Your brain's synapses begin to slow and do not make the proper connections when they are overly fatigued, so you are less able to focus on a task or on a thought process. This state becomes harmful because it will impact everything from successfully completing a school test to reaction time while driving - the latter of these will of course have more serious life-altering consequences.

Immune System
Acquiring an illness such as the common cold is a part of life. Whether you feel like you are coming down with a mild case of the sniffles or something more serious, your body will be unprepared to fight off the invading virus if it is not rested. Rest allows cells to repair and strengthen so that they can perform their jobs well, so be sure to help yourself to stay well by getting the sleep that your immune system requires. If you do get a full-blown malady such as the flu, you will find that your recovery time is much shorter if you are taking good care of yourself. Denying your system time to do what it needs to do will only cause it to go into overdrive, and will be unable to compensate for what it is lacking because it must struggle even more with just its basic functions. Introducing a foreign matter such as a virus would spell trouble, and you may very likely have to spend several days in bed anyway!",
    title: 'The Importance of Sleep: More Than Rest and Relaxation',
    author_id: demo_user.id,
    category_id: psychology.id

})
psychology_1_path = open('https://blogium-prod-seeds.s3-us-west-1.amazonaws.com/psychology/psychology_1.png')
psychology_1.picture.attach(io: psychology_1_path, filename: 'psychology_1.png')


psychology_2 = Post.create!({
    body: "It always seems like there's a mountain between us and our dreams. People who want to achieve something great, reach a lofty goal, or start something new will often hesitate before taking the leap. That little bit of hesitation is fine - it's not wise to do anything monumental without pausing to make important considerations.

The hesitation becomes a problem when it transmutes into fear or anxiety that holds you back from doing something you're perfectly capable of doing. If fear is standing in the way of your success, it's time to evaluate the situation, work towards resolving that fear, and do the thing you've always dreamed of doing.

Acknowledge That You're Scared
Most people don't want to admit that fear is a major component separating them from their goals. They'll come up with a list of alternative excuses, but those excuses often won't hold water. Sometimes, excuses are issues that must first be solved or cases where a little creative thinking can bring about a perfect workaround. If your excuses aren't that rational upon further examination, you need to acknowledge that you're feeling a little afraid. It's nothing to be ashamed of - it happens to everyone.

Ask Yourself Why You're Scared
Realizing that you're afraid is the what. The why is even more important, as this is where you'll find the solution. Why are you afraid to move forward with your great idea, your request for a promotion, or to continue your education? For many people, it's the fear of failing. This is even more true when the goal requires money. Nobody wants to feel like they've let their family down by misappropriating funds, and nobody wants to be broke.

In truth, there is always a risk of failure in everything. There's a risk that you can burn your macaroni and cheese! Learning to accept that there's a risk and understanding what you can do to mitigate or minimize that risk will make the process easier. Remain mindful, but consider how much control you actually have. Utilize healthy coping mechanisms for your anxiety, and work through your concerns with rational thought.",
    title: 'Behind Every Fear is Success – How to Conquer Anxieties That Are Holding You Back',
    author_id: demo_user.id,
    category_id: psychology.id

})
psychology_2_path = open('https://blogium-prod-seeds.s3-us-west-1.amazonaws.com/psychology/psychology_2.jpg')
psychology_2.picture.attach(io: psychology_2_path, filename: 'psychology_2.jpg')


relationship_1 = Post.create!({
    body: "Every person has their own measuring stick on what must happen in a relationship, or what traits a person must have for them to fall in love. The beliefs that make up your measuring stick of love also determine your values and expectations, which in turn reinforce your beliefs.
    
    Most of us are oblivious to these beliefs, but they cause us to find ourselves in relationship after relationship with people we can’t trust. These are the same beliefs that cause us to call our partner 61 times in one night because we can’t focus on anything else besides the fear of them leaving us.

It feels so real to us.

Even when it looks crazy or needy when we call over and over, we can’t help it.

Eventually we end up manifesting the fear our actions are trying to avoid and the relationship ends.

So where do these beliefs come from in the first place?

Our beliefs about ourselves and the world formed in our youth becomes a filter through which we see our adult life.",
    title: 'How our beliefs cause us to fall in love with certain people',
    author_id: demo_user.id,
    category_id: relationship.id

})

relationship_1_path = open('https://blogium-prod-seeds.s3-us-west-1.amazonaws.com/relationships/relationship_1.jpg')
relationship_1.picture.attach(io: relationship_1_path, filename: 'relationship_1.jpg')


relationship_2 = Post.create!({
    body: "We are biologically driven to form attachments with others.

Attachment gave us a survival advantage from an early age – if our parents were not attached to us, we’d never get food and we’d die.Love is the biological drug that brings people together. Attachment keeps us together.

But as many of us know, attachment can make us do stupid things too. I had an ex-girlfriend who threatened to jump off a bridge if I didn’t see her right that minute. I had another girlfriend call me 52 times and send me 19 text messages in the span of three hours. I even picked up the first 10 calls to tell her I loved her and how much our relationship mattered to me.

Here’s the kicker: I’d call incessantly too if I was uncomfortable, or if I didn’t trust them. I’d panic and create an imaginary movie of my partner cheating or leaving me behind.",
    title: 'The evolutionary benefit of Attachment',
    author_id: demo_user.id,
    category_id: relationship.id

})
relationship_2_path = open('https://blogium-prod-seeds.s3-us-west-1.amazonaws.com/relationships/relationship_2.jpg')
relationship_2.picture.attach(io: relationship_2_path, filename: 'relationship_2.jpg')


technology_1 = Post.create!({
    body: "Hardly any software vendors today want to be stuck with an on-premises-only product portfolio. In the ERP subsector, probably the most important technology area for CFOs, it took market leaders Oracle and SAP longer than most to diversify into the cloud. But now they’re leaders there as well.

But while the global cloud ERP market is expected to grow, it likely won’t be at a lightning-fast pace. Statista forecasts that the market will be $28.8 billion in 2022, representing an 8% compound annual growth rate since 2016.

So far, CFOs as a group — those at large companies, at least — have been fairly reluctant to trust their core financial and operational data to public clouds. Still, companies’ overall growing fondness for cloud computing could influence faster change in the ERP arena.

Research and advisory firm IDC estimates that 70% of companies’ core applications currently run on-premises or in co-location facilities. The rest are in private clouds (23%) or public clouds (8%).

In a recent survey by 451 Research, however, 60% of participating technology professionals said they expected their companies’ approach to IT in 2020 would be focused on off-premises cloud solutions",
    title: 'Cloud ERP: The Time Has Come',
    author_id: demo_user.id,
    category_id: technology.id

})
technology_1_path = open('https://blogium-prod-seeds.s3-us-west-1.amazonaws.com/technology/technology_1.jpg')
technology_1.picture.attach(io: technology_1_path, filename: 'technology_1.jpg')


technology_2 = Post.create!({
    body: "Insurers dread what they like to call “aggregation risk.” The threat arises when a large number of companies face the same catastrophic peril concurrently, multiplying the potential losses in an insurer’s portfolio. The issue gained prominence in the wake of the 9/11 attacks, when many companies in the same location lost people, saw property destroyed, and suffered lengthy business interruptions from a single event.

Flash forward nearly 17 years and the problem is cropping up again, but in a different form. This time, the aggregation refers to the vast accumulations of cyber risks faced by companies seeking efficiency and safety by automating some or all of their operations in the cloud. What could happen to such companies if one or more of the large providers that have cornered the cloud-computing market gets hit with a devastating cyber attack or suffers a system failure?

To be sure, nothing comparable to the loss of the more than 3,000 lives and $10 billion in property and infrastructure damage caused by the September 11 attacks has hit corporate America. But the aggregation of risk in the cloud creates an attractive target for hackers and a place where small mistakes, like a flub during a routine maintenance upgrade, can wreak widespread havoc.

A cyber incident that takes a top-three cloud-services vendor offline for three to six days would spawn customer financial losses of about $7 billion to $15 billion, according to a report, “Cloud Down,” by Lloyd’s of London and catastrophic risk modeler AIR Worldwide.",
    title: 'Cloud Security In Question',
    author_id: demo_user.id,
    category_id: technology.id

})
technology_2_path = open('https://blogium-prod-seeds.s3-us-west-1.amazonaws.com/technology/technology_2.jpg')
technology_2.picture.attach(io: technology_2_path, filename: 'technology_2.jpg')

Like.create!({
    liker: demo_user,
    post_id: work_1.id
})
Like.create!({
    liker: demo_user,
    post_id: health_1.id
})
Like.create!({
    liker: demo_user,
    post_id: lgbt_1.id
})
Like.create!({
    liker: demo_user,
    post_id: technology_1.id
})
Like.create!({
    liker: demo_user,
    post_id: food_1.id
})
end




