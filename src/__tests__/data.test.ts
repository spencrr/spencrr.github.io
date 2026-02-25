import { describe, it, expect } from 'vitest'
import courses, { sorts } from '@/data/courses'
import links from '@/data/links'
import projects from '@/data/projects'

describe('courses data', () => {
  it('contains courses', () => {
    expect(courses.length).toBeGreaterThan(0)
  })

  it('each course has required fields', () => {
    for (const course of courses) {
      expect(course.title).toBeTruthy()
      expect(course.institute).toBeTruthy()
      expect(course.subject).toBeTruthy()
      expect(course.number).toBeTruthy()
      expect(course.description).toBeTruthy()
      expect(course.relevancy.date).toBeInstanceOf(Date)
      expect(course.relevancy.display).toBeTruthy()
    }
  })

  it('sorts produce valid orderings', () => {
    for (const sort of sorts) {
      expect(sort.display).toBeTruthy()
      const sorted = [...courses].sort(sort.compareTo)
      expect(sorted.length).toBe(courses.length)
    }
  })
})

describe('links data', () => {
  it('contains links', () => {
    expect(links.length).toBeGreaterThan(0)
  })

  it('each link has required fields', () => {
    for (const link of links) {
      expect(link.title).toBeTruthy()
      expect(link.src).toBeTruthy()
      expect(link.href).toBeTruthy()
    }
  })
})

describe('projects data', () => {
  it('returns projects when called with config', () => {
    const result = projects({
      getAnchorTag: (text, href) => `<a href="${href}">${text}</a>`,
    })
    expect(result.length).toBeGreaterThan(0)
  })

  it('each project has required fields', () => {
    const result = projects({
      getAnchorTag: (text, href) => `<a href="${href}">${text}</a>`,
    })
    for (const project of result) {
      expect(project.title).toBeTruthy()
      expect(project.subtitle).toBeTruthy()
      expect(project.href).toBeTruthy()
      expect(['img', 'vid']).toContain(project.media)
      expect(project.src).toBeTruthy()
    }
  })
})
