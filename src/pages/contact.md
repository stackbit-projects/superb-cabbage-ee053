---
title: Contact
hide_title: false
sections:
  - type: section_form
    section_id: contact-form
    content: To get in touch please fill the form below.
    form_id: contactForm
    form_action: /thank-you
    form_fields:
      - type: text
        name: name
        label: Name
        default_value: Your name
        is_required: true
      - type: email
        name: email
        label: Email
        default_value: Your email address
        is_required: true
      - type: select
        name: subject
        label: Subject
        default_value: Please select
        options:
          - Error on the site
          - Sponsorship
          - Other
      - type: textarea
        name: message
        label: Message
        default_value: Your message
      - type: checkbox
        name: consent
        label: >-
          I understand that this form is storing my submitted information so I
          can be contacted.
    submit_label: Send Message
template: advanced
---
