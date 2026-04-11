/* ============================================
   People Data
   Used by bio.html to populate individual profiles
   ============================================ */

const PEOPLE = [
    {
        slug: 'ian-cooke',
        name: 'Ian Cooke FPFS',
        role: 'Chief Executive',
        location: 'London & Sussex',
        photo: '../images/people/Ian Cooke.jpg',
        linkedin: 'https://www.linkedin.com/in/ian-cooke-18332828/',
        office: {
            name: 'Family Capital',
            address: '68 King William Street\nLondon EC4N 7HR',
            phone: '0207 082 5650',
            email: 'ian.cooke@familycapital.co.uk'
        },
        summary: [
            'Ian is the founder and chief executive of Family Capital and its parent company, Perpetual Wealth Group. He still looks after the same clients he\'s worked with for over thirty years — and that continuity is something he\'s proud of.',
            'Day to day, Ian sets the strategic direction of the firm and works directly with ultra high net worth clients on complex planning — family investment companies, trusts, pensions, and the structures that sit around significant wealth. He is a qualified discretionary fund manager and sits on the firm\'s investment committee.',
            'He also designed and continues to shape most of the technology behind Family Capital, from the client portal to the platforms that power the advice process.'
        ],
        experience: [
            'Ian set up his first financial planning practice in 1993. In the early days, the focus was on advice — but he quickly saw the potential for technology to improve the way firms operated. That led to designing compliance systems that helped advisers across the UK manage their client files properly, and to embracing software as a core part of how the business worked.',
            'From the original advice business, the company moved into compliance and support networks, eventually building two platforms and a group of companies that became Benchmark Capital. The business was acquired by Schroders in 2017, and by the time Ian sold his final stake in 2021, Benchmark had grown to over twenty billion pounds under management. He still sits on the board today.',
            'When the business was sold, the one thing that wasn\'t part of the deal was the client relationships. Those stayed. That decision is what led to Family Capital — a name that reflects not just the families the firm looks after, but the way the team thinks about what it does. Giving financial advice is a privilege, and the relationships that come with it aren\'t something you hand over.',
            'Ian believes in holistic financial planning — not just investments, but the bigger picture of how best to manage wealth. Pensions, tax, protection, trusts, estate planning. It\'s all connected, and it only works properly when someone takes the time to understand the whole picture.',
            'He is passionate about discretionary fund management and takes a straightforward approach to it — understand the level of risk a client is genuinely comfortable with, then build the best portfolio for it. No unnecessary complexity, no in-house funds pushed for the sake of it. Family Capital is truly independent, which means every investment decision is made in the client\'s interest, not to fill someone else\'s fund range.',
            'He is a Fellow of the Personal Finance Society and a Chartered Financial Planner, and splits his time between London and the Sussex coast.'
        ]
    },
    {
        slug: 'claire-stones',
        name: 'Claire Stones FPFS',
        role: 'Senior Partner',
        location: 'Leeds',
        photo: '../images/people/Claire Stones.jpg',
        linkedin: 'https://www.linkedin.com/in/claire-stones-31657560/',
        summary: [
            'Claire is a senior partner at Family Capital and heads up the firm\'s Leeds office. A chartered financial planner with over twenty-five years of experience, she works closely with families on long-term planning — particularly around trusts, estate planning, and the structures that help protect wealth across generations.',
            'She joined Family Capital in 2024, merging her own established practice into the firm. It was a natural fit — the same values, the same client-first approach, just with more behind it.'
        ],
        office: {
            name: 'Family Capital North',
            address: 'Seven Hills Business Centre\nSouth Street, Morley\nLeeds LS27 8AT',
            phone: '0113 539 9100',
            email: 'claire.stones@familycapital.co.uk'
        },
        experience: [
            'Claire ran her own financial planning practice for ten years before joining Family Capital. During that time, she built a loyal client base and a reputation for taking the time to properly understand people\'s lives before making recommendations.',
            'In September 2024, she merged her practice with Family Capital to open and lead the firm\'s Leeds office as senior partner. The move brought her clients the benefit of a wider team and deeper resources, while keeping the personal relationship that mattered to them.',
            'Claire\'s focus has always been on families — helping people think about wealth in the round, not just as a set of accounts. Trusts, estate planning, pensions, and the way everything connects together. She believes good financial planning starts with listening, not selling.',
            'She is a Fellow of the Personal Finance Society and a Chartered Financial Planner.'
        ]
    },
    {
        slug: 'simon-andrews',
        name: 'Simon Andrews FPFS',
        role: 'Partner',
        location: 'Sevenoaks, Kent',
        photo: '../images/people/Simon Andrews.jpg',
        linkedin: 'https://www.linkedin.com/in/simonandrews1977/',
        office: {
            name: 'Family Capital',
            address: '68 King William Street\nLondon EC4N 7HR',
            phone: '0207 082 5650',
            email: 'simon.andrews@familycapital.co.uk'
        },
        summary: [
            'Simon is a partner at Family Capital, working with individuals and families on what he calls lifestyle financial planning — starting with what people actually want from life, then building the financial plan around it.',
            'He is a qualified discretionary fund manager and works closely with clients on their investment portfolios, pensions, and long-term planning. His approach is built on long relationships and proper conversations — the kind that only happen when trust has been earned over time.'
        ],
        experience: [
            'Simon started his career at Standard Life in 1998, spending fifteen years working across pensions, investment strategy, and business development with financial planning firms across London.',
            'He moved into client-facing financial planning in 2013 at Baigrie Davies, one of London\'s well-regarded independent planning firms. When the business was acquired by abrdn, Simon continued as a senior financial planner, but the pull towards genuine independence and client-first planning led him to Family Capital in 2023.',
            'What drew him to the firm was the model — the autonomy to focus entirely on clients, without the distractions and compromises that come with larger organisations. Simon believes financial planning is about much more than money management. It\'s about understanding what matters to people and helping them feel organised, clear, and confident about what comes next.',
            'He is a Fellow of the Personal Finance Society, a Chartered Financial Planner, a Certified Financial Planner, and a qualified discretionary fund manager.'
        ]
    },
    {
        slug: 'ewa-bancerz',
        name: 'Ewa Bancerz MSc',
        role: 'Senior Developer',
        location: 'Remote',
        photo: '../images/people/Ewa headshot 3.jpg',
        linkedin: 'https://www.linkedin.com/in/ewa-bancerz-b5ba001b0/',
        summary: [
            'Ewa is a senior developer at Family Capital, working across the full technology stack that powers the firm — from client-facing applications to the AI-driven tools that sit behind the scenes.',
            'She holds a Master\'s degree in Artificial Intelligence and Adaptive Systems from the University of Sussex, with a focus on machine learning, natural language processing, and neural networks. That academic depth is what sets her apart — she doesn\'t just use AI tools, she understands the science behind them.'
        ],
        experience: [
            'Ewa joined Family Capital in 2025, bringing a combination of computer science fundamentals and specialist AI expertise. She works in C#, .NET, Blazor, and SQL Server day to day, and integrates Azure AI services — including Azure OpenAI — into the firm\'s platforms.',
            'Family Capital takes the responsible use of AI seriously, and Ewa\'s academic grounding in the science behind it is a big part of that. The firm\'s approach is evidence-based and ethics-led — the technology has to be understood properly before it\'s deployed. From intelligent document processing to client communication tools, Ewa helps shape how AI is used across the business.',
            'Before joining the firm, Ewa worked as a student researcher exploring deep learning techniques for positioning estimation, and completed a consultancy project with Airbus Defence and Space on sustainability in spacecraft manufacturing.',
            'She holds a BSc in Computer Science from the University of Brighton and an MSc in Artificial Intelligence and Adaptive Systems from the University of Sussex.'
        ]
    },
    {
        slug: 'george-boyd-jones',
        name: 'George Boyd-Jones FPFS',
        role: 'Partner',
        location: 'London',
        photo: '../images/people/George Boyd-Jones.jpg',
        linkedin: 'https://www.linkedin.com/in/george-boyd-jones-224189141/',
        office: {
            name: 'Family Capital',
            address: '68 King William Street\nLondon EC4N 7HR',
            phone: '0207 082 5650',
            email: 'george.boyd-jones@familycapital.co.uk'
        },
        summary: [
            'George is a partner at Family Capital, working directly with individuals and families to build financial plans that make sense for their lives — not just their money.',
            'He is a chartered financial planner and qualified discretionary fund manager, with a focus on long-term relationships, clear advice, and helping clients feel genuinely confident about what comes next.'
        ],
        experience: [
            'George started in financial services at Standard Life in 2017 and worked his way up from client support through paraplanning to financial consulting — learning every part of the advice process from the ground up.',
            'During his time at abrdn, he built a reputation for taking the time to properly understand clients before making recommendations. That hands-on progression through every level of the business gives him a practical depth that clients notice — he\'s not just qualified on paper, he\'s done every part of the job.',
            'He joined Family Capital as a partner in 2025 because the model matched the way he wanted to work — personal relationships, genuine independence, and a shared belief in doing things properly. For George, the best part of financial planning has always been the human side: helping people feel secure about their future and supported through life\'s changes.',
            'He is a Fellow of the Personal Finance Society, a Chartered Financial Planner, and a qualified discretionary fund manager.'
        ]
    },
    {
        slug: 'roy-carlton',
        name: 'Roy Carlton MSc',
        role: 'Senior Developer',
        location: 'Remote',
        photo: '../images/people/roy.jpg',
        linkedin: null,
        summary: [
            'Roy is a senior developer at Family Capital with a specialist focus on security, systems resilience, and making sure the technology the firm builds is robust enough to protect the people who rely on it.',
            'He holds a Master\'s degree in Cyber Security and Forensic Information Technology from the University of Portsmouth, alongside a Computer Science degree from Cardiff University. In a world where AI is changing the threat landscape daily, that expertise matters.'
        ],
        experience: [
            'Roy joined Family Capital to bring a security-first mindset to the firm\'s technology. His role spans development and infrastructure, but his particular focus is on reviewing and strengthening the systems that hold client data, process transactions, and power the platforms clients use every day.',
            'With the rapid adoption of AI across financial services, the risks are evolving just as fast. Roy\'s background in cyber security and forensics means the firm isn\'t just building technology — it\'s stress-testing it, questioning it, and making sure it holds up under scrutiny.',
            'Before Family Capital, Roy completed a cyber research internship at Northrop Grumman, one of the world\'s largest defence and security companies, gaining hands-on experience in security research during his undergraduate degree.',
            'He holds an MSc in Cyber Security and Forensic Information Technology from the University of Portsmouth and a BSc in Computer Science from Cardiff University.'
        ]
    },
    {
        slug: 'jo-laker',
        name: 'Jo Laker',
        role: 'Chief Operating Officer',
        location: 'Sussex',
        photo: '../images/people/Jo Laker.jpg',
        linkedin: 'https://www.linkedin.com/in/jo-laker-6400b014/',
        summary: [
            'Jo is the Chief Operating Officer at Family Capital and has worked alongside the team for over seventeen years — longer than anyone else in the firm.',
            'She oversees the operational backbone of the business: compliance, risk, audit, reconciliation, remuneration, and the systems that keep everything running properly. If it needs to be right, Jo makes sure it is.'
        ],
        experience: [
            'Jo\'s career in financial services operations spans nearly two decades. She originally joined as a PA and quickly moved into designing and managing the operational systems behind first Benchmark Capital and then Family Capital — compliance frameworks, anti-money laundering processes, audit procedures, platform reconciliation, and network management.',
            'That breadth of experience is rare. Most people specialise in one area of operations — Jo has built and run all of them. She has a deep working knowledge of Financial Conduct Authority regulation, conduct risk, and the practical reality of keeping a wealth management firm properly governed.',
            'When Benchmark grew to over twenty billion pounds under management, Jo\'s systems were a big part of what held it all together. That same operational rigour now runs through everything Family Capital does.',
            'She was promoted to Chief Operating Officer in 2025, a role that reflects what she\'s been doing in practice for years.'
        ]
    },
    {
        slug: 'richard-martin',
        name: 'Richard Martin BSc',
        role: 'Head of Protection',
        location: 'London',
        photo: '../images/people/Richard Martin.jpg',
        linkedin: null,
        summary: [
            'Richard heads up protection planning at Family Capital, a role he has made his own over the course of a twenty-year association with the firm.',
            'Although a fully qualified financial planner, Richard chose to specialise in protection plans and the associated trust work that sits around them. It\'s a focused discipline, and his clients value having someone who understands it inside out.'
        ],
        experience: [
            'Richard has worked alongside Family Capital and its clients for over twenty years. In that time, he has become the trusted point of contact for protection planning — life cover, critical illness, income protection, and the trust arrangements that make sure policies pay out to the right people in the right way.',
            'Protection is often the part of financial planning that gets overlooked or bolted on as an afterthought. Richard treats it as what it is: the foundation that everything else is built on. His long-standing relationships with clients mean he understands their families, their circumstances, and how their needs have changed over time.',
            'That depth of knowledge and continuity is hard to replicate, and it\'s a big part of why clients trust him with some of the most important decisions they\'ll make.'
        ]
    },
    {
        slug: 'mandy-mugridge',
        name: 'Mandy Mugridge',
        role: 'Head of Lending',
        location: 'Sussex',
        photo: '../images/people/Mandy Mugridge.jpg',
        linkedin: null,
        summary: [
            'Mandy heads up the lending side of Family Capital, working with clients on mortgages and property finance — from straightforward residential purchases through to multi-million pound properties, complex security arrangements, and private bank lending. She has a long association with the firm and understands the lending needs of many of our clients extremely well.',
            'As a qualified mortgage broker, Mandy takes the same whole-of-market, independent approach to lending that the firm takes to financial planning. The lending needs of high net worth individuals are different — complex income structures, multiple properties, and high-value purchases that are often better assessed through private banks and specialist lenders. Mandy understands that landscape and knows how to find the right solution.'
        ],
        experience: [
            'Mandy has been involved with the firm and its people since 1998 — over twenty-five years of experience in helping clients navigate what is often the biggest financial commitment they\'ll make. She has a deep understanding of the needs of high net worth clients and the more complex lending arrangements that come with them. She holds the CeMAP qualification and works across residential mortgages, remortgages, buy-to-let, and specialist lending.',
            'What makes her role valuable within Family Capital is the connection to the wider planning process. A mortgage doesn\'t sit in isolation — it connects to tax planning, protection, estate planning, and cashflow. Having lending expertise inside the firm means clients get advice that fits the bigger picture, not just the best rate on the day.',
            'Mandy also runs her own mortgage solutions business alongside her work with Family Capital, giving her a breadth of market knowledge that benefits the firm\'s clients.'
        ]
    },
    {
        slug: 'aaron-smith',
        name: 'Aaron Smith MSc',
        role: 'Chief Technology Officer',
        location: 'Brighton',
        photo: '../images/people/Aaron Smith.jpg',
        linkedin: 'https://www.linkedin.com/in/aaron-smith-brightware/',
        summary: [
            'Aaron is the Chief Technology Officer at Family Capital, leading the technology strategy across the firm and its parent group, Perpetual Wealth. He has been building financial services software for over two decades.',
            'He oversees the development of everything from the Wealth Portal — the firm\'s client-facing platform — through to the compliance, investment management, and AI systems that run behind the scenes. He also leads the development of Family Capital\'s mobile applications on iOS and Android, and manages the firm\'s relationships with Apple and Google.',
            'Aaron works alongside Ewa and the wider development team to bring AI into the firm\'s core systems in a way that\'s practical, responsible, and genuinely useful. His focus is on building technology that makes the advice process better for clients and advisers alike — not technology for its own sake.'
        ],
        experience: [
            'Aaron has been building software for over two decades. Early in his career, he led the team that built software for the Ministry of Defence\'s Typhoon jet programme — complex, high-security systems where there was no room for error. That experience set the standard for everything that followed.',
            'From that background, Aaron brought a team of developers across to Benchmark Capital and over more than a decade built virtually all of the technology that powered the business. His team designed and developed the Fusion platform, the Enable system, discretionary fund management tools, remuneration systems, and the compliance infrastructure that held the operation together. Every developer on the project worked under Aaron\'s leadership. When Benchmark grew to twenty billion pounds under management, it was his technology running underneath it.',
            'Aaron joined Family Capital in 2021 as CTO, bringing that same depth of experience to the firm\'s technology. He also works across the parent group, Perpetual Wealth. Today, his focus is on integrating AI across the firm\'s platforms — working with Ewa and the development team to build intelligent tools that improve the advice process, automate compliance, and give clients a better experience.',
            'Aaron holds a Master\'s degree in Information Systems. Before technology, he trained as a history teacher — a reminder that the best technologists understand people, not just code.'
        ]
    },
    {
        slug: 'sam-shah',
        name: 'Sam Shah FPFS',
        role: 'Partner',
        location: 'London',
        photo: '../images/people/Sam Shah.jpg',
        linkedin: 'https://www.linkedin.com/in/sameer-shah-cfp-mcsi-apfs-rlp/',
        office: {
            name: 'Family Capital',
            address: '68 King William Street\nLondon EC4N 7HR',
            phone: '0207 082 5650',
            email: 'sam.shah@familycapital.co.uk'
        },
        summary: [
            'Sam is a partner at Family Capital, working with clients at every stage of life — from those building wealth through to retirement planning, inheritance, and leaving a legacy for the people they care about.',
            'He is a chartered financial planner, a qualified discretionary fund manager, and a Registered Life Planner. His approach starts with understanding what people actually want from their lives, then building the financial plan to make it possible.'
        ],
        experience: [
            'Sam has been a financial planner for over fifteen years, working across several well-known firms before joining Family Capital in 2024. His career includes time at Vobis Group, 1825 Financial Planning, and Benchmark — where many of the Family Capital team first worked together.',
            'What sets Sam apart is his focus on life planning. He trained as a Registered Life Planner through the Kinder Institute, which means his conversations with clients go deeper than most — not just what\'s in the portfolio, but what the money is actually for. Whether someone is approaching retirement, navigating a divorce, dealing with an inheritance, or simply trying to work out whether they have enough, Sam helps them find clarity.',
            'Outside of Family Capital, Sam is a strategic adviser to the Better Lives Foundation, a charity working in Sierra Leone. That sense of purpose runs through everything he does.',
            'He holds Chartered Financial Planner and Certified Financial Planner status, is a Member of the Chartered Institute for Securities and Investment, and is a qualified discretionary fund manager.'
        ]
    },
    {
        slug: 'brian-potter',
        name: 'Brian Potter ACSI',
        role: 'Investment Committee',
        location: 'London',
        photo: '../images/people/Brian Potter.jpg',
        linkedin: 'https://www.linkedin.com/in/brian-potter-55114a225/',
        office: {
            name: 'Family Capital',
            address: '68 King William Street\nLondon EC4N 7HR',
            phone: '0207 082 5650',
            email: 'brian.potter@familycapital.co.uk'
        },
        summary: [
            'Brian sits on the Family Capital investment committee, bringing over thirty years of experience in financial services to the oversight of the firm\'s investment strategy and portfolio decisions.',
            'His career spans wealth advice, stockbroking, recruitment, and the management of large adviser teams. He has seen the industry from every angle — and that breadth of perspective is exactly what an investment committee needs.'
        ],
        experience: [
            'Brian\'s career in financial services began in 1991 at Citibank Life, followed by management roles at RSA and RJ Temple. He went on to run his own firm, Throgmorton Private Capital, before moving into wealth advice and stockbroking at Towry.',
            'He then spent nearly a decade as Managing Director of Aspect8 before joining Benchmark Capital, where he became Head of Financial Planning — responsible for a team of around seventy advisers. Managing that many professionals across a business of that scale gave him a rare understanding of what good advice looks like at every level.',
            'At Family Capital, Brian sits on the investment committee as an independent member. His role isn\'t to make the investment decisions — it\'s to challenge them. He\'s there to question the research, push back where needed, and make sure the committee is doing its job properly.',
            'He is an Associate of the Chartered Institute for Securities and Investment.'
        ]
    },
    {
        slug: 'james-wallace',
        name: 'James Wallace FPFS',
        role: 'Partner',
        location: 'Sussex',
        photo: '../images/people/James Wallace.jpg',
        linkedin: 'https://www.linkedin.com/in/jameswallacefinancialplanner/',
        office: {
            name: 'Family Capital',
            address: '68 King William Street\nLondon EC4N 7HR',
            phone: '0207 082 5650',
            email: 'james.wallace@familycapital.co.uk'
        },
        summary: [
            'James is a partner at Family Capital, bringing over twenty years of experience in financial services — most recently from the private banking world, where he worked directly with high net worth individuals and families.',
            'He is a chartered financial planner and qualified discretionary fund manager. His move to Family Capital in 2026 was a deliberate choice — to work independently, with access to the whole market, and to give clients the kind of advice that isn\'t constrained by a restricted product range.'
        ],
        experience: [
            'James spent nearly four years as a Client Director at Handelsbanken Wealth and Asset Management, one of the most respected private banks in the UK. There, he worked with high net worth clients on complex financial planning — investments, estate planning, and the broader wealth management needs that come with significant assets.',
            'Before Handelsbanken, James spent over a decade at HJP, first as an independent financial adviser and then as a chartered financial planner. When HJP became a partner practice of St. James\'s Place, James experienced firsthand the difference between independent and restricted advice — and knew which side he wanted to be on.',
            'At Family Capital, James has the freedom to advise without constraints. He can access the whole market, recommend the best solutions regardless of provider, and build portfolios through the firm\'s discretionary management service. For clients who have come from a private banking environment, that independence — combined with the personal attention of a smaller firm — is exactly what they were missing.',
            'James works with families navigating significant financial milestones, business owners with complex planning needs, and individuals who want proper clarity about their financial future. His approach is straightforward: understand what matters to the client, cut through the complexity, and build a plan that actually works.',
            'He is a Fellow of the Personal Finance Society, a Chartered Financial Planner, a Certified Financial Planner, and a qualified discretionary fund manager. He also holds a BSc in Psychology — which, in a profession built on understanding how people think and feel about money, turns out to be more useful than most financial qualifications.'
        ]
    }
];
