---
title: Leads
---

# Sessions

* [Create a lead, given a session id](/v1/sessions/#create-a-lead)
* [Retrieve a session](/v1/sessions/#retrieve-a-session)

## Create a lead

    POST api/v1/sessions/session_id/leads

### Parameters
source_id
: _STRING_ The affiliate's ID

source_type
: _STRING_ The type of the source. The possible value is "affiliate"

### Response

<%= headers 200 %>
