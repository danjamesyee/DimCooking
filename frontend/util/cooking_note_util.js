export const fetchNotes = () => {
    return $.ajax({
        url: '/api/cookingnotes'
    });
};

export const fetchNote = (cookingnoteId) => {
    return $.ajax({
        url: `/api/cookingnotes/${cookingnoteId}`
    });
};

export const createNote = (cookingnote) => {
    return $.ajax({
        url: '/api/cookingnotes',
        method: 'POST',
        data: { cookingnote }
    });
};

export const updateNote = (cookingnote) => {
    return $.ajax({
        url: `/api/cookingnotes/${cookingnote.id}`,
        method: 'PATCH',
        data: { cookingnote } 
    });
};

export const deleteNote = (cookingnoteId) => {
    return $.ajax({
        url: `api/cookingnotes/${cookingnoteId}`,
        method: 'DELETE'
    })
}