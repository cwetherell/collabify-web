// Simple client-side app for the Collabify demo
// Stores a single "profile" in localStorage and exposes functions

const STORAGE_KEY = 'collabify_profile_v1'

function saveProfile(profile){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
}

function loadProfile(){
  try{return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null}catch(e){return null}
}

function ensureSampleCreators(){
  if(!localStorage.getItem('collabify_creators_v1')){
    const sample = [
      {id:1,name:'Ava Streams',platforms:['Twitch'],status:'looking',bio:'Cozy streamer, loves collabs.'},
      {id:2,name:'PixelPro',platforms:['YouTube'],status:'not_looking',bio:'Let me know for edits collabs.'},
      {id:3,name:'GamerGuy',platforms:['Twitch','YouTube'],status:'looking',bio:'FPS and co-op streams.'}
    ]
    localStorage.setItem('collabify_creators_v1',JSON.stringify(sample))
  }
}

function getCreators(){
  ensureSampleCreators()
  return JSON.parse(localStorage.getItem('collabify_creators_v1')||'[]')
}

// Browse page renderer
function renderCreators(filter){
  const el = document.getElementById('creators')
  if(!el) return
  const creators = getCreators().filter(c=>{
    if(!filter || filter==='all') return true
    if(filter==='looking') return c.status==='looking'
    return true
  })
  el.innerHTML = creators.map(c=>`
    <div class="card">
      <div class="creator">
        <div class="avatar"></div>
        <div style="flex:1">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div>
              <div style="font-weight:600">${c.name}</div>
              <div class="small">${c.platforms.join(' • ')}</div>
            </div>
            <div class="status ${c.status==='looking'?'looking':(c.status==='busy'?'busy':'not')}">${c.status.replace('_',' ')}</div>
          </div>
          <div class="small" style="margin-top:8px">${c.bio}</div>
        </div>
      </div>
    </div>
  `).join('')
}

// Profiles page logic
function initProfilePage(){
  const profile = loadProfile() || {name:'',bio:'',platforms:[],status:'not_looking',schedule:[]}
  document.getElementById('p-name').value = profile.name||''
  document.getElementById('p-bio').value = profile.bio||''
  document.getElementById('p-twitch').value = profile.twitch||''
  document.getElementById('p-youtube').value = profile.youtube||''
  document.getElementById('p-discord').value = profile.discord||''
  document.getElementById('p-status').value = profile.status||'not_looking'
  renderSchedule(profile.schedule||[])

  document.getElementById('save-profile').addEventListener('click', ()=>{
    const p = {
      name:document.getElementById('p-name').value,
      bio:document.getElementById('p-bio').value,
      twitch:document.getElementById('p-twitch').value,
      youtube:document.getElementById('p-youtube').value,
      discord:document.getElementById('p-discord').value,
      status:document.getElementById('p-status').value,
      schedule:profile.schedule||[]
    }
    saveProfile(p)
    alert('Profile saved locally in your browser')
  })

  document.getElementById('add-schedule').addEventListener('click', ()=>{
    const date = document.getElementById('s-date').value
    const title = document.getElementById('s-title').value
    if(!date||!title){alert('Provide title and date'); return}
    profile.schedule = profile.schedule||[]
    profile.schedule.push({title,date})
    saveProfile(profile)
    renderSchedule(profile.schedule)
    document.getElementById('s-date').value=''
    document.getElementById('s-title').value=''
  })
}

function renderSchedule(items){
  const el=document.getElementById('schedule')
  if(!el) return
  if(!items||items.length===0){el.innerHTML='<div class="small">No upcoming collaborations</div>';return}
  el.innerHTML = items.map(i=>`<div class="card small" style="margin-bottom:8px">${i.date} — ${i.title}</div>`).join('')
}

// Init on pages
window.addEventListener('DOMContentLoaded', ()=>{
  const page = document.body.getAttribute('data-page')
  if(page==='browse'){
    renderCreators('all')
    document.getElementById('filter-all').addEventListener('click', ()=>renderCreators('all'))
    document.getElementById('filter-looking').addEventListener('click', ()=>renderCreators('looking'))
  }
  if(page==='profile'){
    initProfilePage()
  }
})
