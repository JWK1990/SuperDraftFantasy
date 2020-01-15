package au.superdraftfantasy.api.configuration.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import au.superdraftfantasy.api.privilege.PrivilegeEntity;
import au.superdraftfantasy.api.role.RoleEntity;
import au.superdraftfantasy.api.user.UserEntity;
import au.superdraftfantasy.api.user.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private UserRepository userRepository;

    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity applicationUser = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException(username));
        Collection<? extends GrantedAuthority> authorities = getAuthorities(applicationUser.getRoles());
        return new User(applicationUser.getUsername(), applicationUser.getPassword(), authorities);
    }

    private Collection<? extends GrantedAuthority> getAuthorities(Collection<RoleEntity> roles) {
        return getGrantedAuthorities(getPrivileges(roles));
    }

    private List<String> getPrivileges(Collection<RoleEntity> roles) {
        List<PrivilegeEntity> priviledgeEntityList = new ArrayList<>();
        for (RoleEntity role : roles) {
            priviledgeEntityList.addAll(role.getPrivileges());
        }

        List<String> privileges = new ArrayList<>();
        for (PrivilegeEntity item : priviledgeEntityList) {
            privileges.add(item.getType().toString());
        }
        return privileges;
    }

    private List<GrantedAuthority> getGrantedAuthorities(List<String> privileges) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        for (String privilege : privileges) {
            authorities.add(new SimpleGrantedAuthority(privilege));
        }
        return authorities;
    }
}