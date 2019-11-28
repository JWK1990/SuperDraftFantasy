package au.superdraftfantasy.api.user.exception;

public class UserAlreadyExistsException extends Exception {
    
    public UserAlreadyExistsException(String username) {
        super("Cannot create User. A user with username '" + username + "' already exists.");
    }

}