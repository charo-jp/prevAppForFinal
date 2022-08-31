import React from "react";
import {Component} from "react";
import './App.css';

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            projectTitle: "",
            startDate: "",
            endDate: "",
            funder: "",
            applicantName: "",
            school: "",
            applicantEmail: "",
            applicantTelNo: "",
            role: "",
            signDate: "",
            confirmation: { checked: false },
            q4a1check: { checked: false },
            q4a1text: "",
            q4a2check: { checked: false },
            q4a2text: "",
            q4a3check: { checked: false },
            q4a3text: "",
            q4a4check: { checked: false },
            q4a4text: "",
            q4a5check: { checked: false },
            q4a5text: "",
            q4a6check: { checked: false },
            q4a6text: "",
            q4a7check: { checked: false },
            q4a7text: "",
            q4a8check: { checked: false },
            q4a8text: "",
            q4a9check: { checked: false },
            q4a9text: "",
            q4b1check: { checked: false },
            q4b1text: "",
            q4b2check: { checked: false },
            q4b2text: "",
            q4b3check: { checked: false },
            q4b3text: "",
            q4b4check: { checked: false },
            q4b4text: "",
            q4b5check: { checked: false },
            q4b5text: "",
            q4b6check: { checked: false },
            q4b6text: "",
            q4b7check: { checked: false },
            q4b7text: "",
            q4b8check: { checked: false },
            q4b8text: "",
            q4b9check: { checked: false },
            q4b9text: "",
            q4b10check: { checked: false },
            q4b10text: "",
            q4b11check: { checked: false },
            q4b11text: "",
            q4b12check: { checked: false },
            q4b12text: "",
            q4b13check: { checked: false },
            q4b13text: "",
            q4b14check: { checked: false },
            q4b14text: "",
            q4b15check: { checked: false },
            q4b15text: "",
            q4b16check: { checked: false },
            q4b16text: "",
            q4b17check: { checked: false },
            q4b17text: "",
            q4b18check: { checked: false },
            q4b18text: "",
            q4b19check: { checked: false },
            q4b19text: "",
            q4c1check: { checked: false },
            q4c1text: "",
            q4d1check: { checked: false },
            q4d1text: "",
        }
    }
    // checkbox changes
    flipconfirmation() { this.setState({ confirmation: !this.state.confirmation }); }
    flipq4a1check() { this.setState({ q4a1check: !this.state.q4a1check }); }
    flipq4a2check() { this.setState({ q4a2check: !this.state.q4a2check }); }
    flipq4a3check() { this.setState({ q4a3check: !this.state.q4a3check }); }
    flipq4a4check() { this.setState({ q4a4check: !this.state.q4a4check }); }
    flipq4a5check() { this.setState({ q4a5check: !this.state.q4a5check }); }
    flipq4a6check() { this.setState({ q4a6check: !this.state.q4a6check }); }
    flipq4a7check() { this.setState({ q4a7check: !this.state.q4a7check }); }
    flipq4a8check() { this.setState({ q4a8check: !this.state.q4a8check }); }
    flipq4a9check() { this.setState({ q4a9check: !this.state.q4a9check }); }
    flipq4b1check() { this.setState({ q4b1check: !this.state.q4b1check }); }
    flipq4b2check() { this.setState({ q4b2check: !this.state.q4b2check }); }
    flipq4b3check() { this.setState({ q4b3check: !this.state.q4b3check }); }
    flipq4b4check() { this.setState({ q4b4check: !this.state.q4b4check }); }
    flipq4b5check() { this.setState({ q4b5check: !this.state.q4b5check }); }
    flipq4b6check() { this.setState({ q4b6check: !this.state.q4b6check }); }
    flipq4b7check() { this.setState({ q4b7check: !this.state.q4b7check }); }
    flipq4b8check() { this.setState({ q4b8check: !this.state.q4b8check }); }
    flipq4b9check() { this.setState({ q4b9check: !this.state.q4b9check }); }
    flipq4b10check() { this.setState({ q4b10check: !this.state.q4b10check }); }
    flipq4b11check() { this.setState({ q4b11check: !this.state.q4b11check }); }
    flipq4b12check() { this.setState({ q4b12check: !this.state.q4b12check }); }
    flipq4b13check() { this.setState({ q4b13check: !this.state.q4b13check }); }
    flipq4b14check() { this.setState({ q4b14check: !this.state.q4b14check }); }
    flipq4b15check() { this.setState({ q4b15check: !this.state.q4b15check }); }
    flipq4b16check() { this.setState({ q4b16check: !this.state.q4b16check }); }
    flipq4b17check() { this.setState({ q4b17check: !this.state.q4b17check }); }
    flipq4b18check() { this.setState({ q4b18check: !this.state.q4b18check }); }
    flipq4b19check() { this.setState({ q4b19check: !this.state.q4b19check }); }
    flipq4c1check() { this.setState({ q4c1check: !this.state.q4c1check }); }
    flipq4d1check() { this.setState({ q4d1check: !this.state.q4d1check }); }


    // text box changes
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    // submitHandler = e => {
    //     e.preventDefault()
    //     console.log(this.state)
    //     Axios
    //         .post('https://jsonplaceholder.typicode.com/posts', this.state)
    //         .then(response => {
    //             console.log(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    render() {
        const {
            projectTitle,
            startDate,
            endDate,
            funder,
            applicantName,
            school,
            applicantEmail,
            applicantTelNo,
            role,
            signDate,
            q4a1text,
            q4a2text,
            q4a3text,
            q4a4text,
            q4a5text,
            q4a6text,
            q4a7text,
            q4a8text,
            q4a9text,
            q4b1text,
            q4b2text,
            q4b3text,
            q4b4text,
            q4b5text,
            q4b6text,
            q4b7text,
            q4b8text,
            q4b9text,
            q4b10text,
            q4b11text,
            q4b12text,
            q4b13text,
            q4b14text,
            q4b15text,
            q4b16text,
            q4b17text,
            q4b18text,
            q4b19text,
            q4c1text,
            q4d1text,
        } = this.state
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <div>

                        <h1> Ethics Checklist </h1>
                        A checklist should be completed for every research project in order to identify whether a full application for ethics approval needs to be submitted.  The chief investigator or, where the chief investigator is a student, the supervisor, is responsible for exercising appropriate professional judgement in this review. This checklist must be completed before potential participants are approached to take part in any research.

                        <h2> Section 1 : Project Details </h2>
                        Project Title  <input onChange={this.changeHandler} type="text" value={projectTitle} name="projectTitle" id="projectTitle" placeholder="Project Title" required /> <br />
                        Planned Start Date <input onChange={this.changeHandler} type="date" min="2020-01-01" max="2040-01-01" value={startDate} name="startDate" id="startDate" required /> <br />
                        Planned End Date  <input onChange={this.changeHandler} type="date" min={startDate} max="2040-01-01" value={endDate} name="endDate" id="endDate" required /> <br />
                        Funder  <input onChange={this.changeHandler} type="text" name="funder" id="funder" value={funder} placeholder="Funder (if applicable)" /> <br />

                        <h2> Section 2 : Applicant Details </h2>
                        Applicant Name <input onChange={this.changeHandler} type="text" value={applicantName} name="applicantName" id="applicantName" placeholder="name" required /> <br />
                        School / Department <input onChange={this.changeHandler} type="text" value={school} name="school" id="school" placeholder="Enter your School or Dept" required /> <br />
                        Email <input onChange={this.changeHandler} type="email" value={applicantEmail} name="applicantEmail" id="applicantEmail" placeholder="enter your UKC email" required /> <br />
                        Telephone Number <input onChange={this.changeHandler} type="text" value={applicantTelNo} name="applicantTelNo" id="applicantTelNo" /> <br />
                    </div>

                    <div style={{ padding: 50 }}>
                        <fieldset>
                            <legend>Select which role best suits your application</legend>
                            <input type="radio" name="role" id='role-1' value="undergraduate" onChange={this.changeHandler} checked={role === 'undergraduate'} /> <label htmlFor="role-1">Undergraduate</label>
                            <input type="radio" name="role" id='role-2' value="taught-postgraduate" onChange={this.changeHandler} checked={role === 'taught-postgraduate'} /> <label htmlFor="role-2">Taught Postgraduate</label>
                            <input type="radio" name="role" id='role-3' value="research-postgraduate" onChange={this.changeHandler} checked={role === 'research-postgraduate'} /> <label htmlFor="role-3">Research Postgraduate</label>
                            <input type="radio" name="role" id='role-4' value="staff" onChange={this.changeHandler} checked={role === 'staff'} /> <label htmlFor="role-4">Staff</label>
                        </fieldset>
                        <br />
                    </div>
                    <div>
                        <h2> Section 3 : Declaration and Signatures </h2>
                        Please note that as Chief Investigator it is your responsibility to follow, and to ensure that all researchers involved with your project follow, accepted ethical practice and appropriate professional ethical guidelines in the conduct of your study.  You must take all reasonable steps to protect the dignity, rights, safety and well-being of participants.  This includes providing participants with appropriate information sheets, ensuring informed consent and ensuring confidentiality in the storage and use of data.  In signing this form you are confirming this.
                        <br /> <br />
                        Signed: <input onChange={this.changeHandler} type="text" value={applicantName} />  {' '}
                        Date:  <input onChange={this.changeHandler} type="date" min="2020-01-01" max="2040-01-01" value={signDate} name="signDate" id="signDate" required />  {' '}
                        Confirm : <input onChange={this.flipconfirmation.bind(this)} checked={this.state.confirmation} type="checkbox" name="confirmation" id="confirmation" required /> {' '}
                        <br /> <br />
                        Any significant change in the question, design or conduct over the course of the research should be notified to the REAG Chair and may require a new application for ethics review.
                        <br /> <br />
                    </div>
                    <div>
                        <h2> Section 4 : Research Checklist </h2>
                        <br />
                        Research that may need to be reviewed by an NHS Research Ethics Committee, the Social Care Research Ethics Committee or other external ethics committee .
                        <br /> <br />
                        If any answers are ticked 'yes', please give details in the field below the tick box.
                        <br />
                        <h3>Research that may need to be reviewed by an NHS Research Ethics Committee, the Social Care Research Ethics Committee (SCREC) or other external ethics committee </h3>
                        <br />
                        <input onChange={this.flipq4a1check.bind(this)} checked={this.state.q4a1check} type="checkbox" name="q4a1check" id="q4a1check" /> Will the study involve recruitment of patients through the NHS or the use of NHS patient data or samples?
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4a1text" id="q4a1text" value={q4a1text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4a2check.bind(this)} checked={this.state.q4a2check} type="checkbox" name="q4a2check" id="q4a2check" /> Will the study involve the collection of tissue or other biological samples (including blood, saliva, urine, etc.) from participants or the use of existing samples?
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4a2text" id="q4a2text" value={q4a2text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4a3check.bind(this)} checked={this.state.q4a3check} type="checkbox" name="q4a3check" id="q4a3check" /> Will the study involve participants, or their data, from adult social care, including home care, or residents from a residential or nursing care home?
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4a3text" id="q4a3text" value={q4a3text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4a4check.bind(this)} checked={this.state.q4a4check} type="checkbox" name="q4a4check" id="q4a4check" /> Will the study involve research participants identified because of their status as relatives or carers of past or present users of these services?
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4a4text" id="q4a4text" value={q4a4text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4a5check.bind(this)} checked={this.state.q4a5check} type="checkbox" name="q4a5check" id="q4a5check" /> Does the study involve participants aged 16 or over who are unable to give informed consent? (e.g. people with certain learning disabilities or dementia)
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4a5text" id="q4a5text" value={q4a5text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4a6check.bind(this)} checked={this.state.q4a6check} type="checkbox" name="q4a6check" id="q4a6check" /> Is the research a social care study funded by the Department of Health?
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4a6text" id="q4a6text" value={q4a6text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4a7check.bind(this)} checked={this.state.q4a7check} type="checkbox" name="q4a7check" id="q4a7check" /> Is the research a health-related study involving prisoners?
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4a7text" id="q4a7text" value={q4a7text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4a8check.bind(this)} checked={this.state.q4a8check} type="checkbox" name="q4a8check" id="q4a8check" /> Is the research a clinical investigation of a non-CE Marked medical device, or a medical device which has been modified or is being used outside its CE Mark intended purpose, conducted by or with the support of the manufacturer or another commercial company to provide data for CE marking purposes? (a CE mark signifies compliance with European safety standards)
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4a8text" id="q4a8text" value={q4a8text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4a9check.bind(this)} checked={this.state.q4a9check} type="checkbox" name="q4a9check" id="q4a9check" /> Is the research a clinical trial of an investigational medicinal product or a medical device?
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4a9text" id="q4a9text" value={q4a9text} placeholder="Please give details" />
                        <br /> <br />
                    </div>
                    <div>
                        <h3>Research that may need full review by the Central REAG </h3>
                        <br />
                        <input onChange={this.flipq4b1check.bind(this)} checked={this.state.q4b1check} type="checkbox" name="q4b1check" id="q4b1check" /> Does the research involve other vulnerable groups: children; those with cognitive impairment?
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4b1text" id="q4b1text" value={q4b1text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4b2check.bind(this)} checked={this.state.q4b2check} type="checkbox" name="q4b2check" id="q4b2check" /> Is the research to be conducted in such a way that the relationship between participant and researcher is unequal (e.g. a subject may feel under pressure to participate in order to avoid damaging a relationship with the researcher)?
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4b2text" id="q4b2text" value={q4b2text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4b3check.bind(this)} checked={this.state.q4b3check} type="checkbox" name="q4b3check" id="q4b3check" /> Does the project involve the collection of material that could be considered of a sensitive, personal, biographical, medical, psychological, social or physiological nature?
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4b3text" id="q4b3text" value={q4b3text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4b4check.bind(this)} checked={this.state.q4b4check} type="checkbox" name="q4b4check" id="q4b4check" /> Will the study require the cooperation of a gatekeeper for initial access to the groups or individuals to be recruited?  (e.g. students at school; members of a self-help group?)
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4b4text" id="q4b4text" value={q4b4text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4b5check.bind(this)} checked={this.state.q4b5check} type="checkbox" name="q4b5check" id="q4b5check" /> Will it be necessary for participants to take part in the study without their knowledge and consent at the time? (e.g. covert observation of people in non-public places?)
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4b5text" id="q4b5text" value={q4b5text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4b6check.bind(this)} checked={this.state.q4b6check} type="checkbox" name="q4b6check" id="q4b6check" /> Will the study involve discussion of sensitive topics (e.g. sexual activity; drug use; criminal activity?)
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4b6text" id="q4b6text" value={q4b6text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4b7check.bind(this)} checked={this.state.q4b7check} type="checkbox" name="q4b7check" id="q4b7check" /> Are drugs, placebos or other substances (e.g. food substances, vitamins) to be administered to the study participants or will the study involve invasive, intrusive or potentially harmful procedures of any kind?
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4b7text" id="q4b7text" value={q4b7text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4b8check.bind(this)} checked={this.state.q4b8check} type="checkbox" name="q4b8check" id="q4b8check" /> Is pain or more than mild discomfort likely to result from the study?
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4b8text" id="q4b8text" value={q4b8text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4b9check.bind(this)} checked={this.state.q4b9check} type="checkbox" name="q4b9check" id="q4b9check" /> Could the study induce psychological stress or anxiety or cause harm or negative consequences beyond the risks encountered in normal life?
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4b9text" id="q4b9text" value={q4b9text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4b10check.bind(this)} checked={this.state.q4b10check} type="checkbox" name="q4b10check" id="q4b10check" /> Will the study involve prolonged or repetitive testing?
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4b10text" id="q4b10text" value={q4b10text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4b11check.bind(this)} checked={this.state.q4b11check} type="checkbox" name="q4b11check" id="q4b11check" /> Will the research involve administrative or secure data that requires permission from the appropriate authorities before use?
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4b11text" id="q4b11text" value={q4b11text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4b12check.bind(this)} checked={this.state.q4b12check} type="checkbox" name="q4b12check" id="q4b12check" /> Is there a possibility that the safety of the researcher may be in question (e.g. international research; locally employed research assistants)?
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4b12text" id="q4b12text" value={q4b12text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4b13check.bind(this)} checked={this.state.q4b13check} type="checkbox" name="q4b13check" id="q4b13check" /> Does the research involve participants carrying out any of the research activities themselves (i.e. acting as researchers as opposed to just being participants)?
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4b13text" id="q4b13text" value={q4b13text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4b14check.bind(this)} checked={this.state.q4b14check} type="checkbox" name="q4b14check" id="q4b14check" /> Will the research take place outside the UK?  (You may find the <a href="https://www.kent.ac.uk/stms/research-ethics/proportionate-risk-assessment.pdf">Proportionate Risk Assessment document</a> useful)
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4b14text" id="q4b14text" value={q4b14text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4b15check.bind(this)} checked={this.state.q4b15check} type="checkbox" name="q4b15check" id="q4b15check" /> Will the outcome of the research allow respondents to be identified either directly or indirectly (e.g. through aggregating separate data sources gathered from the internet)?
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4b15text" id="q4b15text" value={q4b15text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4b16check.bind(this)} checked={this.state.q4b16check} type="checkbox" name="q4b16check" id="q4b16check" /> Will the research involve the sharing of data or confidential information beyond the initial consent given?
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4b16text" id="q4b16text" value={q4b16text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4b17check.bind(this)} checked={this.state.q4b17check} type="checkbox" name="q4b17check" id="q4b17check" /> Will financial inducements (other than reasonable expenses and compensation for time) be offered to participants?
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4b17text" id="q4b17text" value={q4b17text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4b18check.bind(this)} checked={this.state.q4b18check} type="checkbox" name="q4b18check" id="q4b18check" /> Are there any conflicts of interest with the proposed research/research findings? (eg, is the researcher working for the organisation under research or might the research or research findings cause a risk of harm to the participants(s) or the researcher(s) or the institution?)
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4b18text" id="q4b18text" value={q4b18text} placeholder="Please give details" />
                        <br /> <br />
                        <input onChange={this.flipq4b19check.bind(this)} checked={this.state.q4b19check} type="checkbox" name="q4b19check" id="q4b19check" /> Will the study involve the publication, sharing or potentially insecure electronic storage and/or transfer of data that might allow identification of individuals, either directly or indirectly? (e.g. publication of verbatim quotations from an online forum; sharing of audio/visual recordings; insecure transfer of personal data such as addresses, telephone numbers etc.; collecting identifiable personal data on unprotected** internet sites.)  [**Please note that Qualtrics and Sona Systems provide adequate data security and comply with the requirements of the EU-US Privacy Shield.]
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4b19text" id="q4b19text" value={q4b19text} placeholder="Please give details" />
                        <br /> <br />
                    </div>
                    <div>
                        <h3> Security Sensitive Material </h3>
                        <input onChange={this.changeHandler} type="checkbox" name="q4c1check" id="q4c1check" /> 	Does your research involve access to or use of material covered by the Terrorism Act? <br /> <br /> (The Terrorism Act (2006) outlaws the dissemination of records, statements and other documents that can be interpreted as promoting and endorsing terrorist acts. By answering ‘yes’ you are registering your legitimate use of this material with the Research Ethics Advisory Group. In the event of a police investigation, this registration will help you to demonstrate that your use of this material is legitimate and lawful).
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4c1text" id="q4c1text" value={q4c1text} placeholder="Please give details" />
                        <br /> <br />
                    </div>
                    <div>
                        <h3> Prevent Agenda </h3>
                        <input onChange={this.changeHandler} type="checkbox" name="q4d1check" id="q4d1check" /> 	Does the research have the potential to radicalise people who are vulnerable to supporting terrorism or becoming terrorists themselves?
                        <br />
                        <input onChange={this.changeHandler} type="text" name="q4d1text" id="q4d1text" value={q4d1text} placeholder="Please give details" />
                        <br /> <br />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </>

        );
    }
}
export default PostForm