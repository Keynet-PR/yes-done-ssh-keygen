import { h } from 'vue'
// Import Lucide Icons
import { 
  ArrowDown, 
  ArrowRight, 
  ArrowUp, 
  CheckCircle, 
  Circle, 
  XCircle, 
  HelpCircle, 
  Clock 
  
} from 'lucide-vue-next'

export const labels = [
  {
    value: 'bug',
    label: 'Bug',
  },
  {
    value: 'feature',
    label: 'Feature',
  },
  {
    value: 'documentation',
    label: 'Documentation',
  },
]

export const statuses = [
  {
    value: 'backlog',
    label: 'Backlog',
    icon: h(HelpCircle),  // Updated with Lucide icon
  },
  {
    value: 'todo',
    label: 'Todo',
    icon: h(Circle),  // Updated with Lucide icon
  },
  {
    value: 'in progress',
    label: 'In Progress',
    icon: h(Clock),  // Updated with Lucide icon
  },
  {
    value: 'done',
    label: 'Done',
    icon: h(CheckCircle),  // Updated with Lucide icon
  },
  {
    value: 'canceled',
    label: 'Canceled',
    icon: h(XCircle),  // Updated with Lucide icon
  },
]

export const priorities = [
  {
    value: 'low',
    label: 'Low',
    icon: h(ArrowDown),  // Updated with Lucide icon
  },
  {
    value: 'medium',
    label: 'Medium',
    icon: h(ArrowRight),  // Updated with Lucide icon
  },
  {
    value: 'high',
    label: 'High',
    icon: h(ArrowUp),  // Updated with Lucide icon
  },
]
