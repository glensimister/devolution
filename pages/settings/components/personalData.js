class PersonalData extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<h4>Next of Kin</h4>
<p>Please enter addresses of 3 people who take control of your account in the event that you die or loose your login credentials.</p>
<div class="form-group">
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Address 1">
</div>
<div class="form-group">
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Address 2">
</div>
<div class="form-group">
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Address 2">
</div>
<div class="form-group">
    <button type="submit" class="btn btn-blue">SUBMIT</button>
</div>
`;
    }
}
customElements.define('personal-data', PersonalData);