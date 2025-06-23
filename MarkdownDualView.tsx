"use client"

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Eye, Code2, BarChart3, Clock, FileIcon } from 'lucide-react'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.min.css'

// Full markdown content matching the original
const markdownExamples = {
  london: {
    content: `# 🇬🇧 London Adventure Guide
*August 2-6, 2024 | 5 Days of British Magic*

---

## 📊 London at a Glance

| Metric | Value | Grade |
|--------|-------|-------|
| 👥 **Population** | 9.6 million | Metropolitan |
| 🏙️ **Area** | 1,572 km² | Massive |
| 🌡️ **August Weather** | 18-23°C | ⭐⭐⭐⭐ |
| 🌍 **Air Quality** | Moderate (6/10) | 🟡 Fair |
| 💰 **Cost of Living** | High | 💷💷💷 |
| 🚇 **Transport** | Excellent | ⭐⭐⭐⭐⭐ |
| 🏛️ **Culture Score** | World-Class | ⭐⭐⭐⭐⭐ |
| 🍺 **Pub Density** | 3,500+ pubs | 🍻🍻🍻🍻🍻 |

---

## 🏙️ Welcome to London

London, the beating heart of Britain, where ancient history meets cutting-edge innovation. From the iconic red double-deckers navigating cobblestone streets to the gleaming skyscrapers of Canary Wharf, this city offers an unparalleled blend of tradition and modernity. With over 1,000 years of history, 170 museums, and some of the world's best theatre, London promises an adventure that will leave you spellbound.

![London Hero](https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=400&fit=crop&auto=format)
*The Thames winds through London's iconic skyline - your adventure awaits*

---

## 🗓️ Trip Overview

**5 Days of Pure London Magic** | *August 2-6, 2024*

| Day | Theme | Highlights | Energy Level |
|-----|-------|------------|-------------|
| **Day 1** | Royal London | Buckingham Palace, Westminster, Thames Cruise | 🔋🔋🔋 |
| **Day 2** | Markets & Culture | Borough Market, Tate Modern, Shakespeare's Globe | 🔋🔋🔋🔋 |
| **Day 3** | Parks & Museums | Hyde Park, British Museum, Covent Garden | 🔋🔋 |
| **Day 4** | Harry Potter Magic | Warner Bros Studio, King's Cross, West End Show | 🔋🔋🔋🔋🔋 |
| **Day 5** | East London Edge | Shoreditch, Brick Lane, Sky Garden, Farewell Dinner | 🔋🔋🔋 |

> 🏠 **Base**: Stylish Covent Garden Apartment | 🚇 **Transport**: Oyster Card + Walking | 💰 **Budget**: £200-250/day per person

---

## ✈️ Heathrow Airport Location

*Heathrow Airport - Your gateway to London adventure (23 miles west of central London)*

**🚇 Transport to City**: Piccadilly Line (50 mins) | Heathrow Express (15 mins) | Taxi (45-90 mins depending on traffic)

---

## 🗓️ Daily Itinerary

### Day 1 (Aug 2) - Royal London
*"God Save the Queen and Pass the Tea"*

![Buckingham Palace](https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&h=300&fit=crop&auto=format)

**Morning (9:00-12:00)**
- ✈️ **09:00** - Land at Heathrow, collect luggage
- 🚇 **10:30** - Piccadilly Line to Covent Garden (50 mins)
- 🏠 **11:30** - Check into apartment, freshen up

**Afternoon (12:00-17:00)**
- 🏰 **12:30** - Walk to Buckingham Palace (15 mins)
- 👑 **13:00** - Watch Changing of the Guard (if scheduled)
- 🌳 **14:00** - Stroll through St. James's Park
- 🏛️ **15:00** - Westminster Abbey & Big Ben photos
- 🛥️ **16:00** - Thames River Cruise to Tower Bridge

**Evening (17:00-22:00)**
- 🍽️ **18:30** - Traditional pub dinner at The George Inn
- 🚶 **20:00** - Evening walk along South Bank
- 🎡 **21:00** - London Eye night ride (pre-booked)

*Experience the Changing of the Guard ceremony at Buckingham Palace*

---

### Day 2 (Aug 3) - Markets & Culture
*"From Shakespeare to Street Art"*

![Borough Market](https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop&auto=format)

**Morning (8:00-12:00)**
- ☕ **08:00** - Coffee and pastries at Monmouth Coffee
- 🥓 **09:00** - Full English breakfast at Borough Market
- 🛍️ **10:00** - Explore Borough Market food stalls
- 🧀 **11:00** - Artisan cheese and wine tasting

**Afternoon (12:00-17:00)**
- 🎨 **12:30** - Tate Modern contemporary art museum
- 🏛️ **14:00** - Walk across Millennium Bridge
- 🎭 **15:00** - Shakespeare's Globe Theatre tour
- 🍺 **16:00** - Craft beer at The Anchor pub

**Evening (17:00-22:00)**
- 🍽️ **18:00** - Dinner at Padella (fresh pasta)
- 🌉 **19:30** - Sunset walk along Thames Path
- 🎪 **20:30** - Street performers at Covent Garden
- 🍸 **21:30** - Cocktails at Sketch (pink room)

*Explore the vibrant Borough Market - London's foodie paradise*

---

### Day 3 (Aug 4) - Parks & Museums
*"Culture and Tranquility"*

![Hyde Park](https://images.unsplash.com/photo-1571069876774-0b1e9a25e5e3?w=600&h=300&fit=crop&auto=format)

**Morning (9:00-13:00)**
- 🌳 **09:00** - Morning jog/walk in Hyde Park
- ☕ **10:00** - Coffee at Serpentine Bar & Kitchen
- 🛶 **10:30** - Pedal boats on Serpentine Lake
- 🦆 **11:30** - Feed ducks and enjoy park atmosphere
- 🌺 **12:00** - Visit Diana Memorial Garden

**Afternoon (13:00-17:00)**
- 🏛️ **13:30** - British Museum (Egyptian & Greek collections)
- 🗿 **15:00** - See the Rosetta Stone & Egyptian mummies
- ☕ **16:00** - Afternoon tea at museum café
- 🚶 **16:30** - Walk through Bloomsbury streets

**Evening (17:00-22:00)**
- 🎭 **17:30** - Covent Garden street performances
- 🍽️ **19:00** - Dinner at Dishoom (Bombay café)
- 🛍️ **20:30** - Evening shopping at Covent Garden
- 🍺 **21:30** - Nightcap at The Lamb & Flag pub

*Discover the treasures of the British Museum - history comes alive*

---

### Day 4 (Aug 5) - Harry Potter Magic
*"The Boy Who Lived Experience"*

![Harry Potter Studio](https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop&auto=format)

**Morning (8:00-14:00)**
- 🚂 **08:00** - Train to Watford Junction
- 🚌 **09:00** - Shuttle bus to Warner Bros Studio
- ⚡ **09:30** - Warner Bros Studio Tour begins
- 🏰 **10:00** - Great Hall, Diagon Alley, Platform 9¾
- 🧙 **12:00** - Butterbeer and studio shop
- 🚌 **13:30** - Return shuttle to Watford Junction

**Afternoon (14:00-18:00)**
- 🚂 **14:30** - Train back to London Euston
- 🛒 **15:30** - King's Cross Station - Platform 9¾ photo
- ☕ **16:00** - Coffee at St. Pancras Renaissance Hotel
- 🏨 **17:00** - Rest at apartment before show

**Evening (18:00-23:00)**
- 🍽️ **18:30** - Pre-theatre dinner at Rules Restaurant
- 🎭 **19:30** - West End Show: "The Lion King"
- 🍸 **22:30** - Post-show drinks in Theatreland
- 🚶 **23:00** - Walk home through illuminated Covent Garden

*Step into the magical world of Harry Potter at Warner Bros Studio Tour*

---

### Day 5 (Aug 6) - East London Edge
*"Hipster Vibes and Sky-High Views"*

![Shoreditch Street Art](https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=300&fit=crop&auto=format)

**Morning (9:00-13:00)**
- 🎨 **09:00** - Shoreditch street art walking tour
- ☕ **10:00** - Artisan coffee at Allpress Espresso
- 🛍️ **10:30** - Vintage shopping on Brick Lane
- 🥯 **11:30** - Famous salt beef bagel at Beigel Bake
- 🍺 **12:00** - Craft beer tasting at Brewdog Shoreditch

**Afternoon (13:00-17:00)**
- 🏢 **13:30** - Sky Garden (book free tickets in advance)
- 🌆 **14:00** - 360° London views from 35th floor
- 🍸 **15:00** - Cocktails with a view at Sky Pod Bar
- 🚶 **16:00** - Walk across London Bridge
- 📸 **16:30** - Photo stop at Tower Bridge

**Evening (17:00-22:00)**
- 🛁 **17:30** - Return to apartment, get ready
- 🍽️ **19:00** - Farewell dinner at Gordon Ramsay's Savoy Grill
- 🥂 **21:00** - Champagne toast at American Bar, Savoy Hotel
- 🌃 **22:00** - Final night walk along the Thames

*Experience London's vibrant street art scene in trendy Shoreditch*

---

## 🍽️ Food & Drinks Guide

### 🍺 Pubs & Bars

| Name | Area | Specialty | Rating | Price | Book |
|------|------|-----------|--------|-------|------|
| **The George Inn** | Borough | Historic galleried inn, traditional ales | ⭐⭐⭐⭐⭐ | £££ | [Reserve](https://www.greeneking-pubs.co.uk/pubs/greater-london/george-inn-southwark/) |
| **The Anchor** | Bankside | Thames views, craft beers | ⭐⭐⭐⭐ | ££ | [Book](https://www.taylor-walker.co.uk/pub/the-anchor-bankside/c2384/) |
| **Sketch** | Mayfair | Pink room, creative cocktails | ⭐⭐⭐⭐⭐ | ££££ | [Reserve](https://sketch.london/) |
| **American Bar** | Strand | Classic cocktails, Savoy elegance | ⭐⭐⭐⭐⭐ | ££££ | [Book](https://www.fairmont.com/savoy-london/dining/american-bar/) |
| **The Lamb & Flag** | Covent Garden | Historic pub, Dickens drank here | ⭐⭐⭐⭐ | ££ | Walk-in only |

### 🍽️ Restaurants

| Name | Cuisine | Area | Highlights | Rating | Price | Book |
|------|---------|------|------------|--------|-------|------|
| **Dishoom** | Indian | Covent Garden | Bombay café atmosphere, black daal | ⭐⭐⭐⭐⭐ | £££ | [Reserve](https://www.dishoom.com/covent-garden/) |
| **Padella** | Italian | Borough Market | Fresh handmade pasta, queue worthy | ⭐⭐⭐⭐⭐ | ££ | Queue only |
| **Rules** | British | Covent Garden | London's oldest restaurant (1798) | ⭐⭐⭐⭐ | ££££ | [Book](https://rules.co.uk/) |
| **Gordon Ramsay Savoy Grill** | British | Strand | Fine dining, celebrity chef | ⭐⭐⭐⭐⭐ | ££££ | [Reserve](https://www.gordonramsayrestaurants.com/savoy-grill/) |
| **Beigel Bake** | Jewish | Brick Lane | 24/7 bagels, salt beef legendary | ⭐⭐⭐⭐ | £ | No reservations |

### ☕ Coffee & Quick Bites

| Name | Specialty | Location | Why Go | Price |
|------|-----------|----------|---------|-------|
| **Monmouth Coffee** | Single-origin coffee | Borough Market | Coffee connoisseur's paradise | ££ |
| **Allpress Espresso** | Artisan coffee | Shoreditch | Hipster coffee culture | ££ |
| **Serpentine Bar** | Park café | Hyde Park | Lakeside views, decent coffee | ££ |

*Ratings: ⭐⭐⭐⭐⭐ = Exceptional | Prices: £ = Budget | ££ = Moderate | £££ = Expensive | ££££ = Luxury*

---

## 🧳 Smart Packing Checklist

### 🌦️ Weather Essentials
- [ ] 🧥 **Waterproof jacket** - London's famous drizzle
- [ ] ☂️ **Compact umbrella** - Essential British accessory
- [ ] 👟 **Comfortable walking shoes** - You'll walk 15,000+ steps daily
- [ ] 🧣 **Light scarf** - Evenings can be cool even in August
- [ ] 👕 **Layers** - T-shirts, light sweater, cardigan
- [ ] 👖 **Smart casual clothes** - For restaurants and theatre

### 📱 Tech & Travel
- [ ] 🔌 **UK plug adapter (Type G)** - Three-pin plugs
- [ ] 🔋 **Portable phone charger** - Long days of sightseeing
- [ ] 🎧 **Headphones** - For tube journeys and audio guides
- [ ] 📷 **Camera** - Or ensure phone has good camera
- [ ] 💾 **Offline maps downloaded** - Google Maps offline for London

### 📄 Documents & Money
- [ ] 📘 **Passport** - Valid for 6+ months
- [ ] 🎫 **Travel insurance** - Medical and trip coverage
- [ ] 💳 **Contactless payment card** - Widely accepted, faster than cash
- [ ] 💷 **Some cash** - For tips, small vendors, emergencies
- [ ] 📱 **Digital copies** - Photos of important documents

### 🎭 Experience Essentials
- [ ] 🎫 **Theatre tickets** - Book West End shows in advance
- [ ] 🎟️ **Attraction tickets** - London Eye, Warner Bros, etc.
- [ ] 🚇 **Oyster Card** - Or contactless for transport
- [ ] 📖 **London guidebook** - Or download apps like Citymapper
- [ ] 🎒 **Day backpack** - For carrying daily essentials

### 💊 Health & Comfort
- [ ] 💊 **Personal medications** - Bring extra
- [ ] 🧴 **Hand sanitizer** - Post-pandemic essential
- [ ] 🩹 **Blister plasters** - For all that walking
- [ ] 🧴 **Travel-size toiletries** - Hotels may have limited amenities

---

*Your London adventure awaits! This guide will help you experience the best of Britain's capital city. From royal palaces to hipster markets, from Harry Potter magic to West End shows, London will capture your heart and leave you planning your next visit before you've even left.*

**Safe travels and enjoy every moment! 🇬🇧✨**`,
    downloadName: 'london-travel-guide.md'
  },
  job: {
    content: `---

"AI Product Manager Job Hunt Playbook" updated: 2025-06-20 location: "Remote or Europe-based preferred" status: "Actively applying"

# 🧠 AI Product Manager Job Hunt Playbook (2025)

This is your **battle-tested playbook** for landing a product role in AI. It includes:

- 🎯 Curated job links
- 🔍 Prep tips
- 🎥 Videos and images from company culture
- ✍️ Cover letter templates
- 📅 Scheduling & follow-up system

Designed for rich renderers *and still readable* as plain Markdown.

---

## 🎯 Primary Goals

- 🔎 Discover & track 10+ target AI companies
- ✍️ Submit 5 high-quality applications/week
- 💬 Engage with 3 PMs or designers from target orgs
- 🛠️ Polish AI portfolio with examples, dashboards, agent UI

---

## 🔥 Top AI Product Roles (with links + prep)

### 🧬 Anthropic — *PM, Claude Platform*

🔗 [Apply Now](https://www.anthropic.com/careers)

**Prep Tips:**

- Review: [Anthropic's Core Views on Safety](https://www.anthropic.com/index/core-views)
- Read: Interviews with Dario Amodei (CEO)
- Highlight agent-related work (especially if involving context limits or memory)

---

### 🛠️ Dust.tt — *AI UX PM*

🔗 [Apply Now](https://dust.tt/jobs)

**Prep Tips:**

- Explore: [Product Docs](https://docs.dust.tt/)
- Be ready to discuss agent orchestration, prompt chains, and user permissions
- Talk about design decisions involving uncertainty and fallback

🎥 [Watch CEO on Building AI UX (YouTube)](https://www.youtube.com/watch?v=dummy)

---

### 🧑‍💻 OpenAI — *PM, Developer Tools*

🔗 [Apply Now](https://openai.com/careers)

**Prep Tips:**

- Read [OpenAI Dev Day Highlights](https://openai.com/blog/devday)
- Know the plugin/Actions ecosystem
- Show system-thinking in your portfolio

🧵 [Follow on Twitter](https://twitter.com/openai)

---

## 🛠️ Portfolio Preparation Checklist

| Task                            | Status         |
| ------------------------------- | -------------- |
| Add agent dashboard screenshots | ✅ Done         |
| Record 60s product explainer    | 🟡 In Progress |
| Update resume with AI metrics   | ✅ Done         |
| Publish post on prompt UX       | ❌ To Do        |

---

## 📸 Portfolio Snapshot

*A live dashboard for managing multi-agent prompts and memory.*

*A podcast about designing UX for LLM-driven products.*

---

## 🧑‍💼 Smart Cover Letter Prompt

\`\`\`prompt
"As a product leader focused on LLM-based systems, I thrive on designing tools that help users control and trust autonomous agents. Your mission resonates deeply with me..."
\`\`\`

> Add 1 sentence tailored to each org's mission or product vision.

---

## 📅 Application Tracker

| Date   | Company   | Status     | Follow-Up Date | Notes                         |
| ------ | --------- | ---------- | -------------- | ----------------------------- |
| Jun 18 | OpenAI    | Applied    | Jun 24         | Custom cover sent             |
| Jun 20 | Dust.tt   | Intro Call | Jun 22         | Interview with VP Product     |
| Jun 22 | Anthropic | Saved      | Jun 25         | Waiting to polish video intro |

---

## 📥 Weekly Submission Template

\`\`\`markdown
- [ ] Job Title:
- [ ] Link:
- [ ] Resume sent:
- [ ] Cover letter customized:
- [ ] Portfolio match:
- [ ] Interview status:
\`\`\`

Use this template each Monday to kick off your week.

---

## 🎬 Bonus Value Adds

-

---

## 🧠 Reminder

This playbook is **your personal operating system** for job hunting in the AI PM space. Use it as your:

- Planner
- Tracker
- Launchpad

And refresh weekly to keep the momentum high.

---

Created with ☕, 🎯, and a healthy obsession for agent UX — June 2025`,
    downloadName: 'ai-pm-job-hunt.md'
  }
}

interface MarkdownDualViewProps {
  className?: string
}

export default function MarkdownDualView({ className = "" }: MarkdownDualViewProps) {
  const [currentMarkdown, setCurrentMarkdown] = useState('')
  const [currentDownloadName, setCurrentDownloadName] = useState('london-travel-guide.md')
  const [isRenderedView, setIsRenderedView] = useState(false)
  const [selectedExample, setSelectedExample] = useState('london')
  const [stats, setStats] = useState({
    words: 0,
    chars: 0,
    lines: 0,
    readTime: 0,
    headings: 0
  })
  const [isResizing, setIsResizing] = useState(false)
  const [leftPaneWidth, setLeftPaneWidth] = useState(50)
  const resizeHandleRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const updateStats = useCallback((text: string) => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0
    const chars = text.length
    const lines = text.split('\n').length
    const readingTime = Math.max(1, Math.ceil(words / 200))
    
    // Count headings in markdown
    const headingMatches = text.match(/^#{1,6}\s/gm) || []
    const headings = headingMatches.length
    
    setStats({ words, chars, lines, readTime: readingTime, headings })
  }, [])

  const renderMarkdown = (markdown: string) => {
    if (!markdown) return ''
    
    try {
      // Configure marked with syntax highlighting
      marked.setOptions({
        breaks: true,
        gfm: true
      })

      // Convert YouTube links to embedded videos
      let processedMarkdown = markdown.replace(
        /\[([^\]]+)\]\((https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([^&\s]+))\)/g,
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/$3" frameborder="0" allowfullscreen></iframe>'
      )
      
      processedMarkdown = processedMarkdown.replace(
        /https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([^&\s]+)/g,
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe>'
      )

      return marked(processedMarkdown)
    } catch (error) {
      console.error('Markdown rendering error:', error)
      return '<p>Error rendering markdown</p>'
    }
  }

  // Custom renderer for right pane with button links and hover effects
  const renderCustomMarkdown = (markdown: string) => {
    if (!markdown) return ''
    
    try {
      // Configure marked with custom renderer
      const renderer = new marked.Renderer()
      
      // Custom link renderer that creates React buttons
      renderer.link = (href: string, title: string, text: string) => {
        return `<button 
          onclick="window.open('${href}', '_blank')" 
          class="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition-colors duration-200 shadow-sm hover:shadow-md"
          style="background-color: #7C3AED;"
          onmouseover="this.style.backgroundColor='#8B5CF6'"
          onmouseout="this.style.backgroundColor='#7C3AED'"
          title="${title || ''}"
        >
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
          ${text}
        </button>`
      }
      
      // Custom table renderer with hover effects
      renderer.table = (header: string, body: string) => {
        return `<div class="overflow-x-auto">
          <table class="w-full border-collapse border border-slate-200 rounded-lg overflow-hidden shadow-sm">
            <thead class="bg-slate-50">
              ${header}
            </thead>
            <tbody class="divide-y divide-slate-200">
              ${body}
            </tbody>
          </table>
        </div>`
      }
      
      renderer.tablerow = (content: string) => {
        return `<tr class="hover:bg-slate-50 transition-colors duration-200 cursor-pointer group">${content}</tr>`
      }
      
      renderer.tablecell = (content: string, flags: { header: boolean }) => {
        const tag = flags.header ? 'th' : 'td'
        // For header cells, set background to #F5F3FF via inline style
        const className = flags.header 
          ? 'px-4 py-3 text-left text-sm font-semibold text-slate-700 border-b border-slate-200'
          : 'px-4 py-3 text-left text-sm text-slate-600 border-b border-slate-100 group-hover:bg-slate-50 transition-colors duration-200'
        const style = flags.header ? 'background-color: #F5F3FF;' : ''
        return `<${tag} class="${className}"${style ? ` style=\"${style}\"` : ''}>${content}</${tag}>`
      }

      marked.setOptions({
        renderer,
        breaks: true,
        gfm: true
      })

      // Convert YouTube links to embedded videos
      let processedMarkdown = markdown.replace(
        /\[([^\]]+)\]\((https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([^&\s]+))\)/g,
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/$3" frameborder="0" allowfullscreen></iframe>'
      )
      
      processedMarkdown = processedMarkdown.replace(
        /https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([^&\s]+)/g,
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe>'
      )

      return marked(processedMarkdown)
    } catch (error) {
      console.error('Custom markdown rendering error:', error)
      return '<p>Error rendering markdown</p>'
    }
  }

  const updateViews = useCallback((markdownText: string) => {
    setCurrentMarkdown(markdownText)
    updateStats(markdownText)
  }, [updateStats])

  const handleExampleChange = (value: string) => {
    setSelectedExample(value)
    const selectedMd = markdownExamples[value as keyof typeof markdownExamples]
    setCurrentDownloadName(selectedMd.downloadName)
    updateViews(selectedMd.content)
  }

  const downloadMarkdown = () => {
    if (!currentMarkdown) {
      alert("No content to download!")
      return
    }
    const blob = new Blob([currentMarkdown], { type: "text/markdown" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = currentDownloadName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const downloadPDF = async () => {
    // This would require additional PDF generation library
    // For now, just show an alert
    alert("PDF download would be implemented with a library like jsPDF or Puppeteer")
  }

  // Resize functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsResizing(true)
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
    e.preventDefault()
  }

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizing || !containerRef.current) return
    
    const containerRect = containerRef.current.getBoundingClientRect()
    const mouseX = e.clientX - containerRect.left
    const containerWidth = containerRect.width
    const handleWidth = 8 // Width of resize handle
    
    // Calculate percentages
    const leftWidth = (mouseX / containerWidth) * 100
    const rightWidth = 100 - leftWidth - (handleWidth / containerWidth * 100)
    
    // Set minimum widths (20% each)
    if (leftWidth >= 20 && rightWidth >= 20) {
      setLeftPaneWidth(leftWidth)
    }
  }, [isResizing])

  const handleMouseUp = useCallback(() => {
    if (isResizing) {
      setIsResizing(false)
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }
  }, [isResizing])

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove, handleMouseUp])

  useEffect(() => {
    // Initialize with default content
    const defaultContent = markdownExamples.london
    setCurrentDownloadName(defaultContent.downloadName)
    updateViews(defaultContent.content)
  }, [updateViews])

  return (
    <div className={`min-h-screen bg-slate-50 p-4 ${className}`}>
      {/* Header */}
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-2xl font-bold text-purple-600 flex items-center gap-2">
              <FileText className="h-6 w-6" />
              Markdown Dual View
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <Badge variant="secondary" className="flex items-center gap-1">
                <BarChart3 className="h-3 w-3" />
                {stats.words} words
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <FileIcon className="h-3 w-3" />
                {stats.chars} chars
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {stats.readTime} min read
              </Badge>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Main Content with Resizable Panes */}
      <div 
        ref={containerRef}
        className="flex gap-0 h-[calc(100vh-200px)]"
      >
        {/* Left Pane */}
        <div 
          className="border border-slate-200 rounded-xl bg-white overflow-hidden flex flex-col shadow-sm"
          style={{ flex: `0 0 ${leftPaneWidth}%` }}
        >
          <div className="p-3 bg-slate-100 border-b border-slate-200 font-semibold flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Label htmlFor="view-toggle" className="text-sm font-medium">
                Raw
              </Label>
              <Switch
                id="view-toggle"
                checked={isRenderedView}
                onCheckedChange={setIsRenderedView}
              />
              <Label htmlFor="view-toggle" className="text-sm font-medium">
                Rendered
              </Label>
            </div>
            <Badge variant="outline" className="flex items-center gap-1">
              <FileIcon className="h-3 w-3" />
              {stats.lines} lines
            </Badge>
          </div>
          <div className="flex-1 overflow-auto">
            {isRenderedView ? (
              <div 
                className="prose prose-sm max-w-none p-6 bg-white"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(currentMarkdown) }}
              />
            ) : (
              <pre className="p-6 text-sm font-mono whitespace-pre-wrap bg-white h-full overflow-auto">
                {currentMarkdown || '🔄 Load a markdown file or select an example to get started...'}
              </pre>
            )}
          </div>
        </div>

        {/* Resize Handle */}
        <div
          ref={resizeHandleRef}
          className={`w-2 bg-slate-200 cursor-col-resize relative transition-colors duration-200 flex-shrink-0 ${
            isResizing ? 'bg-purple-500' : 'hover:bg-purple-400'
          }`}
          onMouseDown={handleMouseDown}
        >
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded transition-all duration-200 ${
            isResizing ? 'h-12' : 'hover:h-10'
          }`} />
        </div>

        {/* Right Pane */}
        <div 
          className="border border-slate-200 rounded-xl bg-white overflow-hidden flex flex-col shadow-sm"
          style={{ flex: `0 0 ${100 - leftPaneWidth - 2}%` }}
        >
          <div className="p-3 bg-slate-100 border-b border-slate-200 font-semibold flex justify-between items-center">
            <Select value={selectedExample} onValueChange={handleExampleChange}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Select example" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="london">Plan a trip to London</SelectItem>
                <SelectItem value="job">Find a AI/ML Job</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                {stats.headings} headings
              </Badge>
              <Button
                size="sm"
                variant="outline"
                onClick={downloadPDF}
                className="flex items-center gap-1"
              >
                <Download className="h-3 w-3" />
                PDF
              </Button>
              <Button
                size="sm"
                onClick={downloadMarkdown}
                className="flex items-center gap-1 bg-green-600 hover:bg-green-700"
              >
                <Download className="h-3 w-3" />
                MD
              </Button>
            </div>
          </div>
          <div className="flex-1 overflow-auto">
            <div 
              className="prose prose-sm max-w-none p-6 bg-white mx-auto right-pane"
              style={{ maxWidth: '740px' }}
              dangerouslySetInnerHTML={{ __html: renderCustomMarkdown(currentMarkdown) }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-markdown {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.58;
          color: #1a1a1a;
        }
        
        .custom-markdown h1 {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 2rem 0 1.5rem;
          color: #1a1a1a;
          letter-spacing: -0.02em;
        }
        
        .custom-markdown h2 {
          font-size: 1.75rem;
          font-weight: 600;
          line-height: 1.3;
          margin: 2.5rem 0 1rem;
          color: #1a1a1a;
          letter-spacing: -0.01em;
        }
        
        .custom-markdown h3 {
          font-size: 1.375rem;
          font-weight: 600;
          line-height: 1.4;
          margin: 2rem 0 0.75rem;
          color: #1a1a1a;
        }
        
        .custom-markdown p {
          font-size: 1.125rem;
          line-height: 1.58;
          margin: 1.5rem 0;
          color: #1a1a1a;
        }
        
        .custom-markdown blockquote {
          border-left: 3px solid #e5e7eb;
          padding: 1rem 0 1rem 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #6b7280;
          background: none;
        }
        
        .custom-markdown code {
          background: #f3f4f6;
          padding: 0.2em 0.4em;
          border-radius: 0.25rem;
          font-size: 0.875em;
          font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
          color: #1f2937;
        }
        
        .custom-markdown pre {
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 2rem 0;
          padding: 1.5rem;
        }
        
        .custom-markdown pre code {
          background: none;
          padding: 0;
          font-size: 0.875rem;
          line-height: 1.5;
        }
        
        .custom-markdown table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .custom-markdown th,
        .custom-markdown td {
          padding: 1rem;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
          font-size: 0.95rem;
          line-height: 1.4;
        }
        
        .custom-markdown th {
          background: #f5f3ff;
          font-weight: 600;
          color: #374151;
        }
        
        .custom-markdown td {
          color: #1f2937;
        }
        
        .custom-markdown a {
          color: #3b82f6;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease;
        }
        
        .custom-markdown a:hover {
          border-bottom-color: #7c3aed;
        }
        
        .custom-markdown img {
          width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 2rem 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .custom-markdown hr {
          border: none;
          border-top: 1px solid #e5e7eb;
          margin: 3rem 0;
        }

        /* Right pane specific styles for hover effects and buttons */
        .right-pane table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .right-pane table tr {
          transition: background-color 0.2s ease;
        }
        
        .right-pane table tr:hover {
          background-color: #f8fafc;
        }
        
        .right-pane table th,
        .right-pane table td {
          padding: 1rem;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
          font-size: 0.95rem;
          line-height: 1.4;
        }
        
        .right-pane table th {
          background: #f5f3ff;
          font-weight: 600;
          color: #374151;
        }
        
        .right-pane table td {
          color: #1f2937;
        }
        
        .right-pane button {
          font-family: inherit;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.375rem 0.75rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: white;
          background-color: #7C3AED;
          border-radius: 0.375rem;
          transition: all 0.2s ease;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }
        
        .right-pane button:hover {
          background-color: #8B5CF6;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform: translateY(-1px);
        }
        
        .right-pane button:active {
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
} 