class listCandidates extends HTMLElement {
    async connectedCallback() {
        
        let user = await API_getUserByWebId(window.webId);
        let approvalRating = (user.profileScore * 2) * 10;

        this.innerHTML += `
<style>
list-candidates div,
.localOfficials div {
    position: relative;
}
.delete-official {
    position: absolute;
    top: 10px;
    right: 10px;
}
.localOfficials a, .localCandidates a{
    text-transform: capitalize;
}
.user-image-large {
    width: 100px;
    height: 100px;
    display: block;
    margin: 20px auto;
    border: 2px solid #848484;
    border-radius: 50%;
}
</style>
<div id="${user.pubKey}" class="${user.elected}">
                  <i class="fa fa-fw fa-close delete-official"></i>
                  <x-star-rating value="${user.profileScore}" number="5"></x-star-rating>
                  <h4><a href="#/voting/html/profile?id=${user.pubKey}&status=candidate">${window.name}</a></h4>
                  <p class="position">${user.position}</p>
                    <p>National</p>
                  <img src="${window.photo}" class="user-image-large animated rotateIn" alt="User Image">
                  <p>Approval rating: <b class="approval-rating">${approvalRating}%</b></p>

                <p><button title="${user.pubKey}" class="btn btn-red">ELECT</button></p>
                  <div class="grid-votes">
                      <div class="red"><i title="${user.pubKey}" class="fa fa-thumbs-o-up"></i></div>
                      <div>${user.upVotesByUser}</div>
                      <div class="blue"><i title="${user.pubKey}" class="fa fa-thumbs-o-down"></i></div>
                      <div>${user.downVotesByUser}</div>
                  </div>
              </div>`;
    }
}

customElements.define('list-candidates', listCandidates);
